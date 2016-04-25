{isPromise, isObject, isFunction, isGeneratorFunction} = require "./type"

promise = (executor) ->
  new Promise executor

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

async = (g) ->

  return g unless isGeneratorFunction g

  (args...) ->

    promise (resolve, reject) ->

      it = g args...

      bounce = ({done, error}) ->
        if done
          reject error
        else
          try
            follow it.throw error
          catch error
            reject error

      follow = ({done, value}) ->
        if done
          if isPromise value
            value
            .then resolve
            .catch reject
          else
            resolve value
        else
          if isPromise value
            value
            .then step
            .catch (error) -> bounce {done, error}
          else
            step value

      do step = (value=null) ->
        try
          follow it.next value
        catch error
          reject error

call = (f) -> do async f

module.exports = {promise, lift, async, call}
