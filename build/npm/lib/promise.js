"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rephrase = exports.reject = exports.follow = exports.resolve = exports.promise = undefined;

var _fairmontCore = require("fairmont-core");

var _fairmontMultimethods = require("fairmont-multimethods");

var _type = require("./type");

var callbacks, follow, promise, reject, rephrase, resolve;

exports.promise = promise = function (f) {
  return new Promise(f);
};

exports.reject = reject = function (x) {
  return Promise.reject(x);
};

exports.resolve = resolve = function (x) {
  return Promise.resolve(x);
};

// follow reads better in some cases and avoids naming
// conflicts within promise-returning functions
exports.follow = follow = resolve;

exports.rephrase = rephrase = _fairmontMultimethods.Method.create({
  // for ordinary values, this does nothing
  // includes async and generator functions
  default: function (callback, value) {
    console.log({ callback, value });
    return value;
  }
});

// for objects, we try to rephrase the values
_fairmontMultimethods.Method.define(rephrase, _type.isFunction, _type.isObject, function (callback, object) {
  var key, proxy, value;
  proxy = {};
  for (key in object) {
    value = object[key];
    proxy[key] = rephrase(callback, value);
  }
  return proxy;
});

// real work happens here, when we have a function
_fairmontMultimethods.Method.define(rephrase, _type.isFunction, _type.isFunction, function (callback, f) {
  return function (...args) {
    return promise(function (resolve, reject) {
      var error;
      try {
        return f(...args, ...callback(resolve, reject));
      } catch (error1) {
        error = error1;
        return reject(error);
      }
    });
  };
});

callbacks = {
  node: function (resolve, reject) {
    return [function (error, ...args) {
      if (error) {
        return reject(error);
      } else {
        return resolve(...args);
      }
    }];
  },
  handlers: function (resolve, reject) {
    return [resolve, reject];
  }
};

_fairmontMultimethods.Method.define(rephrase, _type.isString, _type.isDefined, function (style, target) {
  return rephrase(callbacks[style], target);
});

exports.rephrase = rephrase = (0, _fairmontCore.curry)((0, _fairmontCore.binary)(rephrase));

exports.promise = promise;
exports.resolve = resolve;
exports.follow = follow;
exports.reject = reject;
exports.rephrase = rephrase;