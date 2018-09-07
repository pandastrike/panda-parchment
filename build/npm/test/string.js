"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _string = require("../src/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("string helpers", [(0, _amen.test)("toString"), (0, _amen.test)("toUpper"), (0, _amen.test)("toLower"), (0, _amen.test)("plainText", function () {
    (0, _assert2.default)((0, _string.plainText)("hello-world") === "hello world");
    return (0, _assert2.default)((0, _string.plainText)("Hello World") === "hello world");
  }), (0, _amen.test)("capitalize", function () {
    return (0, _assert2.default)((0, _string.capitalize)("hello world") === "Hello world");
  }), (0, _amen.test)("titleCase", function () {
    return (0, _assert2.default)((0, _string.titleCase)("hello woRld") === "Hello World");
  }), (0, _amen.test)("camelCase", function () {
    return (0, _assert2.default)((0, _string.camelCase)("Hello World") === "helloWorld");
  }), (0, _amen.test)("underscored", function () {
    return (0, _assert2.default)((0, _string.underscored)("Hello World") === "hello_world");
  }), (0, _amen.test)("dashed", function () {
    return (0, _assert2.default)((0, _string.dashed)("Hello World") === "hello-world");
  }), (0, _amen.test)("htmlEscape", function () {
    return (0, _assert2.default)((0, _string.htmlEscape)("<a href='foo'>bar & baz</a>") === "&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;");
  }), (0, _amen.test)("trim"), (0, _amen.test)("split"), (0, _amen.test)("w", function () {
    return (0, _assert2.default)((0, _string.w)("one two three").length === 3);
  }), (0, _amen.test)("blank", function () {
    (0, _assert2.default)((0, _string.blank)(""));
    return (0, _assert2.default)(!(0, _string.blank)("x"));
  }), (0, _amen.test)("isMatch", function () {
    return (0, _assert2.default)((0, _string.isMatch)(/foo/, "foobar"));
  }),
  // test "match", ->
  //   assert (isMatch /foo/, "foobar")[0] = "foo"

  (0, _amen.test)("replace", function () {
    return (0, _assert2.default)((0, _string.replace)(/bar/, "baz", "foobar") === "foobaz");
  })])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLEFBQU87Ozs7QUFDUCxBQUFRLEFBQU07O0FBRWQsQUFBUSxBQUFVLEFBQVMsQUFBUyxBQUNsQyxBQUFXLEFBQVcsQUFBYSxBQUFRLEFBQzNDLEFBQVksQUFBRyxBQUFPLEFBQU8sQUFBUzs7OztBQUVyQyxDQUFBOzJCQUVLLHNCQUFNLEFBQUssbUJBRWYsZ0JBRmlDLEFBRWpDLEFBQUssYUFDTCxnQkFIaUMsQUFHakMsQUFBSyxZQUNMLGdCQUppQyxBQUlqQyxBQUFLLDRCQUVMLEFBQUssYUFBYTtBQUNoQiwwQkFBTyx1QkFBQSxBQUFVLG1CQUFqQixBQUFtQztXQUNuQyxzQkFBTyx1QkFBQSxBQUFVLG1CQUZELEFBRWhCLEFBQW1DO0FBUkosQUFNakMsR0FBQSxDQU5pQyxrQkFVakMsQUFBSyxjQUFjO1dBQ2pCLHNCQUFPLHdCQUFBLEFBQVksbUJBREYsQUFDakIsQUFBc0M7QUFYUCxBQVVqQyxHQUFBLG1CQUdBLEFBQUssYUFBYTtXQUNoQixzQkFBTyx1QkFBQSxBQUFXLG1CQURGLEFBQ2hCLEFBQXFDO0FBZE4sQUFhakMsR0FBQSxtQkFHQSxBQUFLLGFBQWE7V0FDaEIsc0JBQU8sdUJBQUEsQUFBVyxtQkFERixBQUNoQixBQUFxQztBQWpCTixBQWdCakMsR0FBQSxtQkFHQSxBQUFLLGVBQWU7V0FDbEIsc0JBQU8seUJBQUEsQUFBYSxtQkFERixBQUNsQixBQUF1QztBQXBCUixBQW1CakMsR0FBQSxtQkFHQSxBQUFLLFVBQVU7V0FDYixzQkFBTyxvQkFBQSxBQUFRLG1CQURGLEFBQ2IsQUFBa0M7QUF2QkgsQUFzQmpDLEdBQUEsbUJBR0EsQUFBSyxjQUFjO1dBQ2pCLHNCQUFPLHdCQUFBLEFBQVksbUNBREYsQUFDakIsQUFDRTtBQTNCNkIsQUF5QmpDLEdBQUEsR0FJQSxnQkE3QmlDLEFBNkJqQyxBQUFLLFNBRUwsZ0JBL0JpQyxBQStCakMsQUFBSywwQkFFTCxBQUFLLEtBQUs7V0FBRyxzQkFBUSxlQUFELEFBQUMsQUFBRSxBQUFnQixnQkFBbkIsQ0FBQSxBQUFvQixXQUE5QixBQUFHLEFBQXFDO0FBakNqQixBQWlDakMsR0FBQSxtQkFFQSxBQUFLLFNBQVM7QUFDWiwwQkFBTyxtQkFBUCxBQUFPLEFBQU07V0FDYixzQkFBTyxDQUFDLG1CQUZJLEFBRVosQUFBUSxBQUFNO0FBckNpQixBQW1DakMsR0FBQSxtQkFJQSxBQUFLLFdBQVc7V0FDZCxzQkFBUSxxQkFBQSxBQUFRLE9BREYsQUFDZCxBQUFRLEFBQWU7QUF4Q1EsQUF1Q2pDLEdBQUE7Ozs7QUFNQSxrQkFBQSxBQUFLLFdBQVc7V0FDZCxzQkFBUSxxQkFBQSxBQUFRLE9BQVIsQUFBZSxPQUFoQixBQUFDLEFBQXNCLFNBQXZCLEtBRE8sQUFDZCxBQUEyQztBQWhEOUMsQUFFRCxBQUFNLEFBQU0sQUFBdUIsQUE2Q2pDLEtBN0NVLENBQVosQUFBTTtBQUZSLEFBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3RvU3RyaW5nLCB0b1VwcGVyLCB0b0xvd2VyLCBjYXBpdGFsaXplLFxuICB0aXRsZUNhc2UsIGNhbWVsQ2FzZSwgdW5kZXJzY29yZWQsIGRhc2hlZCwgcGxhaW5UZXh0LFxuICBodG1sRXNjYXBlLCB3LCBibGFuaywgbWF0Y2gsIGlzTWF0Y2gsIHJlcGxhY2V9IGZyb20gXCIuLi9zcmMvc3RyaW5nXCJcblxuZG8gLT5cblxuICBwcmludCBhd2FpdCB0ZXN0IFwic3RyaW5nIGhlbHBlcnNcIiwgW1xuXG4gICAgdGVzdCBcInRvU3RyaW5nXCJcbiAgICB0ZXN0IFwidG9VcHBlclwiXG4gICAgdGVzdCBcInRvTG93ZXJcIlxuXG4gICAgdGVzdCBcInBsYWluVGV4dFwiLCAtPlxuICAgICAgYXNzZXJ0IHBsYWluVGV4dChcImhlbGxvLXdvcmxkXCIpID09IFwiaGVsbG8gd29ybGRcIlxuICAgICAgYXNzZXJ0IHBsYWluVGV4dChcIkhlbGxvIFdvcmxkXCIpID09IFwiaGVsbG8gd29ybGRcIlxuXG4gICAgdGVzdCBcImNhcGl0YWxpemVcIiwgLT5cbiAgICAgIGFzc2VydCBjYXBpdGFsaXplKCBcImhlbGxvIHdvcmxkXCIgKSA9PSBcIkhlbGxvIHdvcmxkXCJcblxuICAgIHRlc3QgXCJ0aXRsZUNhc2VcIiwgLT5cbiAgICAgIGFzc2VydCB0aXRsZUNhc2UoIFwiaGVsbG8gd29SbGRcIiApID09IFwiSGVsbG8gV29ybGRcIlxuXG4gICAgdGVzdCBcImNhbWVsQ2FzZVwiLCAtPlxuICAgICAgYXNzZXJ0IGNhbWVsQ2FzZSggXCJIZWxsbyBXb3JsZFwiICkgPT0gXCJoZWxsb1dvcmxkXCJcblxuICAgIHRlc3QgXCJ1bmRlcnNjb3JlZFwiLCAtPlxuICAgICAgYXNzZXJ0IHVuZGVyc2NvcmVkKCBcIkhlbGxvIFdvcmxkXCIgKSA9PSBcImhlbGxvX3dvcmxkXCJcblxuICAgIHRlc3QgXCJkYXNoZWRcIiwgLT5cbiAgICAgIGFzc2VydCBkYXNoZWQoIFwiSGVsbG8gV29ybGRcIiApID09IFwiaGVsbG8td29ybGRcIlxuXG4gICAgdGVzdCBcImh0bWxFc2NhcGVcIiwgLT5cbiAgICAgIGFzc2VydCBodG1sRXNjYXBlKCBcIjxhIGhyZWY9J2Zvbyc+YmFyICYgYmF6PC9hPlwiICkgPT1cbiAgICAgICAgXCImbHQ7YSBocmVmPSYjMzk7Zm9vJiMzOTsmZ3Q7YmFyICZhbXA7IGJheiZsdDsmI3gyRjthJmd0O1wiXG5cbiAgICB0ZXN0IFwidHJpbVwiXG5cbiAgICB0ZXN0IFwic3BsaXRcIlxuXG4gICAgdGVzdCBcIndcIiwgLT4gYXNzZXJ0ICh3IFwib25lIHR3byB0aHJlZVwiKS5sZW5ndGggPT0gM1xuXG4gICAgdGVzdCBcImJsYW5rXCIsIC0+XG4gICAgICBhc3NlcnQgYmxhbmsgXCJcIlxuICAgICAgYXNzZXJ0ICFibGFuayBcInhcIlxuXG4gICAgdGVzdCBcImlzTWF0Y2hcIiwgLT5cbiAgICAgIGFzc2VydCAoaXNNYXRjaCAvZm9vLywgXCJmb29iYXJcIilcblxuICAgICMgdGVzdCBcIm1hdGNoXCIsIC0+XG4gICAgIyAgIGFzc2VydCAoaXNNYXRjaCAvZm9vLywgXCJmb29iYXJcIilbMF0gPSBcImZvb1wiXG4gICAgI1xuICAgIHRlc3QgXCJyZXBsYWNlXCIsIC0+XG4gICAgICBhc3NlcnQgKHJlcGxhY2UgL2Jhci8sIFwiYmF6XCIsIFwiZm9vYmFyXCIpID09IFwiZm9vYmF6XCJcblxuXVxuIl19
//# sourceURL=string.coffee