"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _amen = require("amen");

var _string = require("../src/string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("string helpers", [(0, _amen.test)("toString"), (0, _amen.test)("toUpper"), (0, _amen.test)("toLower"), (0, _amen.test)("plainText", function () {
    (0, _assert.default)((0, _string.plainText)("hello-world") === "hello world");
    return (0, _assert.default)((0, _string.plainText)("Hello World") === "hello world");
  }), (0, _amen.test)("capitalize", function () {
    return (0, _assert.default)((0, _string.capitalize)("hello world") === "Hello world");
  }), (0, _amen.test)("titleCase", function () {
    return (0, _assert.default)((0, _string.titleCase)("hello woRld") === "Hello World");
  }), (0, _amen.test)("camelCase", function () {
    return (0, _assert.default)((0, _string.camelCase)("Hello World") === "helloWorld");
  }), (0, _amen.test)("underscored", function () {
    return (0, _assert.default)((0, _string.underscored)("Hello World") === "hello_world");
  }), (0, _amen.test)("dashed", function () {
    return (0, _assert.default)((0, _string.dashed)("Hello World") === "hello-world");
  }), (0, _amen.test)("htmlEscape", function () {
    return (0, _assert.default)((0, _string.htmlEscape)("<a href='foo'>bar & baz</a>") === "&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;");
  }), (0, _amen.test)("trim"), (0, _amen.test)("split"), (0, _amen.test)("w", function () {
    return (0, _assert.default)((0, _string.w)("one two three").length === 3);
  }), (0, _amen.test)("blank", function () {
    (0, _assert.default)((0, _string.blank)(""));
    return (0, _assert.default)(!(0, _string.blank)("x"));
  }), (0, _amen.test)("isMatch", function () {
    return (0, _assert.default)((0, _string.isMatch)(/foo/, "foobar"));
  }), // test "match", ->
  //   assert (isMatch /foo/, "foobar")[0] = "foo"
  (0, _amen.test)("replace", function () {
    return (0, _assert.default)((0, _string.replace)(/bar/, "baz", "foobar") === "foobaz");
  })])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUlHLENBQUEsa0JBQUE7U0FFRCxrQkFBTSxNQUFNLGdCQUFBLGdCQUFBLEVBQXVCLENBRWpDLGdCQUZpQyxVQUVqQyxDQUZpQyxFQUdqQyxnQkFIaUMsU0FHakMsQ0FIaUMsRUFJakMsZ0JBSmlDLFNBSWpDLENBSmlDLEVBTWpDLGdCQUFBLFdBQUEsRUFBa0IsWUFBQTtBQUNoQix5QkFBTyx1QkFBQSxhQUFBLE1BQVAsYUFBQTtXQUNBLHFCQUFPLHVCQUFBLGFBQUEsTUFBUCxhQUFBLEM7QUFSK0IsR0FNakMsQ0FOaUMsRUFVakMsZ0JBQUEsWUFBQSxFQUFtQixZQUFBO1dBQ2pCLHFCQUFPLHdCQUFBLGFBQUEsTUFBUCxhQUFBLEM7QUFYK0IsR0FVakMsQ0FWaUMsRUFhakMsZ0JBQUEsV0FBQSxFQUFrQixZQUFBO1dBQ2hCLHFCQUFPLHVCQUFBLGFBQUEsTUFBUCxhQUFBLEM7QUFkK0IsR0FhakMsQ0FiaUMsRUFnQmpDLGdCQUFBLFdBQUEsRUFBa0IsWUFBQTtXQUNoQixxQkFBTyx1QkFBQSxhQUFBLE1BQVAsWUFBQSxDO0FBakIrQixHQWdCakMsQ0FoQmlDLEVBbUJqQyxnQkFBQSxhQUFBLEVBQW9CLFlBQUE7V0FDbEIscUJBQU8seUJBQUEsYUFBQSxNQUFQLGFBQUEsQztBQXBCK0IsR0FtQmpDLENBbkJpQyxFQXNCakMsZ0JBQUEsUUFBQSxFQUFlLFlBQUE7V0FDYixxQkFBTyxvQkFBQSxhQUFBLE1BQVAsYUFBQSxDO0FBdkIrQixHQXNCakMsQ0F0QmlDLEVBeUJqQyxnQkFBQSxZQUFBLEVBQW1CLFlBQUE7V0FDakIscUJBQU8sd0JBQUEsNkJBQUEsTUFBUCwwREFBQSxDO0FBMUIrQixHQXlCakMsQ0F6QmlDLEVBNkJqQyxnQkE3QmlDLE1BNkJqQyxDQTdCaUMsRUErQmpDLGdCQS9CaUMsT0ErQmpDLENBL0JpQyxFQWlDakMsZ0JBQUEsR0FBQSxFQUFVLFlBQUE7V0FBRyxxQkFBUSxlQUFELGVBQUMsQ0FBRCxDQUFBLE1BQUEsS0FBUCxDQUFBLEM7QUFqQ29CLEdBaUNqQyxDQWpDaUMsRUFtQ2pDLGdCQUFBLE9BQUEsRUFBYyxZQUFBO0FBQ1oseUJBQU8sbUJBQVAsRUFBTyxDQUFQO1dBQ0EscUJBQU8sQ0FBQyxtQkFBUixHQUFRLENBQVIsQztBQXJDK0IsR0FtQ2pDLENBbkNpQyxFQXVDakMsZ0JBQUEsU0FBQSxFQUFnQixZQUFBO1dBQ2QscUJBQVEscUJBQUEsS0FBQSxFQUFSLFFBQVEsQ0FBUixDO0FBeEMrQixHQXVDakMsQ0F2Q2lDLEU7O0FBNkNqQyxrQkFBQSxTQUFBLEVBQWdCLFlBQUE7V0FDZCxxQkFBUSxxQkFBQSxLQUFBLEVBQUEsS0FBQSxFQUFELFFBQUMsQ0FBRCxLQUFQLFFBQUEsQztBQTlDK0IsR0E2Q2pDLENBN0NpQyxDQUF2QixDQUFaLEU7QUFGRixDQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCJcbmltcG9ydCB7dGVzdCwgcHJpbnR9IGZyb20gXCJhbWVuXCJcblxuaW1wb3J0IHt0b1N0cmluZywgdG9VcHBlciwgdG9Mb3dlciwgY2FwaXRhbGl6ZSxcbiAgdGl0bGVDYXNlLCBjYW1lbENhc2UsIHVuZGVyc2NvcmVkLCBkYXNoZWQsIHBsYWluVGV4dCxcbiAgaHRtbEVzY2FwZSwgdywgYmxhbmssIG1hdGNoLCBpc01hdGNoLCByZXBsYWNlfSBmcm9tIFwiLi4vc3JjL3N0cmluZ1wiXG5cbmRvIC0+XG5cbiAgcHJpbnQgYXdhaXQgdGVzdCBcInN0cmluZyBoZWxwZXJzXCIsIFtcblxuICAgIHRlc3QgXCJ0b1N0cmluZ1wiXG4gICAgdGVzdCBcInRvVXBwZXJcIlxuICAgIHRlc3QgXCJ0b0xvd2VyXCJcblxuICAgIHRlc3QgXCJwbGFpblRleHRcIiwgLT5cbiAgICAgIGFzc2VydCBwbGFpblRleHQoXCJoZWxsby13b3JsZFwiKSA9PSBcImhlbGxvIHdvcmxkXCJcbiAgICAgIGFzc2VydCBwbGFpblRleHQoXCJIZWxsbyBXb3JsZFwiKSA9PSBcImhlbGxvIHdvcmxkXCJcblxuICAgIHRlc3QgXCJjYXBpdGFsaXplXCIsIC0+XG4gICAgICBhc3NlcnQgY2FwaXRhbGl6ZSggXCJoZWxsbyB3b3JsZFwiICkgPT0gXCJIZWxsbyB3b3JsZFwiXG5cbiAgICB0ZXN0IFwidGl0bGVDYXNlXCIsIC0+XG4gICAgICBhc3NlcnQgdGl0bGVDYXNlKCBcImhlbGxvIHdvUmxkXCIgKSA9PSBcIkhlbGxvIFdvcmxkXCJcblxuICAgIHRlc3QgXCJjYW1lbENhc2VcIiwgLT5cbiAgICAgIGFzc2VydCBjYW1lbENhc2UoIFwiSGVsbG8gV29ybGRcIiApID09IFwiaGVsbG9Xb3JsZFwiXG5cbiAgICB0ZXN0IFwidW5kZXJzY29yZWRcIiwgLT5cbiAgICAgIGFzc2VydCB1bmRlcnNjb3JlZCggXCJIZWxsbyBXb3JsZFwiICkgPT0gXCJoZWxsb193b3JsZFwiXG5cbiAgICB0ZXN0IFwiZGFzaGVkXCIsIC0+XG4gICAgICBhc3NlcnQgZGFzaGVkKCBcIkhlbGxvIFdvcmxkXCIgKSA9PSBcImhlbGxvLXdvcmxkXCJcblxuICAgIHRlc3QgXCJodG1sRXNjYXBlXCIsIC0+XG4gICAgICBhc3NlcnQgaHRtbEVzY2FwZSggXCI8YSBocmVmPSdmb28nPmJhciAmIGJhejwvYT5cIiApID09XG4gICAgICAgIFwiJmx0O2EgaHJlZj0mIzM5O2ZvbyYjMzk7Jmd0O2JhciAmYW1wOyBiYXombHQ7JiN4MkY7YSZndDtcIlxuXG4gICAgdGVzdCBcInRyaW1cIlxuXG4gICAgdGVzdCBcInNwbGl0XCJcblxuICAgIHRlc3QgXCJ3XCIsIC0+IGFzc2VydCAodyBcIm9uZSB0d28gdGhyZWVcIikubGVuZ3RoID09IDNcblxuICAgIHRlc3QgXCJibGFua1wiLCAtPlxuICAgICAgYXNzZXJ0IGJsYW5rIFwiXCJcbiAgICAgIGFzc2VydCAhYmxhbmsgXCJ4XCJcblxuICAgIHRlc3QgXCJpc01hdGNoXCIsIC0+XG4gICAgICBhc3NlcnQgKGlzTWF0Y2ggL2Zvby8sIFwiZm9vYmFyXCIpXG5cbiAgICAjIHRlc3QgXCJtYXRjaFwiLCAtPlxuICAgICMgICBhc3NlcnQgKGlzTWF0Y2ggL2Zvby8sIFwiZm9vYmFyXCIpWzBdID0gXCJmb29cIlxuICAgICNcbiAgICB0ZXN0IFwicmVwbGFjZVwiLCAtPlxuICAgICAgYXNzZXJ0IChyZXBsYWNlIC9iYXIvLCBcImJhelwiLCBcImZvb2JhclwiKSA9PSBcImZvb2JhelwiXG5cbl1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=string.coffee