assert = require "assert"
Amen = require "amen"

Amen.describe "Type functions", (context) ->

  {deepEqual, prototype, isType, isKind,
    isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat,
    isString, isBuffer, isFunction, isObject, isArray,
    isRegExp, isDate, isDefined, isGeneratorFunction, isPromise,
    Type, instanceOf} = require "../src/type"

  context.test "prototype", ->

    # isType and isKind relies on prototype

    context.test "isKind", ->
      A = prototype: {}
      B = prototype: Object.create A.prototype
      b = Object.create B.prototype
      assert isKind B, b
      assert isKind A, b
      assert !(isKind A, {})

    context.test "isType", ->

      # these are all defined using isType

      context.test "isNumber", ->
        assert isNumber 7
        assert ! isNumber "7"
        assert ! isNumber false
        assert isNumber.length == 1

      context.test "isBoolean", ->
        assert isBoolean true
        assert !isBoolean 7

      context.test "isDate", ->
        assert isDate (new Date)
        assert !isDate 7

      context.test "isRegExp", ->
        assert isRegExp /\s/
        assert !isRegExp 7

      context.test "isString", ->
        assert isString "x"
        assert !isString 7

      context.test "isBuffer", ->
        assert isBuffer (new Buffer "hello")

      context.test "isFunction", ->
        assert isFunction ->
        assert !isFunction 7
        assert isFunction.length == 1

      context.test "isObject", ->
        assert isObject {}
        assert !isObject 7

      context.test "isArray", ->
        assert isArray []
        assert !isArray 7

  context.test "isNaN"
  context.test "isFinite"

  context.test "isInteger", ->
    assert isInteger 5
    assert ! isInteger 3.5
    assert ! isInteger "5"
    assert ! isInteger NaN

  context.test "isFloat", ->
    assert isFloat 3.5
    assert ! isFloat 5
    assert ! isFloat "3.5"
    assert ! isFloat NaN

  isDefined = (x) -> x?

  context.test "isDefined", ->
    assert isDefined {}
    assert !isDefined undefined

  context.test "isGeneratorFunction", ->
    f = -> yield true
    assert isGeneratorFunction f

  context.test "Type", ->
    A = Type.define()
    B = Type.define A
    b = Type.create B

    context.test "isType", ->
      assert isType B, b

    context.test "isKind", ->
      assert isKind A, b
