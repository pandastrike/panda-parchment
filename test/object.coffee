import assert from "assert"
import {test, print} from "amen"

import {property, bind, detach,
  properties, methods,
  has, keys, values, pairs,
  pick, omit, query,
  assign, include, extend, merge,
  clone, equal,
  toJSON, fromJSON} from "../lib/object"

import {isDefined} from "../lib/type"

do ->

  print await test "object helpers", [

    test "include/extend", ->
      a = x: 1, y: 2
      b = z: 3
      include a, b
      assert.deepEqual a, {x: 1, y: 2, z: 3}

    test "merge", ->
      a = x: 1, y: 2
      b = z: 3
      c = merge a, b
      assert.deepEqual a, {x: 1, y: 2}
      assert.deepEqual c, {x: 1, y: 2, z: 3}

    test "clone", do (scenario=null) ->

      scenario = (original) ->
        ->
          copy = clone original
          assert original != copy
          assert.deepEqual original, copy
      [
        test "shallow", scenario x: 1, y: 2
        test "deep", [
          test "simple", scenario x: 1, y: { z: 3}
          test "with regexp", scenario  x: 1, y: { z: /foo/gi }
        ]
      ]

    test "equal", ->
      assert equal 1, 1
      assert !equal 1, 2
      assert equal " ", " "
      assert !equal "", " "
      assert equal { x: 1 }, { x: 1}
      assert !equal { x: 1 }, { x: 2}
      assert equal [1..3], [1..3]
      assert !equal [1..3], [1..4]

    test "property", -> assert (property "x", { x: 1 }) == 1

    test "bind", -> assert (bind (-> @x), {x: 1})() == 1

    test "detach", ->
      assert.deepEqual (detach Array::sort)([5,4,3,2,1]), [1,2,3,4,5]

    test "properties", ->
      properties (a = {}), x: get: (-> @_x), set: ((x) -> @_x = x)
      a.x = 1
      assert a._x == 1
      a._x = 2
      assert a.x == 2

    test "methods", ->
      methods (a = {}), x: (-> true), y: (-> false)
      assert a.x() && !a.y()

    test "has", ->
      assert (has "x", x: 1)
      assert !(has "y", x: 1)

    test "keys", ->
      assert.deepEqual (keys x: 1, y: 2), [ "x", "y" ]

    test "values", ->
      assert.deepEqual (values x: 1, y: 2), [ 1, 2 ]

    test "pairs", ->
      assert.deepEqual (pairs {a: 1, b: 2, c: 3}),
        [["a", 1], ["b", 2], ["c", 3]]

    test "pick", ->
      assert.deepEqual (pick ((k,v) -> v?), x: 1, y: null), { x: 1 }

    test "omit", ->
      assert.deepEqual (omit ((k,v) -> v?), x: 1, y: null), { y: undefined }

    test "query", ->
      assert query { x: 1 }, { x: 1, y: 2 }
      assert ! query { x: 2 }, { x: 1, y: 2 }
      assert query 1, 1
      assert !query 1, 2

    test "toJSON/fromJSON", ->
      assert.deepEqual (fromJSON toJSON x: 1, y: 2), x: 1, y: 2

  ]
