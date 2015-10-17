assert = require "assert"
Amen = require "amen"

Amen.describe "Numeric functions", (context) ->

  {eq, neq, gt, lt, gte, lte, add, sub, mul, div, mod,
    even, odd, min, max, abs, pow} = require "../src/numeric"

  context.test "eq" ->
    compValue = 4
    assert compValue 4
    
  context.test "neq" ->
    compValue = 3
    assert compValue 6

  context.test "gt", ->
    steamingWater = gt 100
    assert steamingWater 108
  
  context.test "lt", ->
    belowFreezing = 32
    assert belowFreezing 0
  
  context.test "gte", ->
    steamingWater = gte 100
    assert steamingWater 108
    assert steamingWater 100
  
  context.test "lte", ->
    belowFreezing = 32
    assert belowFreezing 0
    belowFreezing 32

  context.test "add", ->
    increase = add 1
    assert increase 4 == 5
  
  context.test "sub", ->
    decrease = sub 4
    assert decrease 1 == 3

  context.test "mul", ->
    times = mul 5
    assert times 5 == 25
  
  context.test "div", ->
    reduce = div 4
    assert reduce 2 == 2
  
  context.test "mod", ->
    positiveRemainder = mod 4
    assert positiveRemainder -3 == 1

  context.test "even", -> assert even 6

  context.test "odd", -> assert odd 5

  context.test "min", -> assert min(1, 5, 10) == 1

  context.test "max", -> assert max(1, 5, 10) == 10

  context.test "abs", -> assert abs(-5) == 5
  
  context.test "pow", -> assert pow 6, 2 == 36
