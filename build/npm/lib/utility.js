"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.times = exports.benchmark = exports.microseconds = exports.timer = exports.sleep = undefined;

var _fairmontCore = require("fairmont-core");

var _fairmontMultimethods = require("fairmont-multimethods");

var _promise = require("./promise");

var _type = require("./type");

var _string = require("./string");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var benchmark, microseconds, sleep, timer, times;

exports.timer = timer = function (wait, action) {
  var id;
  id = setTimeout(action, wait);
  return function () {
    return clearTimeout(id);
  };
};

exports.sleep = sleep = function (interval) {
  return (0, _promise.promise)(function (resolve, reject) {
    return timer(interval, function () {
      return resolve();
    });
  });
};

exports.times = times = (0, _fairmontCore.curry)(function (fn, n) {
  var results;
  results = [];
  while (n-- !== 0) {
    results.push(fn());
  }
  return results;
});

exports.microseconds = microseconds = function () {
  var ref;
  if ((typeof process !== "undefined" && process !== null ? process.hrtime : void 0) != null) {
    return function () {
      var nanoseconds, seconds;
      [seconds, nanoseconds] = process.hrtime();
      return seconds * 1000000 + nanoseconds / 1000;
    };
  } else if ((typeof window !== "undefined" && window !== null ? (ref = window.performance) != null ? ref.now : void 0 : void 0) != null) {
    return function () {
      return window.performance.now();
    };
  } else {
    return function () {
      return Date.now() * 1000;
    };
  }
}();

exports.benchmark = benchmark = _fairmontMultimethods.Method.create();

_fairmontMultimethods.Method.define(benchmark, _type.isFunction, function (fn) {
  var start;
  start = microseconds();
  fn();
  return microseconds() - start;
});

_fairmontMultimethods.Method.define(benchmark, _type.isAsyncFunction, (() => {
  var _ref = _asyncToGenerator(function* (fn) {
    var start;
    start = microseconds();
    yield fn();
    return microseconds() - start;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

exports.sleep = sleep;
exports.timer = timer;
exports.microseconds = microseconds;
exports.benchmark = benchmark;
exports.times = times;