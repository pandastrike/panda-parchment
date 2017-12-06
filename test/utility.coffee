import assert from "assert"
import {test, print} from "amen"

import {times, sleep, timer, memoize,
    benchmark, empty, length} from "../utility"

do ->
  print await test "utility functions", [
    test "memoize", do ->
      count = 0
      f = memoize (x) -> count++; x
      [
        test "runs the function", -> assert f(5) == 5 && count == 1
        test "but only once for a given argument", ->
          assert f(5) == 5 && count == 1
        test "without affecting any other arguments", ->
          assert f(6) == 6 && count == 2
      ]

    test "timer", ->
      # We need an action to put into "timer",
      # but we'll cancel it before it runs.
      x = 5
      tooLate = -> x++
      cancel = timer 10000, tooLate

      # 10s is too long to wait.  Cancel it!!
      cancel()
      assert x == 5   # We kept tooLong from executing.

    test "sleep", [
      test "microseconds/benchmark", ->
        assert (await benchmark (-> await sleep 100)) > (100 * 1000)
    ]

    test "times", ->
      n = 0
      assert.deepEqual (times (-> ++n), 3), [1, 2, 3]
 ]
