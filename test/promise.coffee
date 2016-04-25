assert = require "assert"
Amen = require "amen"
FS = require "fs"
{join} = require "path"

{async, call, lift} = require "../src/promise"

Amen.describe "Promise helpers", (context) ->

  context.test "lift", ->

    readdir = lift FS.readdir

    context.test "async", ->

      ls = async (root) ->
        join root, path for path in (yield readdir root)

      assert __filename in yield ls __dirname
