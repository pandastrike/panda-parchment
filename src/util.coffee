{curry} = require "fairmont-core"
{promise} = require "when"
{Method} = require "fairmont-multimethods"
{isFunction, isGenerator} = require "./type"
{async} = require "./async"
{isArray, isString, isObject} = require "./type"
{blank} = require "./string"

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

empty = (x) ->
  if isArray x
    x.length == 0
  else if isObject x
    empty Object.keys x
  else if isString x
    blank x
  else
    !x?

length = (x) -> x.length

deepEqual = (a, b) ->
  assert = require "assert"
  try
    assert.deepEqual a, b
    true
  catch
    false

module.exports = {times, sleep, timer, memoize,
  times, benchmark, empty, length, deepEqual}
