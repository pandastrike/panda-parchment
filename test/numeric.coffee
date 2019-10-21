import assert from "assert"
import {test, print} from "amen"

import {gt, lt, gte, lte, add, sub, mul, div, mod,
  even, odd, min, max, abs} from "../src/numeric"

do ->
  print await test "numeric helpers", [
    test "gt", -> assert gt 5, 6
    test "lt", -> assert lt 6, 5

    test "gte", ->
      assert gte 5, 6
      assert gte 5, 5

    test "lte", ->
      assert lte 5, 5
      assert lte 5, 5

    test "add", -> assert (add 5, 5) == 10

    test "sub", ->
      assert (sub 5, 3) == -2
      assert (sub 3, 5) == 2

    test "mul", -> assert (mul 3, 3) == 9

    test "div", ->
      assert (div 2, 10) == 5
      assert (div 10, 2) == (1/5)

    test "mod", ->
      assert (mod 2, 10) == true
      assert (mod 10, 2) == false

    test "even", ->
      assert even 4
      assert ! even 5

    test "odd", ->
      assert ! odd 4
      assert odd 5

    test "min", -> assert (min 1, 2, 3, 4, 5) == 1
    test "max", -> assert (max 1, 2, 3, 4, 5) == 5

    test "abs", ->
      assert (abs -5) == 5
      assert (abs 5) == 5
  ]
