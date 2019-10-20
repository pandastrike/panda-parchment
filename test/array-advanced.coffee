import assert from "assert"
import {test, print} from "amen"

import {shuffle} from "../src/array-advanced"

do ->

  print await test "array-advanced", [

    test "shuffle"
    #   # use a sinon sandbox b/c we're mocking globals
    #   sinon.test ->
    #     # stubbing Math.random() allows us to determine the algorithm used
    #     # by expecting a specific result
    #     sinon.stub(Math, "random").returns 0.8
    #     # "Given Math.random() always returns 0.8..."
    #     # * if the biased j = (i * array.size) algorithm is used,
    #     #   the expected result is: [ 9, 1, 2, 3, 4, 5, 6, 7, 10, 8 ]
    #     # * if the fisher-yates algorithm used, the expected result is:
    #     fisher_yates = [ 1, 2, 3, 4, 10, 5, 6, 7, 8, 9 ]
    #     assert.deepEqual (shuffle [1..10]), fisher_yates

  ]
