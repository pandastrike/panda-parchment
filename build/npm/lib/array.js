"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pair = exports.pluck = exports.range = exports.shuffle = exports.fill = exports.join = exports.slice = exports.cat = exports.remove = exports.insert = exports.splice = exports.dequeue = exports.enqueue = exports.unshift = exports.shift = exports.pop = exports.push = exports.complement = exports.difference = exports.intersection = exports.union = exports.dupes = exports.uniq = exports.unique = exports.uniqueBy = exports.findLastIndexOf = exports.findIndexOf = exports.includes = exports.empty = exports.rest = exports.last = exports.nth = exports.fifth = exports.fourth = exports.third = exports.second = exports.first = undefined;

var _fairmontCore = require("fairmont-core");

var _object = require("./object");

var cat,
    complement,
    dequeue,
    difference,
    dupes,
    empty,
    enqueue,
    fifth,
    fill,
    findIndexOf,
    findLastIndexOf,
    first,
    fourth,
    includes,
    insert,
    intersection,
    join,
    last,
    nth,
    pair,
    pluck,
    pop,
    push,
    random,
    range,
    remove,
    rest,
    round,
    second,
    shift,
    shuffle,
    slice,
    some,
    sort,
    splice,
    third,
    union,
    uniq,
    unique,
    uniqueBy,
    unshift,
    slice1 = [].slice,
    indexOf = [].indexOf;

exports.nth = nth = (0, _fairmontCore.curry)(function (i, ax) {
  return ax[i - 1];
});

exports.first = first = nth(1);

exports.second = second = nth(2);

exports.third = third = nth(3);

exports.fourth = fourth = nth(4);

exports.fifth = fifth = nth(5);

exports.last = last = function (arg) {
  var arg, k, last, rest;
  rest = 2 <= arg.length ? slice1.call(arg, 0, k = arg.length - 1) : (k = 0, []), last = arg[k++];
  return last;
};

exports.rest = rest = function ([first, ...rest]) {
  return rest;
};

// array only version of empty, not exported
exports.empty = empty = function (x) {
  return x.length === 0;
};

exports.includes = includes = Array.prototype.includes ? (0, _fairmontCore.curry)(function (a, ax) {
  return ax.includes(a);
}) : (0, _fairmontCore.curry)(function (a, ax) {
  return ax.indexOf(a) !== -1;
});

// find and findLast are defined in reactive
// with specializations for array

// curryable index variations that can use ? operator or equivalent
// ex: if (i = findIndexOf ax, a)? then ...
exports.findIndexOf = findIndexOf = (0, _fairmontCore.curry)(function (a, ax) {
  var i;
  if ((i = ax.indexOf(a)) !== -1) {
    return i;
  }
});

exports.findLastIndexOf = findLastIndexOf = (0, _fairmontCore.curry)(function (a, ax) {
  var i;
  if ((i = ax.lastIndexOf(a)) !== -1) {
    return i;
  }
});

// reactive `any` is preferred but `some` is faster
some = (0, _fairmontCore.curry)((0, _fairmontCore.binary)((0, _object.detach)(Array.prototype.some)));

// Array mutators
exports.push = push = (0, _fairmontCore.curry)(function (ax, ...a) {
  ax.push(...a);
  return ax;
});

exports.pop = pop = (0, _object.detach)(Array.prototype.pop);

exports.shift = shift = (0, _object.detach)(Array.prototype.shift);

exports.unshift = unshift = (0, _object.detach)(Array.prototype.unshift);

exports.enqueue = enqueue = unshift;

exports.dequeue = dequeue = pop;

// true splice without weird insertion option
// or compose-breaking return value
exports.splice = splice = (0, _fairmontCore.curry)(function (i, n, ax) {
  ax.splice(i, n);
  return ax;
});

exports.insert = insert = (0, _fairmontCore.curry)((0, _fairmontCore.ternary)(function (ax, a, i) {
  ax.splice(i, 0, a);
  return ax;
}));

exports.remove = remove = (0, _fairmontCore.curry)(function (ax, a) {
  var i;
  if ((i = ax.indexOf(a)) !== -1) {
    ax.splice(i, 1);
  }
  return ax;
});

exports.cat = cat = (0, _object.detach)(Array.prototype.concat);

exports.slice = slice = (0, _fairmontCore.curry)(function (i, j, ax) {
  return ax.slice(i, j);
});

