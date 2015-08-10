{curry, flip, compose, partial, _, identity,
  unary, binary, ternary} = require "fairmont-core"

{detach} = require "./object"

# array only version of empty, not exported
empty = (x) -> x.length == 0

push = curry (ax, a) -> ax.push a ; ax

cat = detach Array::concat

slice = curry (i, j, ax) -> ax[i...j]

nth = curry (i, ax) -> ax[i - 1]
first = nth 1
second = nth 2
third = nth 3
fourth = nth 4
fifth = nth 5

last = ([rest..., x]) -> x

rest = slice 1, undefined

includes = curry (x, ax) -> x in ax

uniqueBy = curry (f, ax) ->
  bx = []
  for a in ax
    b = f a
    (bx.push b) unless b in bx
  bx

unique = uniq = uniqueBy identity

dupes = ([a, ax...]) ->
  if empty ax
    []
  else
    bx = dupes ax
    if a in ax && !(a in bx) then [a, bx...] else bx

union = curry compose unique, cat

intersection = (first, rest...) ->
  if empty rest
    first
  else
    x for x in (intersection rest...) when x in first

difference = curry (ax, bx) ->
  cx = union ax, bx
  cx.filter (c) ->
    (c in ax && !(c in bx)) ||
      (c in bx && !(c in ax))

complement = curry (ax, bx) -> ax.filter (c) -> !(c in bx)

remove = curry (element, ax) ->
  if (index = ax.indexOf( element )) > -1
    ax[index..index] = []
    element
  else
    null

shuffle = (ax) ->
  bx = cat ax
  unless bx.length <= 1
    for b, i in bx
      j = i
      while j == i
        j = Math.floor Math.random() * bx.length
      [bx[i], bx[j]] = [bx[j], bx[i]]
    if deepEqual ax, bx then shuffle ax else bx
  else
    bx

range = curry (start, finish) -> [start..finish]

module.exports = {push, cat, slice, first, second, third, last, rest,
  includes, uniqueBy, unique, uniq, dupes, union, intersection,
  difference, complement, remove, shuffle}
