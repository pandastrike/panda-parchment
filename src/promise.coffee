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

      _throw = (error) ->
        try
          it.throw error
          # error was handled inside the generator
          step()
        catch error
          reject error

      do step = (value=null) ->

        try
          {done, value} = it.next value

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
              .catch _throw
            else
              step value

        catch error
          reject error

call = (f) -> do async f

module.exports = {promise, lift, async, call}
