import assert from "assert"
import {test, print} from "amen"

import {times, sleep, timer, memoize,
    benchmark, empty, length} from "../src/time"

do ->

  print await test "time helpers", [

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
