assert = require "assert"

assert.rejects = (f) ->
  f()
  .then -> assert.fail "Missing expected promise rejection."
  .catch ->

assert.resolves = (f) ->
  f()
  .catch -> assert.fail "Missing expected promise resolution."

Amen = require "amen"

{promise, lift, resolve, reject} = require "../promise"

Amen.describe "Promise helpers", (context) ->

  context.test "lift", ->

    foo =
      bar: (callback) ->
        callback null, true
      baz: (callback) ->
        callback true, false

    _foo = lift foo

    assert.resolves -> _foo.bar()
    assert.rejects -> _foo.baz()
