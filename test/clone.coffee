import assert from "assert"
import {test, print} from "amen"

import {clone} from "../src/clone"

do ->

  print await test "clone", do (scenario=null) ->

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
