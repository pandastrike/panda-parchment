assert = require "assert"
Amen = require "amen"

Amen.describe "Hashing/Encoding Functions", (context) ->

  {md5, base64, base64url, toBase64Words, fromBase64Words} = require "../src/hash"

  context.test "md5", ->
    assert (md5 "It was a dark and stormy night") ==
      "678b823bafa0461327d9a7de3902aaa8"

  context.test "base64", ->
    assert (base64 "It was a dark and stormy night") ==
      "SXQgd2FzIGEgZGFyayBhbmQgc3Rvcm15IG5pZ2h0"

  context.test "base64url", ->
    assert (base64url "It was a dark and stormy night.") ==
      "SXQgd2FzIGEgZGFyayBhbmQgc3Rvcm15IG5pZ2h0Lg"

  context.test "toBase64Words", ->
    assert (toBase64Words "1234566778") ==
      "bulk-birch-bye-day-cal-fare-cargo-pn"

  context.test "fromBase64Words", ->
    assert (fromBase64Words "bulk-birch-bye-day-cal-fare-cargo-pn") ==
      "1234566778"
