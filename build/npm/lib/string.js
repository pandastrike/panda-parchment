"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace = exports.isMatch = exports.match = exports.blank = exports.w = exports.split = exports.htmlEscape = exports.plainText = exports.dashed = exports.underscored = exports.camelCase = exports.titleCase = exports.capitalize = exports.toLower = exports.toUpper = exports.toString = undefined;

var _fairmontCore = require("fairmont-core");

var blank, camelCase, capitalize, dashed, htmlEscape, isMatch, match, plainText, replace, split, titleCase, toLower, toString, toUpper, trim, underscored, w;

exports.toString = toString = function (x) {
  return x.toString();
};

exports.toUpper = toUpper = function (s) {
  return s.toUpperCase();
};

exports.toLower = toLower = function (s) {
  return s.toLowerCase();
};

exports.plainText = plainText = function (string) {
  return string.replace(/^[A-Z]/g, function (c) {
    return c.toLowerCase();
  }).replace(/[A-Z]/g, function (c) {
    return ` ${c.toLowerCase()}`;
  }).replace(/\W+/g, " ");
};

exports.capitalize = capitalize = function (string) {
  return string[0].toUpperCase() + string.slice(1);
};

exports.titleCase = titleCase = function (string) {
  return string.toLowerCase().replace(/^(\w)|\W(\w)/g, function (char) {
    return char.toUpperCase();
  });
};

exports.camelCase = camelCase = function (string) {
  return string.toLowerCase().replace(/(\W+\w)/g, function (string) {
    return string.trim().toUpperCase();
  });
};

exports.underscored = underscored = function (string) {
  return plainText(string).replace(/\W+/g, "_");
};

exports.dashed = dashed = function (string) {
  return plainText(string).replace(/\W+/g, "-");
};

exports.htmlEscape = htmlEscape = function () {
  var entities, map, re;
  map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  entities = Object.keys(map);
  re = new RegExp(`${entities.join('|')}`, "g");
  return function (string) {
    return string.replace(re, function (s) {
      return map[s];
    });
  };
}();

trim = function (s) {
  return s.trim();
};

exports.split = split = (0, _fairmontCore.curry)(function (re, s) {
  return s.split(re);
});

exports.w = w = (0, _fairmontCore.compose)(split(/\s+/), trim);

exports.blank = blank = function (s) {
  return s.constructor === String && s.length === 0;
};

exports.match = match = (0, _fairmontCore.curry)(function (pattern, string) {
  return string.match(pattern);
});

exports.isMatch = isMatch = (0, _fairmontCore.curry)(function (pattern, string) {
  return pattern.test(string);
});

exports.replace = replace = (0, _fairmontCore.curry)(function (pattern, replacement, string) {
  return string.replace(pattern, replacement);
});

exports.toString = toString;
exports.toUpper = toUpper;
exports.toLower = toLower;
exports.capitalize = capitalize;
exports.titleCase = titleCase;
exports.camelCase = camelCase;
exports.underscored = underscored;
exports.dashed = dashed;
exports.plainText = plainText;
exports.htmlEscape = htmlEscape;
exports.split = split;
exports.w = w;
exports.blank = blank;
exports.match = match;
exports.isMatch = isMatch;
exports.replace = replace;