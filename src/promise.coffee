{isObject, isFunction} = require "./type"

promise = (f) -> new Promise f

reject = (x) -> Promise.reject x
resolve = (x) -> Promise.resolve x

# follow reads better in some cases and avoids naming
# conflicts within promise-returning functions
follow = resolve

# TODO: handle other styles of callbacks
lift = (f) ->
  if isObject f
    proxy = {}
    for key, value of f when isFunction value
      proxy[key] = lift value
    proxy
  else if isFunction f
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
  else
    f

module.exports = {promise, resolve, follow, reject, lift}
