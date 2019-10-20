# Object functions that pull from other parchment primitives.
import {curry} from "panda-garden"
import {isObject} from "./type"
import {equal} from "./equal"

query = curry (example, target) ->
  if (isObject example) && (isObject target)
    for k, v of example
      return false unless query v, target[k]
    return true
  else
    equal example, target

export {query}
