assert = require "assert"
Amen = require "amen"

Amen.describe "Utility functions", (context) ->

  {times, sleep, timer, memoize,
    times, benchmark, empty, length} = require "../util"

  context.test "memoize", ->
    count = 0
    f = memoize (x) -> count++; x
    assert f(5) == 5 && count == 1
    assert f(5) == 5 && count == 1
    assert f(6) == 6 && count == 2

  context.test "timer", ->
    # We need an action to put into "timer", but we'll cancel it before it runs.
    x = 5
    tooLong = -> x = x * 2
    cancel = timer 10000, tooLong

    # 10s is too long to wait.  Cancel it!!
    cancel()
    assert x == 5   # We kept tooLong from executing.

  context.test "sleep", ->
    # Provide a containing generator for the sleep calls.
    startTime = Date.now()
    await sleep 100
    duration = Date.now() - startTime
    assert duration > 50  # Without "sleep", this would take fractions of a millisecond.

  context.test "times", ->
    n = 0
    assert (times (-> ++n), 3).length == 3

    x = 2
    square = -> x = x ** 2

    result = times square, 5
    assert.deepEqual result, [ 4, 16, 256, 65536, 4294967296 ]

  context.test "benchmark", ->
    useless = ->
      for i in [0...1000000]
        y = 1 + i

    single = benchmark useless
    multiple = benchmark -> times(useless, 5)

    assert 0 < single < multiple

  context.test "empty", ->
    assert.equal empty( [] ), true
    assert.equal empty( "" ), true

    assert.equal empty( [1] ), false
    assert.equal empty( "abc" ), false

  context.test "length", ->
    assert length([]) == 0
    assert length([1]) == 1
    assert length([1, 2]) == 2
    assert length([1, 2, 3]) == 3

    assert length("") == 0
    assert length("p") == 1
    assert length("pan") == 3
    assert length("panda") == 5
