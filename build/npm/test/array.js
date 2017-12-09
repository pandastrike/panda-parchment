"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _array = require("../lib/array");

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("array helperrs", [(0, _amen.test)("first", function () {
    var _rec = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec._expr(_rec._capt(_rec._capt((0, _array.first)(_rec._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 1, "arguments/0"), {
      content: "assert(first([1, 2, 3, 4, 5]) === 1)",
      filepath: "array.coffee",
      line: 16
    }));
  }), (0, _amen.test)("second", function () {
    var _rec2 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec2._expr(_rec2._capt(_rec2._capt((0, _array.second)(_rec2._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 2, "arguments/0"), {
      content: "assert(second([1, 2, 3, 4, 5]) === 2)",
      filepath: "array.coffee",
      line: 17
    }));
  }), (0, _amen.test)("third", function () {
    var _rec3 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec3._expr(_rec3._capt(_rec3._capt((0, _array.third)(_rec3._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 3, "arguments/0"), {
      content: "assert(third([1, 2, 3, 4, 5]) === 3)",
      filepath: "array.coffee",
      line: 18
    }));
  }), (0, _amen.test)("fourth", function () {
    var _rec4 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec4._expr(_rec4._capt(_rec4._capt((0, _array.fourth)(_rec4._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 4, "arguments/0"), {
      content: "assert(fourth([1, 2, 3, 4, 5]) === 4)",
      filepath: "array.coffee",
      line: 19
    }));
  }), (0, _amen.test)("fifth", function () {
    var _rec5 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec5._expr(_rec5._capt(_rec5._capt((0, _array.fifth)(_rec5._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 5, "arguments/0"), {
      content: "assert(fifth([1, 2, 3, 4, 5]) === 5)",
      filepath: "array.coffee",
      line: 20
    }));
  }), (0, _amen.test)("nth", function () {
    var _rec6 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec6._expr(_rec6._capt(_rec6._capt((0, _array.nth)(3, _rec6._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/1")), "arguments/0/left") === 3, "arguments/0"), {
      content: "assert(nth(3, [1, 2, 3, 4, 5]) === 3)",
      filepath: "array.coffee",
      line: 21
    }));
  }), (0, _amen.test)("last", function () {
    var _rec7 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec7._expr(_rec7._capt(_rec7._capt((0, _array.last)(_rec7._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 5, "arguments/0"), {
      content: "assert(last([1, 2, 3, 4, 5]) === 5)",
      filepath: "array.coffee",
      line: 22
    }));
  }), (0, _amen.test)("rest", function () {
    var _rec8 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec8._expr(_rec8._capt(_rec8._capt((0, _array.first)(_rec8._capt((0, _array.rest)(_rec8._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0/arguments/0")), "arguments/0/left/arguments/0")), "arguments/0/left") === 2, "arguments/0"), {
      content: "assert(first(rest([1, 2, 3, 4, 5])) === 2)",
      filepath: "array.coffee",
      line: 23
    }));
  }), (0, _amen.test)("includes", function () {
    var _rec9 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec9._expr(_rec9._capt(_rec9._capt((0, _array.includes)(3, _rec9._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/1")), "arguments/0/left") && _rec9._capt(!_rec9._capt((0, _array.includes)(6, _rec9._capt([1, 2, 3, 4, 5], "arguments/0/right/argument/arguments/1")), "arguments/0/right/argument"), "arguments/0/right"), "arguments/0"), {
      content: "assert(includes(3, [1, 2, 3, 4, 5]) && !includes(6, [1, 2, 3, 4, 5]))",
      filepath: "array.coffee",
      line: 24
    }));
  }), (0, _amen.test)("findIndexOf"), (0, _amen.test)("findLastIndexOf"), (0, _amen.test)("push/enqueue", function () {
    var _rec10 = new _powerAssertRecorder(),
        _rec11 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec10._expr(_rec10._capt((0, _array.push)(_rec10._capt([1, 2, 3, 4], "arguments/0/arguments/0"), 5), "arguments/0"), {
      content: "assert.deepEqual(push([1, 2, 3, 4], 5), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 27
    }), _rec11._expr(_rec11._capt([1, 2, 3, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(push([1, 2, 3, 4], 5), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 27
    }));
  }), (0, _amen.test)("pop/dequeue", function () {
    var _rec12 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec12._expr(_rec12._capt(_rec12._capt((0, _array.pop)(_rec12._capt([1, 2, 3, 4, 5], "arguments/0/left/arguments/0")), "arguments/0/left") === 5, "arguments/0"), {
      content: "assert(pop([1, 2, 3, 4, 5]) === 5)",
      filepath: "array.coffee",
      line: 28
    }));
  }), (0, _amen.test)("shift"), (0, _amen.test)("unshift"), (0, _amen.test)("splice"), (0, _amen.test)("cat", function () {
    var _rec13 = new _powerAssertRecorder(),
        _rec14 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec13._expr(_rec13._capt((0, _array.cat)(_rec13._capt([1, 2, 3, 4, 5], "arguments/0/arguments/0"), _rec13._capt([6, 7, 8, 9, 10], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(cat([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
      filepath: "array.coffee",
      line: 32
    }), _rec14._expr(_rec14._capt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "arguments/1"), {
      content: "assert.deepEqual(cat([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
      filepath: "array.coffee",
      line: 32
    }));
  }), (0, _amen.test)("slice", function () {
    var _rec15 = new _powerAssertRecorder(),
        _rec16 = new _powerAssertRecorder(),
        _rec17 = new _powerAssertRecorder(),
        _rec18 = new _powerAssertRecorder(),
        _rec19 = new _powerAssertRecorder(),
        _rec20 = new _powerAssertRecorder(),
        _rec21 = new _powerAssertRecorder(),
        _rec22 = new _powerAssertRecorder(),
        _rec23 = new _powerAssertRecorder();

    _powerAssert2.default.deepEqual(_rec15._expr(_rec15._capt((0, _array.slice)(1, 2, _rec15._capt([1, 2, 3, 4, 5], "arguments/0/arguments/2")), "arguments/0"), {
      content: "assert.deepEqual(slice(1, 2, [1, 2, 3, 4, 5]), [2])",
      filepath: "array.coffee",
      line: 35
    }), _rec16._expr(_rec16._capt([2], "arguments/1"), {
      content: "assert.deepEqual(slice(1, 2, [1, 2, 3, 4, 5]), [2])",
      filepath: "array.coffee",
      line: 35
    }));
    _powerAssert2.default.deepEqual(_rec17._expr(_rec17._capt((0, _array.slice)(2, 5, _rec17._capt([1, 2, 3, 4, 5], "arguments/0/arguments/2")), "arguments/0"), {
      content: "assert.deepEqual(slice(2, 5, [1, 2, 3, 4, 5]), [3, 4, 5])",
      filepath: "array.coffee",
      line: 36
    }), _rec18._expr(_rec18._capt([3, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(slice(2, 5, [1, 2, 3, 4, 5]), [3, 4, 5])",
      filepath: "array.coffee",
      line: 36
    }));
    _powerAssert2.default.deepEqual(_rec19._expr(_rec19._capt((0, _array.slice)(1, _rec19._capt(-2, "arguments/0/arguments/1"), _rec19._capt([1, 2, 3, 4, 5], "arguments/0/arguments/2")), "arguments/0"), {
      content: "assert.deepEqual(slice(1, -2, [1, 2, 3, 4, 5]), [2, 3])",
      filepath: "array.coffee",
      line: 37
    }), _rec20._expr(_rec20._capt([2, 3], "arguments/1"), {
      content: "assert.deepEqual(slice(1, -2, [1, 2, 3, 4, 5]), [2, 3])",
      filepath: "array.coffee",
      line: 37
    }));
    _powerAssert2.default.deepEqual(_rec21._expr(_rec21._capt((0, _array.slice)(_rec21._capt(-3, "arguments/0/arguments/0"), _rec21._capt(-1, "arguments/0/arguments/1"), _rec21._capt([1, 2, 3, 4, 5], "arguments/0/arguments/2")), "arguments/0"), {
      content: "assert.deepEqual(slice(-3, -1, [1, 2, 3, 4, 5]), [3, 4])",
      filepath: "array.coffee",
      line: 38
    }), _rec22._expr(_rec22._capt([3, 4], "arguments/1"), {
      content: "assert.deepEqual(slice(-3, -1, [1, 2, 3, 4, 5]), [3, 4])",
      filepath: "array.coffee",
      line: 38
    }));
    return _powerAssert2.default.deepEqual(_rec23._expr(_rec23._capt((0, _array.slice)(_rec23._capt(-3, "arguments/0/arguments/0"), _rec23._capt(-1, "arguments/0/arguments/1"), "0123456789"), "arguments/0"), {
      content: "assert.deepEqual(slice(-3, -1, \"0123456789\"), \"78\")",
      filepath: "array.coffee",
      line: 39
    }), "78");
  }), (0, _amen.test)("splice"), (0, _amen.test)("uniqueBy", function () {
    var _rec24 = new _powerAssertRecorder(),
        _rec25 = new _powerAssertRecorder();

    var mod3;
    mod3 = function (x) {
      return x % 3;
    };
    return _powerAssert2.default.deepEqual(_rec24._expr(_rec24._capt((0, _array.uniqueBy)(_rec24._capt(mod3, "arguments/0/arguments/0"), _rec24._capt([1, 2, 3, 4, 5], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(uniqueBy(mod3, [1, 2, 3, 4, 5]), [1, 2, 0])",
      filepath: "array.coffee",
      line: 45
    }), _rec25._expr(_rec25._capt([1, 2, 0], "arguments/1"), {
      content: "assert.deepEqual(uniqueBy(mod3, [1, 2, 3, 4, 5]), [1, 2, 0])",
      filepath: "array.coffee",
      line: 45
    }));
  }), (0, _amen.test)("unique", function () {
    var _rec26 = new _powerAssertRecorder(),
        _rec27 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec26._expr(_rec26._capt((0, _array.unique)(_rec26._capt([..._rec26._capt([1, 2, 3, 4], "arguments/0/arguments/0/elements/0/argument"), ..._rec26._capt([4, 3, 2, 1], "arguments/0/arguments/0/elements/1/argument")], "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(unique([...[1, 2, 3, 4], ...[4, 3, 2, 1]]), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 48
    }), _rec27._expr(_rec27._capt([1, 2, 3, 4], "arguments/1"), {
      content: "assert.deepEqual(unique([...[1, 2, 3, 4], ...[4, 3, 2, 1]]), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 48
    }));
  }), (0, _amen.test)("dupes", function () {
    var _rec28 = new _powerAssertRecorder(),
        _rec29 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec28._expr(_rec28._capt((0, _array.dupes)(_rec28._capt([..._rec28._capt([1, 2, 3], "arguments/0/arguments/0/elements/0/argument"), ..._rec28._capt([2, 1], "arguments/0/arguments/0/elements/1/argument")], "arguments/0/arguments/0")), "arguments/0"), {
      content: "assert.deepEqual(dupes([...[1, 2, 3], ...[2, 1]]), [1, 2])",
      filepath: "array.coffee",
      line: 51
    }), _rec29._expr(_rec29._capt([1, 2], "arguments/1"), {
      content: "assert.deepEqual(dupes([...[1, 2, 3], ...[2, 1]]), [1, 2])",
      filepath: "array.coffee",
      line: 51
    }));
  }), (0, _amen.test)("union", function () {
    var _rec30 = new _powerAssertRecorder(),
        _rec31 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec30._expr(_rec30._capt((0, _array.union)(_rec30._capt([1, 2, 3, 4, 5, 6], "arguments/0/arguments/0"), _rec30._capt([4, 5, 6, 7, 8, 9, 10], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(union([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
      filepath: "array.coffee",
      line: 54
    }), _rec31._expr(_rec31._capt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "arguments/1"), {
      content: "assert.deepEqual(union([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
      filepath: "array.coffee",
      line: 54
    }));
  }), (0, _amen.test)("intersection", function () {
    var _rec32 = new _powerAssertRecorder(),
        _rec33 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec32._expr(_rec32._capt((0, _array.intersection)(_rec32._capt([1, 2, 3, 4, 5, 6], "arguments/0/arguments/0"), _rec32._capt([4, 5, 6, 7, 8, 9, 10], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(intersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [4, 5, 6])",
      filepath: "array.coffee",
      line: 57
    }), _rec33._expr(_rec33._capt([4, 5, 6], "arguments/1"), {
      content: "assert.deepEqual(intersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [4, 5, 6])",
      filepath: "array.coffee",
      line: 57
    }));
  }), (0, _amen.test)("difference", function () {
    var _rec34 = new _powerAssertRecorder(),
        _rec35 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec34._expr(_rec34._capt((0, _array.difference)(_rec34._capt([1, 2, 3, 4, 5, 6, 7, 8, 9], "arguments/0/arguments/0"), _rec34._capt([2, 3, 4, 5, 6, 7, 8, 9, 10], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(difference([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 10])",
      filepath: "array.coffee",
      line: 60
    }), _rec35._expr(_rec35._capt([1, 10], "arguments/1"), {
      content: "assert.deepEqual(difference([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 10])",
      filepath: "array.coffee",
      line: 60
    }));
  }), (0, _amen.test)("complement", function () {
    var _rec36 = new _powerAssertRecorder(),
        _rec37 = new _powerAssertRecorder();

    return _powerAssert2.default.deepEqual(_rec36._expr(_rec36._capt((0, _array.complement)(_rec36._capt([1, 2, 3, 4, 5], "arguments/0/arguments/0"), _rec36._capt([3, 4, 5, 6], "arguments/0/arguments/1")), "arguments/0"), {
      content: "assert.deepEqual(complement([1, 2, 3, 4, 5], [3, 4, 5, 6]), [1, 2])",
      filepath: "array.coffee",
      line: 63
    }), _rec37._expr(_rec37._capt([1, 2], "arguments/1"), {
      content: "assert.deepEqual(complement([1, 2, 3, 4, 5], [3, 4, 5, 6]), [1, 2])",
      filepath: "array.coffee",
      line: 63
    }));
  }), (0, _amen.test)("insert", function () {
    var _rec38 = new _powerAssertRecorder(),
        _rec39 = new _powerAssertRecorder(),
        _rec40 = new _powerAssertRecorder(),
        _rec41 = new _powerAssertRecorder(),
        _rec42 = new _powerAssertRecorder(),
        _rec43 = new _powerAssertRecorder();

    _powerAssert2.default.deepEqual(_rec38._expr(_rec38._capt((0, _array.insert)(_rec38._capt([4, 2, 1], "arguments/0/arguments/0"), 3, 1), "arguments/0"), {
      content: "assert.deepEqual(insert([4, 2, 1], 3, 1), [4, 3, 2, 1])",
      filepath: "array.coffee",
      line: 66
    }), _rec39._expr(_rec39._capt([4, 3, 2, 1], "arguments/1"), {
      content: "assert.deepEqual(insert([4, 2, 1], 3, 1), [4, 3, 2, 1])",
      filepath: "array.coffee",
      line: 66
    }));
    _powerAssert2.default.deepEqual(_rec40._expr(_rec40._capt((0, _array.insert)(_rec40._capt([1, 2, 4], "arguments/0/arguments/0"), 3, _rec40._capt(-1, "arguments/0/arguments/2")), "arguments/0"), {
      content: "assert.deepEqual(insert([1, 2, 4], 3, -1), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 67
    }), _rec41._expr(_rec41._capt([1, 2, 3, 4], "arguments/1"), {
      content: "assert.deepEqual(insert([1, 2, 4], 3, -1), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 67
    }));
    return _powerAssert2.default.deepEqual(_rec42._expr(_rec42._capt((0, _array.insert)(_rec42._capt([2, 3, 4], "arguments/0/arguments/0"), 1, 0), "arguments/0"), {
      content: "assert.deepEqual(insert([2, 3, 4], 1, 0), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 68
    }), _rec43._expr(_rec43._capt([1, 2, 3, 4], "arguments/1"), {
      content: "assert.deepEqual(insert([2, 3, 4], 1, 0), [1, 2, 3, 4])",
      filepath: "array.coffee",
      line: 68
    }));
  }), (0, _amen.test)("remove", function () {
    var _rec44 = new _powerAssertRecorder(),
        _rec45 = new _powerAssertRecorder(),
        _rec46 = new _powerAssertRecorder(),
        _rec47 = new _powerAssertRecorder();

    _powerAssert2.default.deepEqual(_rec44._expr(_rec44._capt((0, _array.remove)(_rec44._capt([1, 2, 3, 4, 5], "arguments/0/arguments/0"), 3), "arguments/0"), {
      content: "assert.deepEqual(remove([1, 2, 3, 4, 5], 3), [1, 2, 4, 5])",
      filepath: "array.coffee",
      line: 71
    }), _rec45._expr(_rec45._capt([1, 2, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(remove([1, 2, 3, 4, 5], 3), [1, 2, 4, 5])",
      filepath: "array.coffee",
      line: 71
    }));
    return _powerAssert2.default.deepEqual(_rec46._expr(_rec46._capt((0, _array.remove)(_rec46._capt([1, 2, 3, 4, 5], "arguments/0/arguments/0"), 6), "arguments/0"), {
      content: "assert.deepEqual(remove([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 72
    }), _rec47._expr(_rec47._capt([1, 2, 3, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(remove([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 72
    }));
  }), (0, _amen.test)("shuffle", function () {
    // use a sinon sandbox b/c we're mocking globals
    return _sinon2.default.test(function () {
      var _rec48 = new _powerAssertRecorder(),
          _rec49 = new _powerAssertRecorder();

      var fisher_yates;
      // stubbing Math.random() allows us to determine the algorithm used
      // by expecting a specific result
      _sinon2.default.stub(Math, "random").returns(0.8);
      // "Given Math.random() always returns 0.8..."
      // * if the biased j = (i * array.size) algorithm is used,
      //   the expected result is: [ 9, 1, 2, 3, 4, 5, 6, 7, 10, 8 ]
      // * if the fisher-yates algorithm used, the expected result is:
      fisher_yates = [1, 2, 3, 4, 10, 5, 6, 7, 8, 9];
      return _powerAssert2.default.deepEqual(_rec48._expr(_rec48._capt((0, _array.shuffle)(_rec48._capt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "arguments/0/arguments/0")), "arguments/0"), {
        content: "assert.deepEqual(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), fisher_yates)",
        filepath: "array.coffee",
        line: 85
      }), _rec49._expr(_rec49._capt(fisher_yates, "arguments/1"), {
        content: "assert.deepEqual(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), fisher_yates)",
        filepath: "array.coffee",
        line: 85
      }));
    });
  }), (0, _amen.test)("range", function () {
    var _rec50 = new _powerAssertRecorder(),
        _rec51 = new _powerAssertRecorder(),
        _rec52 = new _powerAssertRecorder(),
        _rec53 = new _powerAssertRecorder();

    _powerAssert2.default.deepEqual(_rec50._expr(_rec50._capt((0, _array.range)(1, 5), "arguments/0"), {
      content: "assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 88
    }), _rec51._expr(_rec51._capt([1, 2, 3, 4, 5], "arguments/1"), {
      content: "assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5])",
      filepath: "array.coffee",
      line: 88
    }));
    return _powerAssert2.default.deepEqual(_rec52._expr(_rec52._capt((0, _array.range)(5, 1), "arguments/0"), {
      content: "assert.deepEqual(range(5, 1), [5, 4, 3, 2, 1])",
      filepath: "array.coffee",
      line: 89
    }), _rec53._expr(_rec53._capt([5, 4, 3, 2, 1], "arguments/1"), {
      content: "assert.deepEqual(range(5, 1), [5, 4, 3, 2, 1])",
      filepath: "array.coffee",
      line: 89
    }));
  }), (0, _amen.test)("join"), (0, _amen.test)("fill"), (0, _amen.test)("pluck"), (0, _amen.test)("pair")])));
})();