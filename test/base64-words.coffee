assert = require "assert"
Amen = require "amen"

Amen.describe "Base64 Dicewords Encoding", (context) ->

  {fromBase64, toBase64} = require "../src/base64-words"

  context.test "fromBase64", ->
    assert (fromBase64 "MTIzNDU2Njc3OA==") ==
      "bulk-birch-bye-day-cal-fare-cargo-pn"

  context.test "toBase64", ->
    assert (toBase64 "bulk-birch-bye-day-cal-fare-cargo-pn") ==
      "MTIzNDU2Njc3OA=="
