"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromJSON = exports.toJSON = exports.equal = exports.clone = exports.merge = exports.extend = exports.include = exports.assign = exports.query = exports.omit = exports.pick = exports.pairs = exports.values = exports.keys = exports.has = exports.methods = exports.properties = exports.detach = exports.bind = exports.property = undefined;

var _fairmontCore = require("fairmont-core");

var _fairmontMultimethods = require("fairmont-multimethods");

var _type = require("./type");

var assign, bind, cat, clone, detach, equal, extend, fromJSON, has, include, keys, merge, methods, omit, pairs, pick, properties, property, query, toJSON, unique, values;

exports.property = property = (0, _fairmontCore.curry)(function (key, object) {
  return object[key];
});

exports.bind = bind = (0, _fairmontCore.curry)(function (f, x) {
  return f.bind(x);
});

exports.detach = detach = function (f) {
  return (0, _fairmontCore.curry)(function (x, ...args) {
    return f.apply(x, args);
  });
};

exports.properties = properties = function (target, descriptions) {
  var description, name, results;
  results = [];
  for (name in descriptions) {
    description = descriptions[name];
    if (description.enumerable == null) {
      description.enumerable = true;
    }
    if (description.configurable == null) {
      description.configurable = true;
    }
    results.push(Object.defineProperty(target, name, description));
  }
  return results;
};

exports.methods = methods = function (target, definitions) {
  var f, name, results;
  results = [];
  for (name in definitions) {
    f = definitions[name];
    results.push(Object.defineProperty(target, name, {
      value: f,
      configurable: true,
      writeable: true
    }));
  }
  return results;
};

exports.has = has = (0, _fairmontCore.curry)(function (p, x) {
  return x[p] != null;
});

exports.keys = keys = Object.keys;

exports.values = values = function (x) {
  var k, results, v;
  results = [];
  for (k in x) {
    v = x[k];
    results.push(v);
  }
  return results;
};

exports.pairs = pairs = function (x) {
  var k, results, v;
  results = [];
  for (k in x) {
    v = x[k];
    results.push([k, v]);
  }
  return results;
};

exports.pick = pick = (0, _fairmontCore.curry)(function (f, x) {
  var k, r, v;
  r = {};
  for (k in x) {
    v = x[k];
    if (f(k, v)) {
      r[k] = v;
    }
  }
  return r;
});

exports.omit = omit = (0, _fairmontCore.curry)(function (f, x) {
  return pick((0, _fairmontCore.negate)(f), x);
});

exports.query = query = (0, _fairmontCore.curry)(function (example, target) {
  var k, v;
  if ((0, _type.isObject)(example) && (0, _type.isObject)(target)) {
    for (k in example) {
      v = example[k];
      if (!query(v, target[k])) {
        return false;
      }
    }
    return true;
  } else {
    return equal(example, target);
  }
});

exports.include = include = exports.extend = extend = exports.assign = assign = function (target, ...sources) {
  return Object.assign(target, ...sources);
};

exports.merge = merge = function (...objects) {
  return Object.assign({}, ...objects);
};

// Trivial case: return the same value
exports.clone = clone = _fairmontMultimethods.Method.create({
  default: _fairmontCore.identity
});

// TODO: handle additional cases
// See Lodash implemention as a guide
_fairmontMultimethods.Method.define(clone, _type.isObject, function (original) {
  var copy, key;
  copy = new original.constructor();
  // TODO: this doesn't clone non-enumerable properties
  for (key in original) {
    copy[key] = clone(original[key]);
  }
  return copy;
});

// adapted from lodash as an example
_fairmontMultimethods.Method.define(clone, _type.isRegExp, function (flags) {
  return function (original) {
    var copy;
    copy = new original.constructor(original.source, flags.exec(original));
    copy.lastIndex = original.lastIndex;
    return copy;
  };
}(/\w*$/));

// “deep” comparison, when applicable
exports.equal = equal = _fairmontMultimethods.Method.create({
  default: function (a, b) {
    return a === b;
  }
});

// can't use unique and cat from array b/c array
// depends on object (this file) for detach
cat = detach(Array.prototype.concat);

unique = function (ax) {
  return Array.from(new Set(ax));
};

_fairmontMultimethods.Method.define(equal, _type.isObject, _type.isObject, function (a, b) {
  return a === b || function () {
    var j, key, len, ref;
    ref = unique(cat(keys(a), keys(b)));
    for (j = 0, len = ref.length; j < len; j++) {
      key = ref[j];
      if (!equal(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }();
});

_fairmontMultimethods.Method.define(equal, _type.isArray, _type.isArray, function (ax, bx) {
  return ax === bx || function () {
    var i, j, ref;
    if (ax.length !== bx.length) {
      return false;
    }
    for (i = j = 0, ref = ax.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      if (!equal(ax[i], bx[i])) {
        return false;
      }
    }
    return true;
  }();
});

exports.toJSON = toJSON = function (x, pretty = false) {
  if (pretty) {
    return JSON.stringify(x, null, 2);
  } else {
    return JSON.stringify(x);
  }
};

exports.fromJSON = fromJSON = JSON.parse;

exports.property = property;
exports.bind = bind;
exports.detach = detach;
exports.properties = properties;
exports.methods = methods;
exports.has = has;
exports.keys = keys;
exports.values = values;
exports.pairs = pairs;
exports.pick = pick;
exports.omit = omit;
exports.query = query;
exports.assign = assign;
exports.include = include;
exports.extend = extend;
exports.merge = merge;
exports.clone = clone;
exports.equal = equal;
exports.toJSON = toJSON;
exports.fromJSON = fromJSON;