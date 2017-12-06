{curry} = require "fairmont-core"
{Method} = require "fairmont-multimethods"
{isFunction, isGenerator} = require "./type"
{promise, async} = require "./promise"
{isArray, isString, isObject} = require "./type"
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

benchmark = Method.create()

Method.define benchmark, isFunction, (fn) ->
  start = Date.now()
  fn()
  Date.now() - start

Method.define benchmark, isGenerator, (fn) ->
  start = Date.now()
  yield fn()
  Date.now() - start

# empty and length work on both arrays and strings
# and really anything with a meaningful length
# attribute, so that's why they're here and not
# in array...

# TODO: multimethod variant of empty that allows
# empty to be defined for any type

empty = (x) -> x.length == 0
length = (x) -> x.length

module.exports = {times, sleep, timer, memoize,
  times, benchmark, empty, length}
