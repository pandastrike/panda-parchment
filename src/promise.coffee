{isPromise, isObject, isFunction, isGeneratorFunction} = require "./type"

unhandled = new Map

# TODO: make this configurable?
process.on "unhandledRejection", (reason, p) ->
  console.warn "Warning: unhandled rejection for", p

# Example, adapted from Node docs, that defers reporting
#
# process.on "unhandledRejection", (reason, p) ->
#   unhandled.set p, reason
#
# process.on "rejectionHandled", (p) ->
#   unhandled.delete p
#
# process.on "exit", ->
#   unhandled.forEach (reason, p) ->
#     console.warn "Warning: unhandled rejection for", p

promise = (executor) -> new Promise executor

reject = (x) -> Promise.reject x
resolve = (x) -> Promise.resolve x

# follow reads better in some cases and avoids naming
# conflicts within promise executors
follow = resolve

lift = (f) ->
  if isObject f
    proxy = {}
    for key, value of f when isFunction value
      proxy[key] = lift value
    proxy
  else
    (args...) ->
      promise (resolve, reject) ->
        try
          f args..., (error, _args...) ->
            unless error?
              resolve _args...
            else
              reject error
        catch error
          reject error

# This code is adapted from:
# http://tc39.github.io/ecmascript-asyncawait/#intro

async = (g) ->

  if !(isGeneratorFunction g)
    throw new TypeError "#{g} is not a generator function"

  (args...) ->
    self = this
    promise (resolve, reject) ->
      i = g.apply self, args
      f = -> i.next()
      do step = (f) ->
        try
          {done, value} = f()
        catch error
          reject error

        if done
          resolve value
        else
          follow value
          .then (value) -> step -> i.next value
          .catch (error) -> step -> i.throw error

call = (f) -> do async f

module.exports = {promise, resolve, follow, reject, lift, async, call}
