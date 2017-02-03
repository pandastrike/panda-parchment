assert = require "assert"
Amen = require "amen"

{isString} = require "../src/type"
{replace, split} = require "../src/string"

Amen.describe "Hashing/Encoding Functions", (context) ->

  {md5, base64, base64URL, toBase64Words, fromBase64Words,
  randomBytes, randomKey, randomWord, randomWords} = require "../src/hash"

  context.test "md5", ->
    assert (md5 "It was a dark and stormy night") ==
      "678b823bafa0461327d9a7de3902aaa8"

  context.test "base64", ->
    assert (base64 "It was a dark and stormy night") ==
      "SXQgd2FzIGEgZGFyayBhbmQgc3Rvcm15IG5pZ2h0"

  context.test "base64URL", ->
    assert (base64URL "It was a dark and stormy night.") ==
      "SXQgd2FzIGEgZGFyayBhbmQgc3Rvcm15IG5pZ2h0Lg"

  context.test "toBase64Words", ->
    assert (toBase64Words "1234566778") ==
      "ducky-apron-finer-tulip-genre-finite-groom"

  context.test "fromBase64Words", ->
    assert.equal "1234566778",
      (fromBase64Words "ducky-apron-finer-tulip-genre-finite-groom")
      .toString "utf8"

  context.test "randomBytes", ->
    assert.equal 16, (yield randomBytes 16).length

  context.test "randomKey", ->
    assert isString yield randomKey 16

  context.test "randomWord", ->
    assert isString yield randomWord()
    assert.notEqual "", yield randomWord()

  context.test "randomWords", ->
    assert isString yield randomWords 16
    assert.equal 10, (split "-", yield randomWords 16).length
    assert.notEqual "", replace /-/g, "", yield randomWords 16

    assert isString yield randomWords bytes: 8
    assert.equal 5, (split "-", yield randomWords bytes: 8).length
    assert.notEqual "", replace /-/g, "", yield randomWords bytes: 8

    assert isString yield randomWords words: 3
    assert.equal 3, (split "-", yield randomWords words: 3).length
    assert.notEqual "", replace /-/g, "", yield randomWords words: 3
