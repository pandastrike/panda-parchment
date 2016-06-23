assert = require "assert"
Amen = require "amen"

Amen.describe "Array functions", (context) ->

  {
    first, second, third, fourth, fifth, nth, last, rest,
    empty, includes, findIndexOf, findLastIndexOf,
    uniqueBy, unique, uniq, dupes,
    union, intersection, difference, complement,
    push, pop, shift, unshift, enqueue, dequeue,
    splice, insert, remove, cat,
    slice, join, fill,
    shuffle, range, pluck, pair} = require "../src/array"

  # array-only version of empty, length
  # TODO: import from ... ?
  length = (ax) -> ax.length
  empty = (ax) -> (length ax) == 0

  ax = [1..5]

  context.test "first", -> assert (first ax) == 1
  context.test "second", -> assert (second ax) == 2
  context.test "third", -> assert (third ax) == 3
  context.test "fourth", -> assert (fourth ax) == 4
  context.test "fifth", -> assert (fifth ax) == 5
  context.test "nth", -> assert (nth 3, ax) == 3
  context.test "last", -> assert (last ax) == 5
  context.test "rest", -> assert (first rest ax) == 2
  context.test "includes", ->
    assert (includes 3, ax) && !(includes 6, ax)

  context.test "push"

  context.test "pop"

  context.test "cat", ->
    assert.deepEqual (cat [1..5], [6..10]), [1..10]

  context.test "slice", ->
    assert.deepEqual (slice  1,  2, ax), [2]
    assert.deepEqual (slice  2,  5, ax), [3,4,5]
    assert.deepEqual (slice  1, -2, ax), [2,3]
    assert.deepEqual (slice -3, -1, ax), [3,4]
    assert.deepEqual (slice -3, -1, "0123456789"), "78"

  context.test "uniqueBy", ->
    mod3 = (x) -> x % 3
    assert.deepEqual (uniqueBy mod3, ax), [1,2,0]

  context.test "unique", ->
    assert.deepEqual (unique [1, 2, 1, 2]), [1,2]

  context.test "dupes", ->
    assert.deepEqual (dupes [1,2,1,3,2]), [1,2]

  context.test "union", ->
    bx = [3..6]
    rx = union ax, bx
    assert (empty (dupes rx))
    assert (length (unique rx)) == (length rx)

  context.test "intersection", ->
    assert (empty (intersection [1, 2], [3, 4]))
    assert (empty (intersection [1, 1], [2, 2]))
    assert (empty (intersection [], [1, 2, 3]))
    assert (empty (intersection [1, 2, 3], []))
    assert (empty (intersection [1, 2], [2, 3], [3, 4]))
    assert (first intersection [1, 2], [2, 3]) == 2
    assert (first intersection [1, 2], [2, 3], [3, 2]) == 2

  context.test "difference", ->
    bx = [3..6]
    assert.deepEqual (difference ax, bx), [1,2,6]

  context.test "complement", ->
    bx = [3..6]
    assert.deepEqual (complement ax, bx), [1,2]

  context.test "insert", ->
    assert.deepEqual (insert [4,2,1], 3, 1), [4,3,2,1]
    assert.deepEqual (insert [1,2,4], 3, -1), [1..4]
    assert.deepEqual (insert [2..4], 1, 0), [1..4]

  context.test "remove", ->
    bx = [1..5]
    assert.deepEqual (remove bx, 3), [1,2,4,5]
    assert.deepEqual (remove bx, 1), [2,4,5]
    assert.deepEqual (remove bx, 5), [2,4]
    assert.deepEqual (remove bx, 3), [2,4]

  context.test "shuffle", ->
    assert.notDeepEqual (shuffle [1..10]), [1..10]

  context.test "range", ->
    assert.deepEqual (range 1, 5), [1, 2, 3, 4, 5]
    assert.deepEqual (range 5, 1), [5, 4, 3, 2, 1]

  context.test "join"
  context.test "fill"
