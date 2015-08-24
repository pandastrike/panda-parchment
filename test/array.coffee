assert = require "assert"
Amen = require "amen"

Amen.describe "Array functions", (context) ->

  {cat, slice, first, second, third, fourth, fifth, nth, last, rest,
    includes, uniqueBy, unique, uniq, dupes, union, intersection,
    difference, complement, remove, shuffle, range} = require "../src/array"

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

  context.test "cat", ->
    bx = [6..9]
    rx = cat ax, bx
    assert (length rx) == 9 && (first rx) == 1 && (last rx) == 9

  context.test "slice", ->
    rx = slice 1, 2, ax
    assert (length rx) == 1 && (first rx) == 2

  context.test "uniqueBy", ->
    numbers = [2, 3, 6, 9, 10, 14, 15, 18, 21, 22, 26, 27, 30, 33, 34, 39, 45, 51]
    f = (x) -> if x % 2 == 0 then x * 3 else x * 2

    output = uniqueBy f, numbers
    assert.deepEqual output, [6, 18, 30, 42, 54, 66, 78, 90, 102]

  context.test "unique", ->
    assert (last (unique (cat [1..5], [2..6]))) == 6

  context.test "dupes", ->
    assert (first (dupes (cat [1..5], [2..6]))) == 2

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
    rx = difference ax, bx
    assert (first rx) == 1 && (second rx) == 2 && (length rx) == 3

  context.test "complement", ->
    bx = [3..6]
    rx = complement ax, bx
    assert (first rx) == 1 && (second rx) == 2 && (length rx) == 2

  context.test "remove", ->
    fruits = ["apple", "orange", "lemon", "apple", "lime", "apple"]

    output = remove "orange", fruits
    assert.deepEqual output, "orange"
    assert.deepEqual fruits, ["apple", "lemon", "apple", "lime", "apple"]

    output = remove "apple", fruits
    assert.deepEqual output, "apple"
    assert.deepEqual fruits, ["lemon", "apple", "lime", "apple"]

    output = remove "orange", fruits
    assert.deepEqual output, null
    assert.deepEqual fruits, ["lemon", "apple", "lime", "apple"]


  context.test "shuffle", ->
    bx = [1..10]
    rx = shuffle bx
    assert.notDeepEqual bx, rx

  context.test "range", ->
    output = range 1, 5
    assert.deepEqual output, [1, 2, 3, 4, 5]

    output = range 5, 1
    assert.deepEqual output, [5, 4, 3, 2, 1]

    output = range 5, 5
    assert.deepEqual output, [ 5 ]

    output = range 1, "foobar"
    assert.deepEqual output, [] 
