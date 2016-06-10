fs = require "fs"
Crypto = require "crypto"
{Method} = require "fairmont-multimethods"
{isBuffer, isString} = require "./type"
Base64Words = require "base64-words"
{promise, async} = require "./promise"

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
        buffer = Buffer.alloc n
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
randomWords = async (n) -> toBase64Words yield randomBytes n

module.exports = {md5,
  base64, base64URL,
  toBase64Words, fromBase64Words
  randomBytes, randomKey, randomWords}
