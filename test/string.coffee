import assert from "assert"
import {test, print} from "amen"

import {toString, toUpper, toLower, capitalize,
  titleCase, camelCase, underscored, dashed, plainText,
  htmlEscape, w, blank, match, isMatch, replace,
  trim, split} from "../src/string"

do ->

  print await test "string helpers", [

    test "toString", ->
      assert (toString 1) == "1"
      assert (toString x: 1) == "[object Object]"
      assert (toString -> "foobar") == (-> "foobar").toString()

    test "toUpper", ->
      assert (toUpper "hello, world!") == "HELLO, WORLD!"

    test "toLower", ->
      assert (toLower "Hello, World!") == "hello, world!"

    test "plainText", ->
      assert plainText("hello-world") == "hello world"
      assert plainText("Hello World") == "hello world"

    test "capitalize", ->
      assert capitalize( "hello world" ) == "Hello world"

    test "titleCase", ->
      assert titleCase( "hello woRld" ) == "Hello World"

    test "camelCase", ->
      assert camelCase( "Hello World" ) == "helloWorld"

    test "underscored", ->
      assert underscored( "Hello World" ) == "hello_world"

    test "dashed", ->
      assert dashed( "Hello World" ) == "hello-world"

    test "htmlEscape", ->
      assert htmlEscape( "<a href='foo'>bar & baz</a>" ) ==
        "&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;"

    test "trim", -> assert (trim "  Hello, World!  ") == "Hello, World!"

    test "split", ->
      assert.deepEqual (split ", ", "Hello, World!"), ["Hello", "World!"]

    test "w", -> assert (w "one two three").length == 3

    test "blank", ->
      assert blank ""
      assert !blank "x"

    test "isMatch", ->
      assert (isMatch /foo/, "foobar")

    # test "match", ->
    #   assert (isMatch /foo/, "foobar")[0] = "foo"
    #
    test "replace", ->
      assert (replace /bar/, "baz", "foobar") == "foobaz"

]
