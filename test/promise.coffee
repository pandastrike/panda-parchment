assert = require "assert"

assert.rejects = (block) ->
  block().then -> assert.fail "Missing expected promise rejection."
  block().catch ->

assert.resolves = (block) ->
  block().catch -> assert.fail "Missing expected promise resolution."

Amen = require "amen"
FS = require "fs"
{join} = require "path"

{promise, async, call, lift} = require "../src/promise"

Amen.describe "Promise helpers", (context) ->

  context.test "lift", ->

    readdir = lift FS.readdir

    context.test "async", ->

      ls = async (root) ->
        join root, path for path in (yield readdir root)

      assert __filename in (yield ls __dirname)

      good = (x) -> promise (resolve, reject) -> setImmediate -> resolve x
      bad = (e) -> promise (resolve, reject) -> setImmediate -> reject e

      assert.resolves async ->
        yield good true

      assert.rejects async ->
        yield bad new Error "this is a test error"
