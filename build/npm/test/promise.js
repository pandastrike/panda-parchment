"use strict";

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _promise = require("../lib/promise");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_powerAssert2.default.rejects = function (f) {
  return f().then(function () {
    return _powerAssert2.default.fail("Missing expected promise rejection.");
  }).catch(function () {});
};

_powerAssert2.default.resolves = function (f) {
  return f().catch(function () {
    return _powerAssert2.default.fail("Missing expected promise resolution.");
  });
};

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("promise helpers", [(0, _amen.test)("rephrase", [(0, _amen.test)("node style", function () {
    var _foo, foo;
    foo = {
      bar: function (callback) {
        return callback(null, true);
      },
      baz: function (callback) {
        return callback(true, false);
      }
    };
    _foo = (0, _promise.rephrase)("node", foo);
    _powerAssert2.default.resolves(function () {
      return _foo.bar();
    });
    return _powerAssert2.default.rejects(function () {
      return _foo.baz();
    });
  })])])));
})();