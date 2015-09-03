assert = require "assert"
Amen = require "amen"

Amen.describe "Async programming functions", (context) ->

  {async, call} = require "../src/async"
  {sleep} = require "../src/util"

  context.test "call", ->
    # Putting in the asynchronous sleep is contrived, but it keeps this simple.
    call ->
      string = "panda"
      yield sleep 100
      assert string == "panda"

  context.test "async", ->
    # Putting in the asynchronous sleep is contrived, but it keeps this simple.
    square = async (x) ->
      yield sleep 100
      x**2

    call ->
      a = 2
      a = yield square a
      a = yield square a
      a = yield square a
      assert a == 256
