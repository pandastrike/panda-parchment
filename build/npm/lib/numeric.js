"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = exports.max = exports.min = exports.odd = exports.even = exports.mod = exports.div = exports.mul = exports.sub = exports.add = exports.lte = exports.gte = exports.lt = exports.gt = exports.neq = exports.eq = undefined;

var _fairmontCore = require("fairmont-core");

var abs, add, div, eq, even, gt, gte, lt, lte, max, min, mod, mul, neq, odd, pow, sub;

exports.eq = eq = (0, _fairmontCore.curry)(function (x, y) {
  return x === y;
});

exports.neq = neq = (0, _fairmontCore.curry)(function (x, y) {
  return x !== y;
});

exports.gte = gte = (0, _fairmontCore.curry)(function (x, y) {
  return y >= x;
});

exports.lte = lte = (0, _fairmontCore.curry)(function (x, y) {
  return y <= x;
});

exports.gt = gt = (0, _fairmontCore.curry)(function (x, y) {
  return y > x;
});

exports.lt = lt = (0, _fairmontCore.curry)(function (x, y) {
  return y < x;
});

exports.add = add = (0, _fairmontCore.curry)(function (x, y) {
  return x + y;
});

exports.sub = sub = (0, _fairmontCore.curry)(function (x, y) {
  return y - x;
});

exports.mul = mul = (0, _fairmontCore.curry)(function (x, y) {
  return x * y;
});

exports.div = div = (0, _fairmontCore.curry)(function (x, y) {
  return y / x;
});

exports.mod = mod = (0, _fairmontCore.curry)(function (x, y) {
  return y % x === 0;
});

exports.even = even = mod(2);

exports.odd = odd = (0, _fairmontCore.negate)(even);

({ min, max, abs, pow } = Math);

exports.abs = abs;
exports.max = max;
exports.min = min;
exports.eq = eq;
exports.neq = neq;
exports.gt = gt;
exports.lt = lt;
exports.gte = gte;
exports.lte = lte;
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.mod = mod;
exports.even = even;
exports.odd = odd;
exports.min = min;
exports.max = max;
exports.abs = abs;