import assert from "assert"
import {test, print} from "amen"

import {promise, resolve, reject, all} from "../src/promise"

do -> print await test "promise helpers", [

  test "promise", ->
    assert (promise ->).then?

  test "resolve/follow", ->
    assert (do -> resolve "foo").then?

  test "resolve", ->
    try
      await do -> reject new Error "this is a test"
      assert.fail "the function should have rejected."
    catch e
      assert e.message == "this is a test"

  test "all", ->
    A = await all [(resolve 1), (resolve 2), (resolve 3)]
    assert.deepEqual A, [1, 2, 3]

]
