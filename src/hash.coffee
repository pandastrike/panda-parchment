fs = require "fs"
Crypto = require "crypto"
{Method} = require "fairmont-multimethods"
{isBuffer, isInteger, isString} = require "./type"
Base64Words = require "base64-words"
{promise, async} = require "./promise"
{join, push} = require "./array"

md5 = Method.create()

Method.define md5, isString,
  (string) -> Crypto.createHash('md5').update(string, 'utf-8').digest("hex")

Method.define md5, isBuffer,
  (buffer) -> Crypto.createHash('md5').update(buffer, 'binary').digest("hex")

base64 = Method.create()
Method.define base64, isString, (string) -> base64 new Buffer string
Method.define base64, isBuffer, (buffer) -> buffer.toString 'base64'


base64URL = (buffer) ->
  base64 buffer
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/\=+$/, '')

# Use base64URL so we don't get the trailing delimiters
toBase64Words = (buffer) ->
  Base64Words.fromBase64 base64URL buffer

fromBase64Words = (string) ->
  new Buffer (Base64Words.toBase64 string), 'base64'

# read from /dev/urandom unless on Windows
# https://github.com/nodejs/node/issues/5798
randomBytes = unless process.platform == "win32"
  (n) ->
    promise (resolve, reject) ->
      fs.open "/dev/urandom", "r", (error, fd) ->
        buffer = if Buffer.alloc then Buffer.alloc n else new Buffer n
        fs.read fd, buffer, 0, n, 0, (error, m) ->
          if n == m
            resolve buffer
          else
            reject "Unable to read #{n} bytes from /dev/urandom"
else
  (n) ->
    promise (resolve, reject) ->
      Crypto.randomBytes n, (error, buffer) ->
        unless error?
          resolve buffer
        else
          reject error

randomKey = async (n) -> base64URL yield randomBytes n

# selects a random word from Base64Words.dictionary with uniform distribution
randomWord = do ->
  max = 0xffff - 0xffff % Base64Words.dictionary.length
  async ->
    loop
      buffer = yield randomBytes 2
      i = buffer.readUInt16LE()
      if i < max
        return Base64Words.dictionary[i % Base64Words.dictionary.length]

randomWords = Method.create()

Method.define randomWords, isInteger,
  (bytes) -> randomWords bytes: bytes

# number of words with entropy >= bytes
Method.define randomWords, (({bytes}) -> isInteger bytes),
  ({bytes}) ->
    words = Math.ceil 8 * bytes / Math.log2 Base64Words.dictionary.length
    randomWords words: words

Method.define randomWords, (({words}) -> isInteger words),
  async ({words}) ->
    ax = []
    push ax, yield randomWord() until words-- == 0
    join ax, "-"

module.exports = {md5,
  base64, base64URL,
  toBase64Words, fromBase64Words
  randomBytes, randomKey, randomWord, randomWords}
