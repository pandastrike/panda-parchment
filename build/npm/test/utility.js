"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _utility = require("../lib/utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("utility helpers", [(0, _amen.test)("timer", function () {
    var _rec = new _powerAssertRecorder();

    var cancel, tooLate, x;
    // We need an action to put into "timer",
    // but we'll cancel it before it runs.
    x = 5;
    tooLate = function () {
      return x++;
    };
    cancel = (0, _utility.timer)(10000, tooLate);
    // 10s is too long to wait.  Cancel it!!
    cancel();
    return (0, _powerAssert2.default)(_rec._expr(_rec._capt(_rec._capt(x, "arguments/0/left") === 5, "arguments/0"), {
      content: "assert(x === 5)",
      filepath: "utility.coffee",
      line: 20
    })); // We kept tooLong from executing.
  }), (0, _amen.test)("sleep", [(0, _amen.test)("microseconds/benchmark", _asyncToGenerator(function* () {
    var _rec2 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec2._expr(_rec2._capt(_rec2._capt((yield (0, _utility.benchmark)(_asyncToGenerator(function* () {
      return yield (0, _utility.sleep)(100);
    }))), "arguments/0/left") > _rec2._capt(100 * 1000, "arguments/0/right"), "arguments/0"), {
      content: "assert((await benchmark(async function () { return await sleep(100); })) > 100 * 1000)",
      filepath: "utility.coffee",
      line: 24,
      async: true
    }));
  }))]), (0, _amen.test)("times", function () {
    var _rec3 = new _powerAssertRecorder(),
        _rec4 = new _powerAssertRecorder();

    var n;
    n = 0;
    return _powerAssert2.default.deepEqual(_rec3._expr(_rec3._capt((0, _utility.times)(function () {
      return ++n;
    }, 3), "arguments/0"), {
      content: "assert.deepEqual(times(function () { return ++n; }, 3), [1, 2, 3])",
      filepath: "utility.coffee",
      line: 29
    }), _rec4._expr(_rec4._capt([1, 2, 3], "arguments/1"), {
      content: "assert.deepEqual(times(function () { return ++n; }, 3), [1, 2, 3])",
      filepath: "utility.coffee",
      line: 29
    }));
  })])));
})();