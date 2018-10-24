import {curry} from "panda-garden"
import {Method} from "panda-generics"
import {promise, async} from "./promise"
import {isArray, isString, isObject, isFunction, isAsyncFunction} from "./type"
import {blank} from "./string"

timer = (wait, action) ->
  id = setTimeout(action, wait)
  -> clearTimeout( id )

sleep = (interval) ->
  promise (resolve, reject) ->
    timer interval, -> resolve()

times = curry (fn, n) -> fn() until n-- == 0

microseconds = do ->
  if process?.hrtime?
    ->
      [seconds, nanoseconds] = process.hrtime()
      seconds * 1000000 + nanoseconds / 1000
  else if window?.performance?.now?
    -> window.performance.now()
  else
    -> Date.now() * 1000

benchmark = Method.create()

Method.define benchmark, isFunction, (fn) ->
  start = microseconds()
  fn()
  microseconds() - start

Method.define benchmark, isAsyncFunction, (fn) ->
  start = microseconds()
  await fn()
  microseconds() - start

export {sleep, timer, microseconds, benchmark, times}
