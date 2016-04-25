assert = require "assert"
Amen = require "amen"

{async, call} = require "../src/promise"

Amen.describe "Utility functions", (context) ->

  {times, sleep, timer, memoize, deepEqual,
    times, benchmark, empty, length} = require "../src/util"

  context.test "memoize", ->
    # You can stick memoize before a function and cache answers for the future.
    double = memoize (x) -> 2 * x
    assert double(5) == 10

    # We can also pass a "preheated" cache to memoize.  Here we prove by caching
    # an incorrect answer.
    f = (x) -> 2 * x
    double = memoize f, null, "5": 25
    assert double(5) == 25  # Incorrect, but expected.

    #===========================================================================
    # That was simple enough, but lets prove that we're getting a performance
    # boost from memoize.  Here we define a function with a "sleep" duration we
    # artificially impose for simplicity.
    triple = memoize async (x) ->
      yield sleep 100
      3 * x

    # Run "triple", but record the times before and after execution.  If the
    # duration is less than 100ms, we've proved that the cached answer was used.
    call ->
      startTime = Date.now()
      result = yield triple 5
      duration = Date.now() - startTime
      assert result == 15
      assert duration >= 100

      # Run again to check for the cache.
      startTime = Date.now()
      result = yield triple 5
      duration = Date.now() - startTime
      assert result == 15
      assert duration <= 100

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
    call ->
      startTime = Date.now()
      yield sleep 100
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

  context.test "deepEqual", ->
    a = [1, 2, 3, 4, 5]
    b = [1, 2, 3, 4, 5]
    assert (a == b) == false
    assert deepEqual a, b

    a =
      foo: 1
      bar: 2
      baz: 3

    b =
      bar: 2
      foo: 1
      baz: 3

    assert (a == b) == false
    assert deepEqual a, b
