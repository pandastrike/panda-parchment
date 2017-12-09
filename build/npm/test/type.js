"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _type = require("../lib/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("type helpers", [(0, _amen.test)("prototype", [
  // isType and isKind relies on prototype
  (0, _amen.test)("isKind", function () {
    var _rec = new _powerAssertRecorder(),
        _rec2 = new _powerAssertRecorder(),
        _rec3 = new _powerAssertRecorder();

    var A, B, b;
    A = {
      prototype: {}
    };
    B = {
      prototype: Object.create(A.prototype)
    };
    b = Object.create(B.prototype);
    (0, _powerAssert2.default)(_rec._expr(_rec._capt((0, _type.isKind)(_rec._capt(B, "arguments/0/arguments/0"), _rec._capt(b, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(isKind(B, b))",
      filepath: "type.coffee",
      line: 22
    }));
    (0, _powerAssert2.default)(_rec2._expr(_rec2._capt((0, _type.isKind)(_rec2._capt(A, "arguments/0/arguments/0"), _rec2._capt(b, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(isKind(A, b))",
      filepath: "type.coffee",
      line: 23
    }));
    return (0, _powerAssert2.default)(_rec3._expr(_rec3._capt(!_rec3._capt((0, _type.isKind)(_rec3._capt(A, "arguments/0/argument/arguments/0"), _rec3._capt({}, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isKind(A, {}))",
      filepath: "type.coffee",
      line: 24
    }));
  }), (0, _amen.test)("isType", [
  // these are all defined using isType
  (0, _amen.test)("isNumber", function () {
    var _rec4 = new _powerAssertRecorder(),
        _rec5 = new _powerAssertRecorder(),
        _rec6 = new _powerAssertRecorder(),
        _rec7 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec4._expr(_rec4._capt((0, _type.isNumber)(7), "arguments/0"), {
      content: "assert(isNumber(7))",
      filepath: "type.coffee",
      line: 31
    }));
    (0, _powerAssert2.default)(_rec5._expr(_rec5._capt(!_rec5._capt((0, _type.isNumber)("7"), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isNumber(\"7\"))",
      filepath: "type.coffee",
      line: 32
    }));
    (0, _powerAssert2.default)(_rec6._expr(_rec6._capt(!_rec6._capt((0, _type.isNumber)(false), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isNumber(false))",
      filepath: "type.coffee",
      line: 33
    }));
    return (0, _powerAssert2.default)(_rec7._expr(_rec7._capt(_rec7._capt(_rec7._capt(_type.isNumber, "arguments/0/left/object").length, "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(isNumber.length === 1)",
      filepath: "type.coffee",
      line: 34
    }));
  }), (0, _amen.test)("isBoolean", function () {
    var _rec8 = new _powerAssertRecorder(),
        _rec9 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec8._expr(_rec8._capt((0, _type.isBoolean)(true), "arguments/0"), {
      content: "assert(isBoolean(true))",
      filepath: "type.coffee",
      line: 37
    }));
    return (0, _powerAssert2.default)(_rec9._expr(_rec9._capt(!_rec9._capt((0, _type.isBoolean)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isBoolean(7))",
      filepath: "type.coffee",
      line: 38
    }));
  }), (0, _amen.test)("isDate", function () {
    var _rec10 = new _powerAssertRecorder(),
        _rec11 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec10._expr(_rec10._capt((0, _type.isDate)(_rec10._capt(new Date(), "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isDate(new Date()))",
      filepath: "type.coffee",
      line: 41
    }));
    return (0, _powerAssert2.default)(_rec11._expr(_rec11._capt(!_rec11._capt((0, _type.isDate)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isDate(7))",
      filepath: "type.coffee",
      line: 42
    }));
  }), (0, _amen.test)("isRegExp", function () {
    var _rec12 = new _powerAssertRecorder(),
        _rec13 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec12._expr(_rec12._capt((0, _type.isRegExp)(/\s/), "arguments/0"), {
      content: "assert(isRegExp(/\\s/))",
      filepath: "type.coffee",
      line: 45
    }));
    return (0, _powerAssert2.default)(_rec13._expr(_rec13._capt(!_rec13._capt((0, _type.isRegExp)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isRegExp(7))",
      filepath: "type.coffee",
      line: 46
    }));
  }), (0, _amen.test)("isString", function () {
    var _rec14 = new _powerAssertRecorder(),
        _rec15 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec14._expr(_rec14._capt((0, _type.isString)("x"), "arguments/0"), {
      content: "assert(isString(\"x\"))",
      filepath: "type.coffee",
      line: 49
    }));
    return (0, _powerAssert2.default)(_rec15._expr(_rec15._capt(!_rec15._capt((0, _type.isString)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isString(7))",
      filepath: "type.coffee",
      line: 50
    }));
  }), (0, _amen.test)("isBuffer", function () {
    var _rec16 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec16._expr(_rec16._capt((0, _type.isBuffer)(_rec16._capt(new Buffer("hello"), "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isBuffer(new Buffer(\"hello\")))",
      filepath: "type.coffee",
      line: 53
    }));
  }), (0, _amen.test)("isFunction", function () {
    var _rec17 = new _powerAssertRecorder(),
        _rec18 = new _powerAssertRecorder(),
        _rec19 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec17._expr(_rec17._capt((0, _type.isFunction)(function () {}), "arguments/0"), {
      content: "assert(isFunction(function () {}))",
      filepath: "type.coffee",
      line: 56
    }));
    (0, _powerAssert2.default)(_rec18._expr(_rec18._capt(!_rec18._capt((0, _type.isFunction)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isFunction(7))",
      filepath: "type.coffee",
      line: 57
    }));
    return (0, _powerAssert2.default)(_rec19._expr(_rec19._capt(_rec19._capt(_rec19._capt(_type.isFunction, "arguments/0/left/object").length, "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(isFunction.length === 1)",
      filepath: "type.coffee",
      line: 58
    }));
  }), (0, _amen.test)("isObject", function () {
    var _rec20 = new _powerAssertRecorder(),
        _rec21 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec20._expr(_rec20._capt((0, _type.isObject)(_rec20._capt({}, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isObject({}))",
      filepath: "type.coffee",
      line: 61
    }));
    return (0, _powerAssert2.default)(_rec21._expr(_rec21._capt(!_rec21._capt((0, _type.isObject)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isObject(7))",
      filepath: "type.coffee",
      line: 62
    }));
  }), (0, _amen.test)("isArray", function () {
    var _rec22 = new _powerAssertRecorder(),
        _rec23 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec22._expr(_rec22._capt((0, _type.isArray)(_rec22._capt([], "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isArray([]))",
      filepath: "type.coffee",
      line: 65
    }));
    return (0, _powerAssert2.default)(_rec23._expr(_rec23._capt(!_rec23._capt((0, _type.isArray)(7), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isArray(7))",
      filepath: "type.coffee",
      line: 66
    }));
  }), (0, _amen.test)("isNaN"), (0, _amen.test)("isFinite"), (0, _amen.test)("isInteger", function () {
    var _rec24 = new _powerAssertRecorder(),
        _rec25 = new _powerAssertRecorder(),
        _rec26 = new _powerAssertRecorder(),
        _rec27 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec24._expr(_rec24._capt((0, _type.isInteger)(5), "arguments/0"), {
      content: "assert(isInteger(5))",
      filepath: "type.coffee",
      line: 72
    }));
    (0, _powerAssert2.default)(_rec25._expr(_rec25._capt(!_rec25._capt((0, _type.isInteger)(3.5), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isInteger(3.5))",
      filepath: "type.coffee",
      line: 73
    }));
    (0, _powerAssert2.default)(_rec26._expr(_rec26._capt(!_rec26._capt((0, _type.isInteger)("5"), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isInteger(\"5\"))",
      filepath: "type.coffee",
      line: 74
    }));
    return (0, _powerAssert2.default)(_rec27._expr(_rec27._capt(!_rec27._capt((0, _type.isInteger)(_rec27._capt(0 / 0, "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isInteger(0 / 0))",
      filepath: "type.coffee",
      line: 75
    }));
  }), (0, _amen.test)("isFloat", function () {
    var _rec28 = new _powerAssertRecorder(),
        _rec29 = new _powerAssertRecorder(),
        _rec30 = new _powerAssertRecorder(),
        _rec31 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec28._expr(_rec28._capt((0, _type.isFloat)(3.5), "arguments/0"), {
      content: "assert(isFloat(3.5))",
      filepath: "type.coffee",
      line: 78
    }));
    (0, _powerAssert2.default)(_rec29._expr(_rec29._capt(!_rec29._capt((0, _type.isFloat)(5), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isFloat(5))",
      filepath: "type.coffee",
      line: 79
    }));
    (0, _powerAssert2.default)(_rec30._expr(_rec30._capt(!_rec30._capt((0, _type.isFloat)("3.5"), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isFloat(\"3.5\"))",
      filepath: "type.coffee",
      line: 80
    }));
    return (0, _powerAssert2.default)(_rec31._expr(_rec31._capt(!_rec31._capt((0, _type.isFloat)(_rec31._capt(0 / 0, "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isFloat(0 / 0))",
      filepath: "type.coffee",
      line: 81
    }));
  }), (0, _amen.test)("isDefined", function () {
    var _rec32 = new _powerAssertRecorder(),
        _rec33 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec32._expr(_rec32._capt((0, _type.isDefined)(_rec32._capt({}, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isDefined({}))",
      filepath: "type.coffee",
      line: 84
    }));
    return (0, _powerAssert2.default)(_rec33._expr(_rec33._capt(!_rec33._capt((0, _type.isDefined)(_rec33._capt(void 0, "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isDefined(void 0))",
      filepath: "type.coffee",
      line: 85
    }));
  }), (0, _amen.test)("isGeneratorFunction", function () {
    var _rec34 = new _powerAssertRecorder();

    var f;
    f = function* () {
      return yield true;
    };
    return (0, _powerAssert2.default)(_rec34._expr(_rec34._capt((0, _type.isGeneratorFunction)(_rec34._capt(f, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isGeneratorFunction(f))",
      filepath: "type.coffee",
      line: 89
    }));
  }), (0, _amen.test)("isAsyncFunction", function () {
    var _rec35 = new _powerAssertRecorder();

    var f;
    f = (() => {
      var _ref2 = _asyncToGenerator(function* () {
        return yield true;
      });

      return function f() {
        return _ref2.apply(this, arguments);
      };
    })();
    return (0, _powerAssert2.default)(_rec35._expr(_rec35._capt((0, _type.isAsyncFunction)(_rec35._capt(f, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isAsyncFunction(f))",
      filepath: "type.coffee",
      line: 93
    }));
  })]), (0, _amen.test)("Type", function () {
    var A, B, b;
    A = _type.Type.define();
    B = _type.Type.define(A);
    b = _type.Type.create(B);
    return [(0, _amen.test)("isType", function () {
      var _rec36 = new _powerAssertRecorder();

      return (0, _powerAssert2.default)(_rec36._expr(_rec36._capt((0, _type.isType)(_rec36._capt(B, "arguments/0/arguments/0"), _rec36._capt(b, "arguments/0/arguments/1")), "arguments/0"), {
        content: "assert(isType(B, b))",
        filepath: "type.coffee",
        line: 103
      }));
    }), (0, _amen.test)("isKind", function () {
      var _rec37 = new _powerAssertRecorder();

      return (0, _powerAssert2.default)(_rec37._expr(_rec37._capt((0, _type.isKind)(_rec37._capt(A, "arguments/0/arguments/0"), _rec37._capt(b, "arguments/0/arguments/1")), "arguments/0"), {
        content: "assert(isKind(A, b))",
        filepath: "type.coffee",
        line: 106
      }));
    })];
  }()), (0, _amen.test)("isEmpty", function () {
    var _rec38 = new _powerAssertRecorder(),
        _rec39 = new _powerAssertRecorder(),
        _rec40 = new _powerAssertRecorder(),
        _rec41 = new _powerAssertRecorder(),
        _rec42 = new _powerAssertRecorder(),
        _rec43 = new _powerAssertRecorder(),
        _rec44 = new _powerAssertRecorder(),
        _rec45 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec38._expr(_rec38._capt((0, _type.isEmpty)(""), "arguments/0"), {
      content: "assert(isEmpty(\"\"))",
      filepath: "type.coffee",
      line: 110
    }));
    (0, _powerAssert2.default)(_rec39._expr(_rec39._capt(!_rec39._capt((0, _type.isEmpty)(" "), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isEmpty(\" \"))",
      filepath: "type.coffee",
      line: 111
    }));
    (0, _powerAssert2.default)(_rec40._expr(_rec40._capt((0, _type.isEmpty)(_rec40._capt([], "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isEmpty([]))",
      filepath: "type.coffee",
      line: 112
    }));
    (0, _powerAssert2.default)(_rec41._expr(_rec41._capt(!_rec41._capt((0, _type.isEmpty)(_rec41._capt([0], "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isEmpty([0]))",
      filepath: "type.coffee",
      line: 113
    }));
    (0, _powerAssert2.default)(_rec42._expr(_rec42._capt((0, _type.isEmpty)(_rec42._capt(new Map(), "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isEmpty(new Map()))",
      filepath: "type.coffee",
      line: 114
    }));
    (0, _powerAssert2.default)(_rec43._expr(_rec43._capt(!_rec43._capt((0, _type.isEmpty)(_rec43._capt(new Map(_rec43._capt([_rec43._capt(["x", 1], "arguments/0/argument/arguments/0/arguments/0/elements/0")], "arguments/0/argument/arguments/0/arguments/0")), "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isEmpty(new Map([[\"x\", 1]])))",
      filepath: "type.coffee",
      line: 115
    }));
    (0, _powerAssert2.default)(_rec44._expr(_rec44._capt((0, _type.isEmpty)(_rec44._capt(new Set(), "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert(isEmpty(new Set()))",
      filepath: "type.coffee",
      line: 116
    }));
    return (0, _powerAssert2.default)(_rec45._expr(_rec45._capt(!_rec45._capt((0, _type.isEmpty)(_rec45._capt(new Set(_rec45._capt([0], "arguments/0/argument/arguments/0/arguments/0")), "arguments/0/argument/arguments/0")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!isEmpty(new Set([0])))",
      filepath: "type.coffee",
      line: 117
    }));
  })])])));
})();