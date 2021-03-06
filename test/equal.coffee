import assert from "assert"
import {test, print} from "amen"

import {sleep} from "../src/time"
import {equal} from "../src/equal"

do ->

  print await test "equal", [
    test "shallow", ->
      assert equal "panda", "panda"
      assert ! equal "panda", "panda2"
    test "deep", ->
      assert equal x: 1, y: { z: {a: {b: {c: 12}}} },
        x: 1, y: { z: {a: {b: {c: 12}}} }
      assert ! equal x: 1, y: { z: {a: {b: {c: 12}}} },
        x: 1, y: { z: {a: {b: {c: 13}}} }

    test "number", ->
      assert equal 1, 1
      assert ! equal 1, 2
    test "NaN", ->
      assert ! equal NaN, NaN
    test "string", ->
      assert equal " ", " "
      assert ! equal "", " "
    test "boolean", ->
      assert equal true, true
      assert ! equal true, false


    test "regexp", ->
      assert equal (/panda/gi), (/panda/gi)
      assert ! equal (/panda/gi), (/foo/gi)
    test "date", ->
      A = new Date()
      assert equal A, new Date A
      await sleep 1
      assert ! equal A, new Date()
    test "symbol", ->
      A = Symbol "panda"
      assert equal A, A
      assert ! equal (Symbol "panda"), (Symbol "panda")
      assert ! equal (Symbol "panda"), (Symbol "bear")
    test "error", ->
      assert equal (new Error "panda"), (new Error "panda")
      assert ! equal (new Error "panda"), (new Error "foobar")

    test "array", ->
      assert equal [1, 2, 3], [1, 2, 3]
      assert ! equal [1, 2, 3], [1, 2, 4]
    test "map", ->
      A = new Map()
      B = new Map()
      C = new Map()
      A.set "pandas", "are good"
      B.set "pandas", "are good"
      C.set "pandas", "are best"
      assert equal A, B
      assert ! equal A, C
    test "buffer", ->
      assert equal (Buffer.from "panda"), (Buffer.from "panda")
      assert ! equal (Buffer.from "panda" ), (Buffer.from "foobar")
    test "array buffer", ->
      assert equal (new ArrayBuffer 8), (new ArrayBuffer 8)
      assert ! equal (new ArrayBuffer 6), (new ArrayBuffer 8)
    test "data view", ->
      assert equal (new DataView new ArrayBuffer 8),
        (new DataView new ArrayBuffer 8)
      assert ! equal (new DataView new ArrayBuffer 6),
        (new DataView new ArrayBuffer 8)


    # Negative tests
    test "weak map", ->
      try
        equal new WeakMap(), new WeakMap()
        assert.fail "comparing WeakMap should throw"
      catch
    test "set", ->
      try
        equal new Set(), new Set()
        assert.fail "comparing WeakMap should throw"
      catch
  ]
