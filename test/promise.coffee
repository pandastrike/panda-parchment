import assert from "assert"
import {test, print} from "amen"

import {promise, rephrase, resolve, reject} from "../lib/promise"

assert.rejects = (f) ->
  f()
  .then -> assert.fail "Missing expected promise rejection."
  .catch ->

assert.resolves = (f) ->
  f()
  .catch -> assert.fail "Missing expected promise resolution."

do ->

  print await test "promise helpers", [

    test "rephrase", [

      test "node style", ->
        foo =
          bar: (callback) -> callback null, true
          baz: (callback) -> callback true, false

        _foo = rephrase "node", foo

        assert.resolves -> _foo.bar()
        assert.rejects -> _foo.baz()
      ]
  ]
