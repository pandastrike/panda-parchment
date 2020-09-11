import {curry, negate} from "@pandastrike/garden"
import {isObject, isArray, isFunction, isRegExp} from "./type"

property = curry (key, object) -> object[key]

bind = curry (f, x) -> f.bind x

detach = (f) -> curry (x, args...) -> f.apply x, args

properties = (target, descriptions) ->
  for name, description of descriptions
    description.enumerable ?= true
    description.configurable ?= true
    Object.defineProperty target, name, description

methods = (target, definitions) ->
  for name, f of definitions
    Object.defineProperty target, name,
      value: f
      configurable: true
      writable: true

has = curry (p, x) -> x[p]?

keys = Object.keys

values = (x) -> v for k, v of x

pairs = (x) -> [k, v] for k, v of x

pick = curry (f, x) ->
  r = {}
  r[k] = v for k, v of x when f k, v
  r

omit = curry (f, x) -> pick (negate f), x

include = extend = assign = (target, sources...) ->
  Object.assign target, sources...

merge = (objects...) -> Object.assign {}, objects...

toJSON = (x, pretty = false) ->
  if pretty
    JSON.stringify x, null, 2
  else
    JSON.stringify x

fromJSON = JSON.parse

export {property, bind, detach,
properties, methods,
has, keys, values, pairs,
pick, omit,
assign, include, extend, merge,
toJSON, fromJSON}
