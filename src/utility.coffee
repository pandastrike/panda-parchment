{curry} = require "fairmont-core"
{Method} = require "fairmont-multimethods"
{promise, async} = require "./promise"
{isArray, isString, isObject, isFunction, isAsyncFunction} = require "./type"
{blank} = require "./string"

# TODO: move to core
memoize = do (_hash = undefined) ->
  _hash = (x) -> x.toString()
  (fn, hash = _hash, memo = {}) ->
    (x) -> memo[hash x] ?= fn x

timer = (wait, action) ->
  id = setTimeout(action, wait)
  -> clearTimeout( id )

sleep = (interval) ->
  promise (resolve, reject) ->
    timer interval, -> resolve()

times = curry (fn, n) -> fn() until n-- == 0

microseconds = ->
  [seconds, nanoseconds] = process.hrtime()
  seconds * 1000000 + nanoseconds / 1000

benchmark = Method.create()

Method.define benchmark, isFunction, (fn) ->
  start = microseconds()
  fn()
  microseconds() - start

Method.define benchmark, isAsyncFunction, (fn) ->
  start = microseconds()
  await fn()
  microseconds() - start

# empty and length work on both arrays and strings
# and really anything with a meaningful length
# attribute, so that's why they're here and not
# in array...

# TODO: multimethod variant of empty that allows
# empty to be defined for any type

empty = (x) -> x.length == 0
length = (x) -> x.length

module.exports = {times, sleep, timer, memoize,
  times, microseconds, benchmark, empty, length}
