import assert from "assert"
import {test, print} from "amen"

import {query} from "../src/object-advanced"

do ->

  print await test "array-advanced", [

    test "query", ->
      assert query { x: 1 }, { x: 1, y: 2 }
      assert ! query { x: 2 }, { x: 1, y: 2 }
      assert query 1, 1
      assert !query 1, 2

  ]
