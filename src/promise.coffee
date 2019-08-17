import {curry, binary} from "panda-garden"
import {isDefined, isString, isObject, isFunction} from "./type"

promise = (f) -> new Promise f

reject = (x) -> Promise.reject x
resolve = (x) -> Promise.resolve x

# follow reads better in some cases and avoids naming
# conflicts within promise-returning functions
follow = resolve

all = (px) -> Promise.all px

export {promise, resolve, follow, reject, all}
