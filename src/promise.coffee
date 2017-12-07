import {curry, binary} from "fairmont-core"
import {Method} from "fairmont-multimethods"
import {isDefined, isString, isObject, isFunction} from "./type"

promise = (f) -> new Promise f

reject = (x) -> Promise.reject x
resolve = (x) -> Promise.resolve x

# follow reads better in some cases and avoids naming
# conflicts within promise-returning functions
follow = resolve

rephrase = Method.create
  # for ordinary values, this does nothing
  # includes async and generator functions
  default: (callback, value) ->
    console.log {callback, value}
    value

# for objects, we try to rephrase the values
Method.define rephrase, isFunction, isObject, (callback, object) ->
  proxy = {}
  for key, value of object
    proxy[key] = rephrase callback, value
  proxy

# real work happens here, when we have a function
Method.define rephrase, isFunction, isFunction, (callback, f) ->
  (args...) ->
    promise (resolve, reject) ->
      try
        f args..., (callback resolve, reject)...
      catch error
        reject error

callbacks =
  node: (resolve, reject) -> [
    (error, args...) ->
      if error then (reject error) else (resolve args...)
  ]
  handlers: (resolve, reject) -> [ resolve, reject ]

Method.define rephrase, isString, isDefined, (style, target) ->
  rephrase callbacks[style], target

rephrase = curry binary rephrase

export {promise, resolve, follow, reject, rephrase}
