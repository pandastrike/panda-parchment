# Array functions that pull from other parchment primitives.
import {cat} from "./array"
import {equal} from "./equal"

{floor, random} = Math

# https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
#
shuffle = (ax) ->
  bx = cat ax
  i = bx.length
  unless i <= 1
    while --i > 0
      # the distinguishing characteristic of fisher-yates is that the random
      # value generated is bounded by the iterator index (Math.random() * i)
      # instead of the size of the array (Math.random() * bx.length)
      j = floor random() * (i + 1)
      [bx[i], bx[j]] = [bx[j], bx[i]]
    if equal ax, bx then shuffle ax else bx
  else
    bx

export {shuffle}
