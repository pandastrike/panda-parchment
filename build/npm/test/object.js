"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _object = require("../lib/object");

var _type = require("../lib/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("object helpers", [(0, _amen.test)("include/extend", function () {
    var _rec = new _powerAssertRecorder(),
        _rec2 = new _powerAssertRecorder();

    var a, b;
    a = {
      x: 1,
      y: 2
    };
    b = {
      z: 3
    };
    (0, _object.include)(a, b);
    return _powerAssert2.default.deepEqual(_rec._expr(_rec._capt(a, "arguments/0"), {
      content: "assert.deepEqual(a, { x: 1, y: 2, z: 3 })",
      filepath: "object.coffee",
      line: 22
    }), _rec2._expr(_rec2._capt({
      x: 1,
      y: 2,
      z: 3
    }, "arguments/1"), {
      content: "assert.deepEqual(a, { x: 1, y: 2, z: 3 })",
      filepath: "object.coffee",
      line: 22
    }));
  }), (0, _amen.test)("merge", function () {
    var _rec3 = new _powerAssertRecorder(),
        _rec4 = new _powerAssertRecorder(),
        _rec5 = new _powerAssertRecorder(),
        _rec6 = new _powerAssertRecorder();

    var a, b, c;
    a = {
      x: 1,
      y: 2
    };
    b = {
      z: 3
    };
    c = (0, _object.merge)(a, b);
    _powerAssert2.default.deepEqual(_rec3._expr(_rec3._capt(a, "arguments/0"), {
      content: "assert.deepEqual(a, { x: 1, y: 2 })",
      filepath: "object.coffee",
      line: 28
    }), _rec4._expr(_rec4._capt({
      x: 1,
      y: 2
    }, "arguments/1"), {
      content: "assert.deepEqual(a, { x: 1, y: 2 })",
      filepath: "object.coffee",
      line: 28
    }));
    return _powerAssert2.default.deepEqual(_rec5._expr(_rec5._capt(c, "arguments/0"), {
      content: "assert.deepEqual(c, { x: 1, y: 2, z: 3 })",
      filepath: "object.coffee",
      line: 29
    }), _rec6._expr(_rec6._capt({
      x: 1,
      y: 2,
      z: 3
    }, "arguments/1"), {
      content: "assert.deepEqual(c, { x: 1, y: 2, z: 3 })",
      filepath: "object.coffee",
      line: 29
    }));
  }), (0, _amen.test)("clone", function (scenario) {
    scenario = function (original) {
      return function () {
        var _rec7 = new _powerAssertRecorder(),
            _rec8 = new _powerAssertRecorder(),
            _rec9 = new _powerAssertRecorder();

        var copy;
        copy = (0, _object.clone)(original);
        (0, _powerAssert2.default)(_rec7._expr(_rec7._capt(_rec7._capt(original, "arguments/0/left") !== _rec7._capt(copy, "arguments/0/right"), "arguments/0"), {
          content: "assert(original !== copy)",
          filepath: "object.coffee",
          line: 36
        }));
        return _powerAssert2.default.deepEqual(_rec8._expr(_rec8._capt(original, "arguments/0"), {
          content: "assert.deepEqual(original, copy)",
          filepath: "object.coffee",
          line: 37
        }), _rec9._expr(_rec9._capt(copy, "arguments/1"), {
          content: "assert.deepEqual(original, copy)",
          filepath: "object.coffee",
          line: 37
        }));
      };
    };
    return [(0, _amen.test)("shallow", scenario({
      x: 1,
      y: 2
    })), (0, _amen.test)("deep", [(0, _amen.test)("simple", scenario({
      x: 1,
      y: {
        z: 3
      }
    })), (0, _amen.test)("with regexp", scenario({
      x: 1,
      y: {
        z: /foo/gi
      }
    }))])];
  }(null)), (0, _amen.test)("equal", function () {
    var _rec10 = new _powerAssertRecorder(),
        _rec11 = new _powerAssertRecorder(),
        _rec12 = new _powerAssertRecorder(),
        _rec13 = new _powerAssertRecorder(),
        _rec14 = new _powerAssertRecorder(),
        _rec15 = new _powerAssertRecorder(),
        _rec16 = new _powerAssertRecorder(),
        _rec17 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec10._expr(_rec10._capt((0, _object.equal)(1, 1), "arguments/0"), {
      content: "assert(equal(1, 1))",
      filepath: "object.coffee",
      line: 47
    }));
    (0, _powerAssert2.default)(_rec11._expr(_rec11._capt(!_rec11._capt((0, _object.equal)(1, 2), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!equal(1, 2))",
      filepath: "object.coffee",
      line: 48
    }));
    (0, _powerAssert2.default)(_rec12._expr(_rec12._capt((0, _object.equal)(" ", " "), "arguments/0"), {
      content: "assert(equal(\" \", \" \"))",
      filepath: "object.coffee",
      line: 49
    }));
    (0, _powerAssert2.default)(_rec13._expr(_rec13._capt(!_rec13._capt((0, _object.equal)("", " "), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!equal(\"\", \" \"))",
      filepath: "object.coffee",
      line: 50
    }));
    (0, _powerAssert2.default)(_rec14._expr(_rec14._capt((0, _object.equal)(_rec14._capt({
      x: 1
    }, "arguments/0/arguments/0"), _rec14._capt({
      x: 1
    }, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(equal({ x: 1 }, { x: 1 }))",
      filepath: "object.coffee",
      line: 51
    }));
    (0, _powerAssert2.default)(_rec15._expr(_rec15._capt(!_rec15._capt((0, _object.equal)(_rec15._capt({
      x: 1
    }, "arguments/0/argument/arguments/0"), _rec15._capt({
      x: 2
    }, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!equal({ x: 1 }, { x: 2 }))",
      filepath: "object.coffee",
      line: 52
    }));
    (0, _powerAssert2.default)(_rec16._expr(_rec16._capt((0, _object.equal)(_rec16._capt([1, 2, 3], "arguments/0/arguments/0"), _rec16._capt([1, 2, 3], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(equal([1, 2, 3], [1, 2, 3]))",
      filepath: "object.coffee",
      line: 53
    }));
    return (0, _powerAssert2.default)(_rec17._expr(_rec17._capt(!_rec17._capt((0, _object.equal)(_rec17._capt([1, 2, 3], "arguments/0/argument/arguments/0"), _rec17._capt([1, 2, 3, 4], "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!equal([1, 2, 3], [1, 2, 3, 4]))",
      filepath: "object.coffee",
      line: 54
    }));
  }), (0, _amen.test)("property", function () {
    var _rec18 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec18._expr(_rec18._capt(_rec18._capt((0, _object.property)("x", _rec18._capt({
      x: 1
    }, "arguments/0/left/arguments/1")), "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(property(\"x\", { x: 1 }) === 1)",
      filepath: "object.coffee",
      line: 56
    }));
  }), (0, _amen.test)("bind", function () {
    var _rec19 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec19._expr(_rec19._capt(_rec19._capt((0, _object.bind)(function () {
      return this.x;
    }, _rec19._capt({
      x: 1
    }, "arguments/0/left/callee/arguments/1"))(), "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(bind(function () { return this.x; }, { x: 1 })() === 1)",
      filepath: "object.coffee",
      line: 58
    }));
  }), (0, _amen.test)("detach", function () {
    var _rec20 = new _powerAssertRecorder(),
        _rec21 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec20._expr(_rec20._capt((0, _object.detach)(_rec20._capt(_rec20._capt(_rec20._capt(Array, "arguments/0/callee/arguments/0/object/object").prototype, "arguments/0/callee/arguments/0/object").sort, "arguments/0/callee/arguments/0"))(_rec20._capt([5, 4, 3, 2, 1], "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(detach(Array.prototype.sort)([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])",
      filepath: "object.coffee",
      line: 61
    }), _rec21._expr(_rec21._capt([1, 2, 3, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(detach(Array.prototype.sort)([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])",
      filepath: "object.coffee",
      line: 61
    }));
  }), (0, _amen.test)("properties", function () {
    var _rec22 = new _powerAssertRecorder(),
        _rec23 = new _powerAssertRecorder();

    var a;
    (0, _object.properties)(a = {}, {
      x: {
        get: function () {
          return this._x;
        },
        set: function (x) {
          return this._x = x;
        }
      }
    });
    a.x = 1;
    (0, _powerAssert2.default)(_rec22._expr(_rec22._capt(_rec22._capt(_rec22._capt(a, "arguments/0/left/object")._x, "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(a._x === 1)",
      filepath: "object.coffee",
      line: 66
    }));
    a._x = 2;
    return (0, _powerAssert2.default)(_rec23._expr(_rec23._capt(_rec23._capt(_rec23._capt(a, "arguments/0/left/object").x, "arguments/0/left") === 2, "arguments/0"), {
      content: "assert(a.x === 2)",
      filepath: "object.coffee",
      line: 68
    }));
  }), (0, _amen.test)("methods", function () {
    var _rec24 = new _powerAssertRecorder();

    var a;
    (0, _object.methods)(a = {}, {
      x: function () {
        return true;
      },
      y: function () {
        return false;
      }
    });
    return (0, _powerAssert2.default)(_rec24._expr(_rec24._capt(_rec24._capt(_rec24._capt(a, "arguments/0/left/callee/object").x(), "arguments/0/left") && _rec24._capt(!_rec24._capt(_rec24._capt(a, "arguments/0/right/argument/callee/object").y(), "arguments/0/right/argument"), "arguments/0/right"), "arguments/0"), {
      content: "assert(a.x() && !a.y())",
      filepath: "object.coffee",
      line: 72
    }));
  }), (0, _amen.test)("has", function () {
    var _rec25 = new _powerAssertRecorder(),
        _rec26 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec25._expr(_rec25._capt((0, _object.has)("x", _rec25._capt({
      x: 1
    }, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(has(\"x\", { x: 1 }))",
      filepath: "object.coffee",
      line: 75
    }));
    return (0, _powerAssert2.default)(_rec26._expr(_rec26._capt(!_rec26._capt((0, _object.has)("y", _rec26._capt({
      x: 1
    }, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!has(\"y\", { x: 1 }))",
      filepath: "object.coffee",
      line: 76
    }));
  }), (0, _amen.test)("keys", function () {
    var _rec27 = new _powerAssertRecorder(),
        _rec28 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec27._expr(_rec27._capt((0, _object.keys)(_rec27._capt({
      x: 1,
      y: 2
    }, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(keys({ x: 1, y: 2 }), [\"x\", \"y\"])",
      filepath: "object.coffee",
      line: 79
    }), _rec28._expr(_rec28._capt(["x", "y"], "arguments/1"), {
      content: "assert.deepEqual(keys({ x: 1, y: 2 }), [\"x\", \"y\"])",
      filepath: "object.coffee",
      line: 79
    }));
  }), (0, _amen.test)("values", function () {
    var _rec29 = new _powerAssertRecorder(),
        _rec30 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec29._expr(_rec29._capt((0, _object.values)(_rec29._capt({
      x: 1,
      y: 2
    }, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(values({ x: 1, y: 2 }), [1, 2])",
      filepath: "object.coffee",
      line: 82
    }), _rec30._expr(_rec30._capt([1, 2], "arguments/1"), {
      content: "assert.deepEqual(values({ x: 1, y: 2 }), [1, 2])",
      filepath: "object.coffee",
      line: 82
    }));
  }), (0, _amen.test)("pairs", function () {
    var _rec31 = new _powerAssertRecorder(),
        _rec32 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec31._expr(_rec31._capt((0, _object.pairs)(_rec31._capt({
      a: 1,
      b: 2,
      c: 3
    }, "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(pairs({ a: 1, b: 2, c: 3 }), [[\"a\", 1], [\"b\", 2], [\"c\", 3]])",
      filepath: "object.coffee",
      line: 85
    }), _rec32._expr(_rec32._capt([_rec32._capt(["a", 1], "arguments/1/elements/0"), _rec32._capt(["b", 2], "arguments/1/elements/1"), _rec32._capt(["c", 3], "arguments/1/elements/2")], "arguments/1"), {
      content: "assert.deepEqual(pairs({ a: 1, b: 2, c: 3 }), [[\"a\", 1], [\"b\", 2], [\"c\", 3]])",
      filepath: "object.coffee",
      line: 85
    }));
  }), (0, _amen.test)("pick", function () {
    var _rec33 = new _powerAssertRecorder(),
        _rec34 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec33._expr(_rec33._capt((0, _object.pick)(function (k, v) {
      return v != null;
    }, _rec33._capt({
      x: 1,
      y: null
    }, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(pick(function (k, v) { return v != null; }, { x: 1, y: null }), { x: 1 })",
      filepath: "object.coffee",
      line: 89
    }), _rec34._expr(_rec34._capt({
      x: 1
    }, "arguments/1"), {
      content: "assert.deepEqual(pick(function (k, v) { return v != null; }, { x: 1, y: null }), { x: 1 })",
      filepath: "object.coffee",
      line: 89
    }));
  }), (0, _amen.test)("omit", function () {
    var _rec35 = new _powerAssertRecorder(),
        _rec36 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec35._expr(_rec35._capt((0, _object.omit)(function (k, v) {
      return v != null;
    }, _rec35._capt({
      x: 1,
      y: null
    }, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(omit(function (k, v) { return v != null; }, { x: 1, y: null }), { y: void 0 })",
      filepath: "object.coffee",
      line: 92
    }), _rec36._expr(_rec36._capt({
      y: _rec36._capt(void 0, "arguments/1/properties/0/value")
    }, "arguments/1"), {
      content: "assert.deepEqual(omit(function (k, v) { return v != null; }, { x: 1, y: null }), { y: void 0 })",
      filepath: "object.coffee",
      line: 92
    }));
  }), (0, _amen.test)("query", function () {
    var _rec37 = new _powerAssertRecorder(),
        _rec38 = new _powerAssertRecorder(),
        _rec39 = new _powerAssertRecorder(),
        _rec40 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec37._expr(_rec37._capt((0, _object.query)(_rec37._capt({
      x: 1
    }, "arguments/0/arguments/0"), _rec37._capt({
      x: 1,
      y: 2
    }, "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert(query({ x: 1 }, { x: 1, y: 2 }))",
      filepath: "object.coffee",
      line: 95
    }));
    (0, _powerAssert2.default)(_rec38._expr(_rec38._capt(!_rec38._capt((0, _object.query)(_rec38._capt({
      x: 2
    }, "arguments/0/argument/arguments/0"), _rec38._capt({
      x: 1,
      y: 2
    }, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!query({ x: 2 }, { x: 1, y: 2 }))",
      filepath: "object.coffee",
      line: 96
    }));
    (0, _powerAssert2.default)(_rec39._expr(_rec39._capt((0, _object.query)(1, 1), "arguments/0"), {
      content: "assert(query(1, 1))",
      filepath: "object.coffee",
      line: 97
    }));
    return (0, _powerAssert2.default)(_rec40._expr(_rec40._capt(!_rec40._capt((0, _object.query)(1, 2), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!query(1, 2))",
      filepath: "object.coffee",
      line: 98
    }));
  }), (0, _amen.test)("toJSON/fromJSON", function () {
    var _rec41 = new _powerAssertRecorder(),
        _rec42 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec41._expr(_rec41._capt((0, _object.fromJSON)(_rec41._capt((0, _object.toJSON)(_rec41._capt({
      x: 1,
      y: 2
    }, "arguments/0/arguments/0/arguments/0")), "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(fromJSON(toJSON({ x: 1, y: 2 })), { x: 1, y: 2 })",
      filepath: "object.coffee",
      line: 101
    }), _rec42._expr(_rec42._capt({
      x: 1,
      y: 2
    }, "arguments/1"), {
      content: "assert.deepEqual(fromJSON(toJSON({ x: 1, y: 2 })), { x: 1, y: 2 })",
      filepath: "object.coffee",
      line: 101
    }));
  })])));
})();