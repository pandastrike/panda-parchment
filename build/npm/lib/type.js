"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.length = exports.size = exports.isAsyncFunction = exports.isPromise = exports.isGeneratorFunction = exports.isDate = exports.isRegExp = exports.isUndefined = exports.isDefined = exports.isArray = exports.isObject = exports.isFunction = exports.isBuffer = exports.isString = exports.isFloat = exports.isInteger = exports.isFinite = exports.isNaN = exports.isNumber = exports.isBoolean = exports.instanceOf = exports.Type = exports.isKind = exports.isType = exports.isTransitivePrototype = exports.isPrototype = exports.prototype = undefined;

var _fairmontCore = require("fairmont-core");

var _fairmontMultimethods = require("fairmont-multimethods");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GeneratorFunction, Type, hasByteLength, hasLength, hasSize, instanceOf, isArray, isAsyncFunction, isBoolean, isBuffer, isDate, isDefined, isEmpty, isError, isFinite, isFloat, isFunction, isGeneratorFunction, isInteger, isKind, isNaN, isNumber, isObject, isPromise, isPrototype, isRegExp, isString, isTransitivePrototype, isType, isUndefined, length, prototype, size;

exports.prototype = prototype = function (value) {
  if (value != null) {
    return Object.getPrototypeOf(value);
  }
};

exports.isPrototype = isPrototype = (0, _fairmontCore.curry)(function (p, value) {
  return p != null && p === prototype(value);
});

exports.isType = isType = (0, _fairmontCore.curry)(function (type, value) {
  return isPrototype(type != null ? type.prototype : void 0, value);
});

exports.isTransitivePrototype = isTransitivePrototype = (0, _fairmontCore.curry)(function (p, value) {
  var q;
  return p != null && (p === (q = prototype(value)) || q != null && isTransitivePrototype(p, q));
});

exports.isKind = isKind = (0, _fairmontCore.curry)(function (type, value) {
  return isTransitivePrototype(type != null ? type.prototype : void 0, value);
});

exports.isNumber = isNumber = isType(Number);

exports.isNaN = isNaN = function (n) {
  return Number.isNaN(n);
};

exports.isFinite = isFinite = function (n) {
  return Number.isFinite(n);
};

exports.isInteger = isInteger = function (n) {
  return Number.isInteger(n);
};

exports.isFloat = isFloat = function (n) {
  return n === +n && n !== (n | 0);
};

exports.isBoolean = isBoolean = isType(Boolean);

exports.isDate = isDate = isType(Date);

exports.isRegExp = isRegExp = isType(RegExp);

exports.isString = isString = isType(String);

exports.isBuffer = isBuffer = isType(Buffer);

exports.isFunction = isFunction = isType(Function);

exports.isObject = isObject = isType(Object);

exports.isArray = isArray = isType(Array);

isError = isType(Error);

exports.isDefined = isDefined = function (x) {
  return x != null;
};

exports.isUndefined = isUndefined = function (x) {
  return x == null;
};

GeneratorFunction = function* () {
  return yield null;
}.constructor;

exports.isGeneratorFunction = isGeneratorFunction = isType(GeneratorFunction);

exports.isPromise = isPromise = isType(Promise);

exports.isAsyncFunction = isAsyncFunction = isType(_asyncToGenerator(function* () {
  return yield null;
}).constructor);

exports.instanceOf = instanceOf = (0, _fairmontCore.curry)(function (t, x) {
  return x instanceof t;
});

exports.Type = Type = {
  create: function (type) {
    return Object.create(type != null ? type.prototype : void 0);
  },
  define: function (parent = Object) {
    return {
      prototype: Type.create(parent)
    };
  }
};

exports.size = size = exports.length = length = _fairmontMultimethods.Method.create({
  default: function (x) {
    throw new TypeError(`size: not valid for type ${x.constructor}`);
  }
});

hasLength = function (x) {
  return x.length != null;
};

hasByteLength = function (x) {
  return x.byteLength != null;
};

hasSize = function (x) {
  return x.size != null;
};

_fairmontMultimethods.Method.define(size, hasByteLength, function (x) {
  return x.byteLength;
});

_fairmontMultimethods.Method.define(size, isObject, function (x) {
  return keys(x).length;
});

_fairmontMultimethods.Method.define(size, hasSize, function (x) {
  return x.size;
});

_fairmontMultimethods.Method.define(size, hasLength, function (x) {
  return x.length;
});

exports.isEmpty = isEmpty = function (x) {
  return size(x) === 0;
};

exports.prototype = prototype;
exports.isPrototype = isPrototype;
exports.isTransitivePrototype = isTransitivePrototype;
exports.isType = isType;
exports.isKind = isKind;
exports.Type = Type;
exports.instanceOf = instanceOf;
exports.isBoolean = isBoolean;
exports.isNumber = isNumber;
exports.isNaN = isNaN;
exports.isFinite = isFinite;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isString = isString;
exports.isBuffer = isBuffer;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isPromise = isPromise;
exports.isAsyncFunction = isAsyncFunction;
exports.size = size;
exports.length = length;
exports.isEmpty = isEmpty;