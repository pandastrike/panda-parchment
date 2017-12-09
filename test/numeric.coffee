import assert from "assert"
import {test, print} from "amen"

import {gt, lt, gte, lte, add, sub, mul, div, mod,
  even, odd, min, max, abs} from "../lib/numeric"

do ->
  print await test "numeric helpers", [
    test "gt"
    test "lt", -> assert lt 6, 5
    test "gte"
    test "lte"
    test "add"
    test "sub"
    test "mul"
    test "div"
    test "mod"
    test "even"
    test "odd", -> assert odd 5
    test "min"
    test "max"
    test "abs"
  ]
