import assert from "assert"
import {test, print} from "amen"

import {clone} from "../src/clone"
import {equal} from "../src/equal"

do ->

  print await test "clone", do (scenario=null) ->

    scenario = (original) ->
      ->
        copy = clone original
        assert original != copy
        assert.deepEqual original, copy

    failScenario = (original) ->
      ->
        try
          clone original
          assert.fail "clone should not have succeeded for this example"
        catch
          return

    [
      test "shallow", -> assert.deepEqual "panda", clone "panda"
      test "deep", scenario x: 1, y: { z: {a: {b: {c: 12}}} }

      test "number", scenario x: 1, y: { z: 3 }
      test "NaN", -> assert isNaN clone NaN
      test "string", scenario x: 1, y: { z: "3" }
      test "boolean", scenario x: 1, y: { z: true }

      test "regexp", scenario  x: 1, y: { z: /foo/gi }
      test "date", scenario  x: 1, y: { z: new Date() }

      test "array", scenario x: 1, y: { z: [1, 2, 3] }
      test "set", scenario x: 1, y: { z: new Set [1, 2, 3] }
      test "map", ->
        map = new Map()
        map.set "pandas", "are the best"
        scenario x: 1, y: { z: map }
      test "buffer", scenario x: 1, y: { z: Buffer.from "panda" }

      test "symbol"

      # These need a browser context to be tested.
      test "array buffer"
      test "data view"

      # Negative tests
      test "function", failScenario x: 1, y: { z: -> }
      test "weak map", failScenario x: 1, y: { z: new WeakMap() }
      test "error", failScenario x: 1, y: { z: new Error "panda" }
    ]
