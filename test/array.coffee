import assert from "assert"
import {test, print} from "amen"

import {first, second, third, fourth, fifth, nth, last, rest,
  empty, includes, findIndexOf, findLastIndexOf, uniqueBy, unique, uniq, dupes,
  union, intersection, difference, complement, push, pop, shift, unshift,
  enqueue, dequeue, splice, insert, remove, cat, slice, join, fill,
  shuffle, range, pluck, pair} from "../array"

import sinon from "sinon"

do ->

  print await test "array helperrs", [

    test "first", -> assert (first [1..5]) == 1
    test "second", -> assert (second [1..5]) == 2
    test "third", -> assert (third [1..5]) == 3
    test "fourth", -> assert (fourth [1..5]) == 4
    test "fifth", -> assert (fifth [1..5]) == 5
    test "nth", -> assert (nth 3, [1..5]) == 3
    test "last", -> assert (last [1..5]) == 5
    test "rest", -> assert (first rest [1..5]) == 2
    test "includes", -> assert (includes 3, [1..5]) && !(includes 6, [1..5])
    test "findIndexOf"
    test "findLastIndexOf"
    test "push/enqueue", -> assert.deepEqual (push [1..4], 5), [1..5]
    test "pop/dequeue", -> assert (pop [1..5]) == 5
    test "shift"
    test "unshift"
    test "splice"
    test "cat", -> assert.deepEqual (cat [1..5], [6..10]), [1..10]

    test "slice", ->
      assert.deepEqual (slice  1,  2, [1..5]), [2]
      assert.deepEqual (slice  2,  5, [1..5]), [3,4,5]
      assert.deepEqual (slice  1, -2, [1..5]), [2,3]
      assert.deepEqual (slice -3, -1, [1..5]), [3,4]
      assert.deepEqual (slice -3, -1, "0123456789"), "78"

    test "splice"

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

    test "shuffle", ->
      # use a sinon sandbox b/c we're mocking globals
      sinon.test ->
        # stubbing Math.random() allows us to determine the algorithm used
        # by expecting a specific result
        sinon.stub(Math, "random").returns 0.8
        # "Given Math.random() always returns 0.8..."
        # * if the biased j = (i * array.size) algorithm is used,
        #   the expected result is: [ 9, 1, 2, 3, 4, 5, 6, 7, 10, 8 ]
        # * if the fisher-yates algorithm used, the expected result is:
        fisher_yates = [ 1, 2, 3, 4, 10, 5, 6, 7, 8, 9 ]
        assert.deepEqual (shuffle [1..10]), fisher_yates

    test "range", ->
      assert.deepEqual (range 1, 5), [1..5]
      assert.deepEqual (range 5, 1), [5..1]

    test "join"
    test "fill"
    test "pluck"
    test "pair"

  ]
