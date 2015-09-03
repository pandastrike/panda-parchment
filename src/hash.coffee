Crypto = require "crypto"

md5 = (string) ->
  Crypto.createHash('md5').update(string, 'utf-8').digest("hex")

base64 = (string) ->
  new Buffer(string).toString('base64').replace(/\=+$/, '')

base64url = (string) ->
  new Buffer(string)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/\=+$/, '')

module.exports = {md5, base64, base64url}
