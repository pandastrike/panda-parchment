import {curry, pipe, partial, _, identity,
  unary, binary, ternary} from "@pandastrike/garden"

import {detach} from "./object"

nth = curry (i, ax) -> ax[i - 1]
first  = nth 1
second = nth 2
third  = nth 3
fourth = nth 4
fifth  = nth 5
last = ([rest..., last]) -> last
rest = ([first, rest...]) -> rest

# array only version of empty, not exported
empty = (x) -> x.length == 0

includes = if Array::includes
  curry (a, ax) -> ax.includes a
else
  curry (a, ax) -> (ax.indexOf a ) != -1

# find and findLast are defined in reactive
# with specializations for array

# curryable index variations that can use ? operator or equivalent
# ex: if (i = findIndexOf ax, a)? then ...
findIndexOf = curry (a, ax) -> if (i = ax.indexOf a) != -1 then i
findLastIndexOf = curry (a, ax) -> if (i = ax.lastIndexOf a) != -1 then i

# reactive `any` is preferred but `some` is faster
some = curry binary detach Array::some

# Array mutators
push = curry (ax, a...) -> ax.push a...; ax
pop = detach Array::pop
shift = detach Array::shift
unshift = detach Array::unshift
enqueue = unshift
dequeue = pop

# true splice without weird insertion option
# or compose-breaking return value
splice = curry (i, n, ax) ->
  ax.splice i, n
  ax

insert = curry ternary (ax, a, i) ->
  ax.splice i, 0, a
  ax

remove = curry (ax, a) ->
  (ax.splice i, 1) if (i = ax.indexOf( a )) != -1
  ax

cat = detach Array::concat

slice = curry (i, j, ax) -> ax[i...j]

sort = curry binary detach Array::sort
join = curry binary detach Array::join
fill = curry (ax, a) -> ax.fill a

# Set operations...

# TODO: some of these could be implemented in terms of producers
uniqueBy = curry (f, ax) ->
  bx = []
  for a in ax
    b = f a
    (bx.push b) unless b in bx
  bx

unique = uniq = (ax) -> Array.from new Set ax

dupes = ([a, ax...]) ->
  if empty ax
    []
  else
    bx = dupes ax
    if a in ax && !(a in bx) then [a, bx...] else bx

union = pipe [ cat, unique ]

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

range = curry (start, finish) -> [start..finish]

{random, round} = Math
pluck = (ax) -> ax[(round random() * (ax.length - 1))]

pair = curry (a, b) -> [a, b]

export {first, second, third, fourth, fifth, nth, last, rest,
  empty, includes, findIndexOf, findLastIndexOf,
  uniqueBy, unique, uniq, dupes,
  union, intersection, difference, complement,
  push, pop, shift, unshift, enqueue, dequeue,
  splice, insert, remove, cat,
  slice, join, fill,
  range, pluck, pair}
