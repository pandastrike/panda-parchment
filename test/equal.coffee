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
    test "error", ->
      assert equal (new Error "panda"), (new Error "panda")
      assert ! equal (new Error "panda"), (new Error "foobar")

    test "array", ->
      assert equal [1, 2, 3], [1, 2, 3]
      assert ! equal [1, 2, 3], [1, 2, 4]
    test "set", ->
      assert equal (new Set [1, 2, 3]), (new Set [1, 2, 3])
      assert ! equal (new Set [1, 2, 3]), (new Set [1, 2, 4])
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

    test "symbol"
    test "array buffer"
    test "data view"
  ]