sort = (0, _fairmontCore.curry)((0, _fairmontCore.binary)((0, _object.detach)(Array.prototype.sort)));

exports.join = join = (0, _fairmontCore.curry)((0, _fairmontCore.binary)((0, _object.detach)(Array.prototype.join)));

exports.fill = fill = (0, _fairmontCore.curry)(function (ax, a) {
  return ax.fill(a);
});

// Set operations...

// TODO: some of these could be implemented in terms of producers
exports.uniqueBy = uniqueBy = (0, _fairmontCore.curry)(function (f, ax) {
  var a, b, bx, k, len;
  bx = [];
  for (k = 0, len = ax.length; k < len; k++) {
    a = ax[k];
    b = f(a);
    if (indexOf.call(bx, b) < 0) {
      bx.push(b);
    }
  }
  return bx;
});

exports.unique = unique = exports.uniq = uniq = function (ax) {
  return Array.from(new Set(ax));
};

exports.dupes = dupes = function ([a, ...ax]) {
  var bx;
  if (empty(ax)) {
    return [];
  } else {
    bx = dupes(ax);
    if (indexOf.call(ax, a) >= 0 && !(indexOf.call(bx, a) >= 0)) {
      return [a, ...bx];
    } else {
      return bx;
    }
  }
};

exports.union = union = (0, _fairmontCore.curry)((0, _fairmontCore.compose)(unique, cat));

exports.intersection = intersection = function (first, ...rest) {
  var k, len, ref, results, x;
  if (empty(rest)) {
    return first;
  } else {
    ref = intersection(...rest);
    results = [];
    for (k = 0, len = ref.length; k < len; k++) {
      x = ref[k];
      if (indexOf.call(first, x) >= 0) {
        results.push(x);
      }
    }
    return results;
  }
};

exports.difference = difference = (0, _fairmontCore.curry)(function (ax, bx) {
  var cx;
  cx = union(ax, bx);
  return cx.filter(function (c) {
    return indexOf.call(ax, c) >= 0 && !(indexOf.call(bx, c) >= 0) || indexOf.call(bx, c) >= 0 && !(indexOf.call(ax, c) >= 0);
  });
});

exports.complement = complement = (0, _fairmontCore.curry)(function (ax, bx) {
  return ax.filter(function (c) {
    return !(indexOf.call(bx, c) >= 0);
  });
});

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

exports.shuffle = shuffle = function (ax) {
  var bx, i, j;
  bx = cat(ax);
  i = bx.length;
  if (!(i <= 1)) {
    while (--i > 0) {
      // the distinguishing characteristic of fisher-yates is that the random
      // value generated is bounded by the iterator index (Math.random() * i)
      // instead of the size of the array (Math.random() * bx.length)
      j = Math.floor(Math.random() * (i + 1));
      [bx[i], bx[j]] = [bx[j], bx[i]];
    }
    if (deepEqual(ax, bx)) {
      return shuffle(ax);
    } else {
      return bx;
    }
  } else {
    return bx;
  }
};

exports.range = range = (0, _fairmontCore.curry)(function (start, finish) {
  var k, results;
  return function () {
    results = [];
    for (var k = start; start <= finish ? k <= finish : k >= finish; start <= finish ? k++ : k--) {
      results.push(k);
    }
    return results;
  }.apply(this);
});

({ random, round } = Math);

exports.pluck = pluck = function (ax) {
  return ax[round(random() * (ax.length - 1))];
};

exports.pair = pair = (0, _fairmontCore.curry)(function (a, b) {
  return [a, b];
});

exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
exports.nth = nth;
exports.last = last;
exports.rest = rest;
exports.empty = empty;
exports.includes = includes;
exports.findIndexOf = findIndexOf;
exports.findLastIndexOf = findLastIndexOf;
exports.uniqueBy = uniqueBy;
exports.unique = unique;
exports.uniq = uniq;
exports.dupes = dupes;
exports.union = union;
exports.intersection = intersection;
exports.difference = difference;
exports.complement = complement;
exports.push = push;
exports.pop = pop;
exports.shift = shift;
exports.unshift = unshift;
exports.enqueue = enqueue;
exports.dequeue = dequeue;
exports.splice = splice;
exports.insert = insert;
exports.remove = remove;
exports.cat = cat;
exports.slice = slice;
exports.join = join;
exports.fill = fill;
exports.shuffle = shuffle;
exports.range = range;
exports.pluck = pluck;
exports.pair = pair;