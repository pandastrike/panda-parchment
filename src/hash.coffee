Crypto = require "crypto"
{Method} = require "fairmont-multimethods"
{isBuffer, isString} = require "./type"

md5 = Method.create()

Method.define md5, isString,
  (string) -> Crypto.createHash('md5').update(string, 'utf-8').digest("hex")

Method.define md5, isBuffer,
  (buffer) -> Crypto.createHash('md5').update(buffer, 'binary').digest("hex")

base64 = (string) ->
  new Buffer(string).toString('base64').replace(/\=+$/, '')

base64url = (string) ->
  new Buffer(string)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/\=+$/, '')

module.exports = {md5, base64, base64url}
