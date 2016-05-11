Crypto = require "crypto"
{Method} = require "fairmont-multimethods"
{isBuffer, isString} = require "./type"
Base64Words = require "./base64-words"

md5 = Method.create()

Method.define md5, isString,
  (string) -> Crypto.createHash('md5').update(string, 'utf-8').digest("hex")

Method.define md5, isBuffer,
  (buffer) -> Crypto.createHash('md5').update(buffer, 'binary').digest("hex")

base64 = (string) ->
  new Buffer(string).toString('base64')

base64url = (string) ->
  new Buffer(string)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/\=+$/, '')

toBase64Words = (string) ->
  Base64Words.fromBase64(new Buffer(string).toString('base64'))

fromBase64Words = (string) ->
  new Buffer(Base64Words.toBase64(string), 'base64').toString('ascii')

module.exports = {md5, base64, base64url, toBase64Words, fromBase64Words}
