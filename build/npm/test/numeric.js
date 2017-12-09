"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _numeric = require("../lib/numeric");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("numeric helpers", [(0, _amen.test)("gt"), (0, _amen.test)("lt", function () {
    var _rec = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec._expr(_rec._capt((0, _numeric.lt)(6, 5), "arguments/0"), {
      content: "assert(lt(6, 5))",
      filepath: "numeric.coffee",
      line: 10
    }));
  }), (0, _amen.test)("gte"), (0, _amen.test)("lte"), (0, _amen.test)("add"), (0, _amen.test)("sub"), (0, _amen.test)("mul"), (0, _amen.test)("div"), (0, _amen.test)("mod"), (0, _amen.test)("even"), (0, _amen.test)("odd", function () {
    var _rec2 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec2._expr(_rec2._capt((0, _numeric.odd)(5), "arguments/0"), {
      content: "assert(odd(5))",
      filepath: "numeric.coffee",
      line: 19
    }));
  }), (0, _amen.test)("min"), (0, _amen.test)("max"), (0, _amen.test)("abs")])));
})();