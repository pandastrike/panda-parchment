assert = require "assert"

assert.rejects = (f) ->
  f()
  .then -> assert.fail "Missing expected promise rejection."
  .catch ->

assert.resolves = (f) ->
  f()
  .catch -> assert.fail "Missing expected promise resolution."

Amen = require "amen"
FS = require "fs"
{join} = require "path"

{promise, async, call, lift, resolve, reject} = require "../src/promise"

Amen.describe "Promise helpers", (context) ->

  context.test "lift", ->

    readdir = lift FS.readdir

    context.test "async", ->

      ls = async (root) ->
        join root, path for path in (yield readdir root)

      assert __filename in (yield ls __dirname)

      assert.resolves async ->
        yield resolve true

      assert.rejects async ->
        yield reject new Error "this is a test error"

  context.test "unhandled rejection"
    # Tricky to test without actually leaving rejections
    # unhandled and waiting to see if they get reported
