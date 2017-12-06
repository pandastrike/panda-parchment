import assert from "assert"
import {test, print} from "amen"

import {deepEqual, prototype, isType, isKind,
    isBoolean, isNumber, isNaN, isFinite, isInteger, isFloat,
    isString, isBuffer, isFunction, isObject, isArray,
    isRegExp, isDate, isDefined, isGeneratorFunction, isPromise,
    isAsyncFunction, Type, instanceOf} from "../type"

do ->
  print await test "type helpers", [

    test "prototype", [

      # isType and isKind relies on prototype

      test "isKind", ->
        A = prototype: {}
        B = prototype: Object.create A.prototype
        b = Object.create B.prototype
        assert isKind B, b
        assert isKind A, b
        assert !(isKind A, {})

      test "isType", [

        # these are all defined using isType

        test "isNumber", ->
          assert isNumber 7
          assert ! isNumber "7"
          assert ! isNumber false
          assert isNumber.length == 1

        test "isBoolean", ->
          assert isBoolean true
          assert !isBoolean 7

        test "isDate", ->
          assert isDate (new Date)
          assert !isDate 7

        test "isRegExp", ->
          assert isRegExp /\s/
          assert !isRegExp 7

        test "isString", ->
          assert isString "x"
          assert !isString 7

        test "isBuffer", ->
          assert isBuffer (new Buffer "hello")

        test "isFunction", ->
          assert isFunction ->
          assert !isFunction 7
          assert isFunction.length == 1

        test "isObject", ->
          assert isObject {}
          assert !isObject 7

        test "isArray", ->
          assert isArray []
          assert !isArray 7

        test "isNaN"
        test "isFinite"

        test "isInteger", ->
          assert isInteger 5
          assert ! isInteger 3.5
          assert ! isInteger "5"
          assert ! isInteger NaN

        test "isFloat", ->
          assert isFloat 3.5
          assert ! isFloat 5
          assert ! isFloat "3.5"
          assert ! isFloat NaN

        test "isDefined", ->
          assert isDefined {}
          assert !isDefined undefined

        test "isGeneratorFunction", ->
          f = -> yield true
          assert isGeneratorFunction f

        test "isAsyncFunction", ->
          f = -> await true
          assert isAsyncFunction f
      ]

    test "Type", do ->

      A = Type.define()
      B = Type.define A
      b = Type.create B
      [
        test "isType", ->
          assert isType B, b

        test "isKind", ->
          assert isKind A, b
      ]
  ]
]
