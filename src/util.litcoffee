# Utility Functions

These should probably all go somewhere else. For the moment, this is a holding pen of sorts for functions that we're not sure what to do with.

    {curry} = require "fairmont-core"
    {promise} = require "when"
    {Method} = require "fairmont-multimethods"
    {isFunction, isGenerator} = require "./type"
    {async} = require "./async"
    {isArray, isString, isObject} = require "./type"
    {blank} = require "./string"

## memoize

A very simple way to cache results of functions that take a single argument. Also takes an optional hash function that defaults to calling `toString` on the function's argument.

    memoize = do (_hash = undefined) ->
      _hash = (x) -> x.toString()
      (fn, hash = _hash, memo = {}) ->
        (x) -> memo[hash x] ?= fn x

## timer

Set a timer. Takes an interval in microseconds and an action. Returns a function to cancel the timer. Basically, a more convenient way to call `setTimeout` and `clearTimeout`.

    timer = (wait, action) ->
      id = setTimeout(action, wait)
      -> clearTimeout( id )

## sleep

Returns a promise that yields after a given interval.

    sleep = (interval) ->
      promise (resolve, reject) ->
        timer interval, -> resolve()

## times

Run a function N number of times.

    times = curry (fn, n) -> fn() until n-- == 0

## benchmark

Run a function an record how long it took. Use this in conjunction with `times` to benchmark a function over N repetitions.

    benchmark = Method.create()

    Method.define benchmark, isFunction, (fn) ->
      start = Date.now()
      fn()
      Date.now() - start

    Method.define benchmark, isGenerator, (fn) ->
      start = Date.now()
      yield fn()
      Date.now() - start

## empty

Returns true if a contains no value. For arrays and strings, this means that its length is zero. For an object, it means that `keys` returns an array of length zero. For any other value, it will return true unless it's `undefined`.

    empty = (x) ->
      if isArray x
        x.length == 0
      else if isObject x
        empty Object.keys x
      else if isString x
        blank x
      else
        !x?

## length

Returns the length property of an object. This is so frequently used with strings and arrays that it's reasonable to include it. We were tempted to add a variant for objects, but that could produce surprising results. Instead, just use `length keys object`, which is still much more readable than `Object.keys(foo).length`. And, of course, if you're just comparing to zero, use `empty`: `empty foo` works on objects.

    length = (x) -> x.length


## deepEqual

    deepEqual = (a, b) ->
      assert = require "assert"
      try
        assert.deepEqual a, b
        true
      catch
        false

---

    module.exports = {times, sleep, timer, memoize,
      times, benchmark, empty, length, deepEqual}
