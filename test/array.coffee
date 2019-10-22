import assert from "assert"
import {test, print} from "amen"

import {first, second, third, fourth, fifth, nth, last, rest,
  empty, includes, findIndexOf, findLastIndexOf, uniqueBy, unique, uniq, dupes,
  union, intersection, difference, complement, push, pop, shift, unshift,
  enqueue, dequeue, splice, insert, remove, cat, slice, join, fill,
  range, pluck, pair} from "../src/array"

# import sinon from "sinon"

do ->

  print await test "array helpers", [

    test "first", -> assert (first [1..5]) == 1
    test "second", -> assert (second [1..5]) == 2
    test "third", -> assert (third [1..5]) == 3
    test "fourth", -> assert (fourth [1..5]) == 4
    test "fifth", -> assert (fifth [1..5]) == 5
    test "nth", -> assert (nth 3, [1..5]) == 3
    test "last", -> assert (last [1..5]) == 5
    test "rest", -> assert (first rest [1..5]) == 2
    test "includes", -> assert (includes 3, [1..5]) && !(includes 6, [1..5])

    test "findIndexOf", ->
      assert (findIndexOf 2, [1, 2, 3]) == 1
      assert (findIndexOf 4, [1, 2, 3]) == undefined

    test "findLastIndexOf", ->
      assert (findLastIndexOf 2, [1, 2, 2, 3]) == 2
      assert (findLastIndexOf 4, [1, 2,, 2, 3]) == undefined

    test "push/enqueue", -> assert.deepEqual (push [1..4], 5), [1..5]
    test "pop/dequeue", -> assert (pop [1..5]) == 5

    test "shift", ->
      A = [1, 2, 3]
      assert (shift A) == 1
      assert.deepEqual A, [2, 3]

    test "unshift", ->
      A = [1, 2, 3]
      assert (unshift A, 0) == 4
      assert.deepEqual A, [0, 1, 2, 3]

    test "cat", -> assert.deepEqual (cat [1..5], [6..10]), [1..10]

    test "slice", ->
      assert.deepEqual (slice  1,  2, [1..5]), [2]
      assert.deepEqual (slice  2,  5, [1..5]), [3,4,5]
      assert.deepEqual (slice  1, -2, [1..5]), [2,3]
      assert.deepEqual (slice -3, -1, [1..5]), [3,4]
      assert.deepEqual (slice -3, -1, "0123456789"), "78"

    test "splice", ->
      A = [1, 2, 3, 4, 5]
      assert.deepEqual (splice 0, 0, A), [1, 2, 3, 4, 5]
      assert.deepEqual (splice 0, 1, A), [2, 3, 4, 5]
      assert.deepEqual (splice 2, 2, A), [2, 3]
      assert.deepEqual A, [2, 3]

    test "uniqueBy", ->
      mod3 = (x) -> x % 3
      assert.deepEqual (uniqueBy mod3, [1..5]), [1,2,0]

    test "unique", ->
      assert.deepEqual (unique [[1..4]..., [4..1]...]), [1..4]

    test "dupes", ->
      assert.deepEqual (dupes [[1..3]..., [2..1]...]), [1,2]

    test "union", ->
      assert.deepEqual (union [1..6], [4..10]), [1..10]

    test "intersection", ->
      assert.deepEqual (intersection [1..6], [4..10]), [4..6]

    test "difference", ->
      assert.deepEqual (difference [1..9], [2..10]), [1,10]

    test "complement", ->
      assert.deepEqual (complement [1..5], [3..6]), [1,2]

    test "insert", ->
      assert.deepEqual (insert [4,2,1], 3, 1), [4,3,2,1]
      assert.deepEqual (insert [1,2,4], 3, -1), [1..4]
      assert.deepEqual (insert [2..4], 1, 0), [1..4]

    test "remove", ->
      assert.deepEqual (remove [1..5], 3), [1,2,4,5]
      assert.deepEqual (remove [1..5], 6), [1..5]

    test "range", ->
      assert.deepEqual (range 1, 5), [1..5]
      assert.deepEqual (range 5, 1), [5..1]

    test "join", ->
      A = ["water", "earth", "fire", "air"]
      assert (join A, "-") == "water-earth-fire-air"

    test "fill", ->
      A = [1, 2, 3, 4]
      assert.deepEqual (fill A, 2), [2, 2, 2, 2]
      assert.deepEqual (fill A, 5), [5, 5, 5, 5]

    test "pluck", ->
      A = [1, 2, 3, 4, 5]
      assert (pluck A) in A
      assert A.length == 5

    test "pair", -> assert.deepEqual (pair 1, 2), [1, 2]

  ]
