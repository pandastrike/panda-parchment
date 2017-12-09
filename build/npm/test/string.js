"use strict";

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var _powerAssert = require("power-assert");

var _powerAssert2 = _interopRequireDefault(_powerAssert);

var _amen = require("amen");

var _string = require("../lib/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("string helpers", [(0, _amen.test)("toString"), (0, _amen.test)("toUpper"), (0, _amen.test)("toLower"), (0, _amen.test)("plainText", function () {
    var _rec = new _powerAssertRecorder(),
        _rec2 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec._expr(_rec._capt(_rec._capt((0, _string.plainText)("hello-world"), "arguments/0/left") === "hello world", "arguments/0"), {
      content: "assert(plainText(\"hello-world\") === \"hello world\")",
      filepath: "string.coffee",
      line: 17
    }));
    return (0, _powerAssert2.default)(_rec2._expr(_rec2._capt(_rec2._capt((0, _string.plainText)("Hello World"), "arguments/0/left") === "hello world", "arguments/0"), {
      content: "assert(plainText(\"Hello World\") === \"hello world\")",
      filepath: "string.coffee",
      line: 18
    }));
  }), (0, _amen.test)("capitalize", function () {
    var _rec3 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec3._expr(_rec3._capt(_rec3._capt((0, _string.capitalize)("hello world"), "arguments/0/left") === "Hello world", "arguments/0"), {
      content: "assert(capitalize(\"hello world\") === \"Hello world\")",
      filepath: "string.coffee",
      line: 21
    }));
  }), (0, _amen.test)("titleCase", function () {
    var _rec4 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec4._expr(_rec4._capt(_rec4._capt((0, _string.titleCase)("hello woRld"), "arguments/0/left") === "Hello World", "arguments/0"), {
      content: "assert(titleCase(\"hello woRld\") === \"Hello World\")",
      filepath: "string.coffee",
      line: 24
    }));
  }), (0, _amen.test)("camelCase", function () {
    var _rec5 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec5._expr(_rec5._capt(_rec5._capt((0, _string.camelCase)("Hello World"), "arguments/0/left") === "helloWorld", "arguments/0"), {
      content: "assert(camelCase(\"Hello World\") === \"helloWorld\")",
      filepath: "string.coffee",
      line: 27
    }));
  }), (0, _amen.test)("underscored", function () {
    var _rec6 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec6._expr(_rec6._capt(_rec6._capt((0, _string.underscored)("Hello World"), "arguments/0/left") === "hello_world", "arguments/0"), {
      content: "assert(underscored(\"Hello World\") === \"hello_world\")",
      filepath: "string.coffee",
      line: 30
    }));
  }), (0, _amen.test)("dashed", function () {
    var _rec7 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec7._expr(_rec7._capt(_rec7._capt((0, _string.dashed)("Hello World"), "arguments/0/left") === "hello-world", "arguments/0"), {
      content: "assert(dashed(\"Hello World\") === \"hello-world\")",
      filepath: "string.coffee",
      line: 33
    }));
  }), (0, _amen.test)("htmlEscape", function () {
    var _rec8 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec8._expr(_rec8._capt(_rec8._capt((0, _string.htmlEscape)("<a href='foo'>bar & baz</a>"), "arguments/0/left") === "&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;", "arguments/0"), {
      content: "assert(htmlEscape(\"<a href='foo'>bar & baz</a>\") === \"&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;\")",
      filepath: "string.coffee",
      line: 36
    }));
  }), (0, _amen.test)("trim"), (0, _amen.test)("split"), (0, _amen.test)("w", function () {
    var _rec9 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec9._expr(_rec9._capt(_rec9._capt(_rec9._capt((0, _string.w)("one two three"), "arguments/0/left/object").length, "arguments/0/left") === 3, "arguments/0"), {
      content: "assert(w(\"one two three\").length === 3)",
      filepath: "string.coffee",
      line: 43
    }));
  }), (0, _amen.test)("blank", function () {
    var _rec10 = new _powerAssertRecorder(),
        _rec11 = new _powerAssertRecorder();

    (0, _powerAssert2.default)(_rec10._expr(_rec10._capt((0, _string.blank)(""), "arguments/0"), {
      content: "assert(blank(\"\"))",
      filepath: "string.coffee",
      line: 46
    }));
    return (0, _powerAssert2.default)(_rec11._expr(_rec11._capt(!_rec11._capt((0, _string.blank)("x"), "arguments/0/argument"), "arguments/0"), {
      content: "assert(!blank(\"x\"))",
      filepath: "string.coffee",
      line: 47
    }));
  }), (0, _amen.test)("isMatch", function () {
    var _rec12 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec12._expr(_rec12._capt((0, _string.isMatch)(/foo/, "foobar"), "arguments/0"), {
      content: "assert(isMatch(/foo/, \"foobar\"))",
      filepath: "string.coffee",
      line: 50
    }));
  }),
  // test "match", ->
  //   assert (isMatch /foo/, "foobar")[0] = "foo"

  (0, _amen.test)("replace", function () {
    var _rec13 = new _powerAssertRecorder();

    return (0, _powerAssert2.default)(_rec13._expr(_rec13._capt(_rec13._capt((0, _string.replace)(/bar/, "baz", "foobar"), "arguments/0/left") === "foobaz", "arguments/0"), {
      content: "assert(replace(/bar/, \"baz\", \"foobar\") === \"foobaz\")",
      filepath: "string.coffee",
      line: 56
    }));
  })])));
})();