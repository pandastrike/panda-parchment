"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _amen = require("amen");

var _type = require("../src/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("type helpers", [(0, _amen.test)("prototype", [// isType and isKind relies on prototype
  (0, _amen.test)("isKind", function () {
    var A, B, b;
    A = {
      prototype: {}
    };
    B = {
      prototype: Object.create(A.prototype)
    };
    b = Object.create(B.prototype);
    (0, _assert.default)((0, _type.isKind)(B, b));
    (0, _assert.default)((0, _type.isKind)(A, b));
    return (0, _assert.default)(!(0, _type.isKind)(A, {}));
  }), (0, _amen.test)("isType", [// these are all defined using isType
  (0, _amen.test)("isNumber", function () {
    (0, _assert.default)((0, _type.isNumber)(7));
    (0, _assert.default)(!(0, _type.isNumber)("7"));
    (0, _assert.default)(!(0, _type.isNumber)(false));
    return (0, _assert.default)(_type.isNumber.length === 1);
  }), (0, _amen.test)("isBoolean", function () {
    (0, _assert.default)((0, _type.isBoolean)(true));
    return (0, _assert.default)(!(0, _type.isBoolean)(7));
  }), (0, _amen.test)("isDate", function () {
    (0, _assert.default)((0, _type.isDate)(new Date()));
    return (0, _assert.default)(!(0, _type.isDate)(7));
  }), (0, _amen.test)("isRegExp", function () {
    (0, _assert.default)((0, _type.isRegExp)(/\s/));
    return (0, _assert.default)(!(0, _type.isRegExp)(7));
  }), (0, _amen.test)("isString", function () {
    (0, _assert.default)((0, _type.isString)("x"));
    return (0, _assert.default)(!(0, _type.isString)(7));
  }), (0, _amen.test)("isBuffer", function () {
    return (0, _assert.default)((0, _type.isBuffer)(Buffer.from("hello")));
  }), (0, _amen.test)("isFunction", function () {
    (0, _assert.default)((0, _type.isFunction)(function () {}));
    (0, _assert.default)(!(0, _type.isFunction)(7));
    return (0, _assert.default)(_type.isFunction.length === 1);
  }), (0, _amen.test)("isObject", function () {
    (0, _assert.default)((0, _type.isObject)({}));
    return (0, _assert.default)(!(0, _type.isObject)(7));
  }), (0, _amen.test)("isArray", function () {
    (0, _assert.default)((0, _type.isArray)([]));
    return (0, _assert.default)(!(0, _type.isArray)(7));
  }), (0, _amen.test)("isNaN"), (0, _amen.test)("isFinite"), (0, _amen.test)("isInteger", function () {
    (0, _assert.default)((0, _type.isInteger)(5));
    (0, _assert.default)(!(0, _type.isInteger)(3.5));
    (0, _assert.default)(!(0, _type.isInteger)("5"));
    return (0, _assert.default)(!(0, _type.isInteger)(0 / 0));
  }), (0, _amen.test)("isFloat", function () {
    (0, _assert.default)((0, _type.isFloat)(3.5));
    (0, _assert.default)(!(0, _type.isFloat)(5));
    (0, _assert.default)(!(0, _type.isFloat)("3.5"));
    return (0, _assert.default)(!(0, _type.isFloat)(0 / 0));
  }), (0, _amen.test)("isDefined", function () {
    (0, _assert.default)((0, _type.isDefined)({}));
    return (0, _assert.default)(!(0, _type.isDefined)(void 0));
  }), (0, _amen.test)("isGeneratorFunction", function () {
    var f;

    f = function* () {
      return yield true;
    };

    return (0, _assert.default)((0, _type.isGeneratorFunction)(f));
  }), (0, _amen.test)("isAsyncFunction", function () {
    var f;

    f = async function () {
      return await true;
    };

    return (0, _assert.default)((0, _type.isAsyncFunction)(f));
  })]), (0, _amen.test)("Type", function () {
    var A, B, b;
    A = _type.Type.define();
    B = _type.Type.define(A);
    b = _type.Type.create(B);
    return [(0, _amen.test)("isType", function () {
      return (0, _assert.default)((0, _type.isType)(B, b));
    }), (0, _amen.test)("isKind", function () {
      return (0, _assert.default)((0, _type.isKind)(A, b));
    })];
  }()), (0, _amen.test)("isEmpty", function () {
    (0, _assert.default)((0, _type.isEmpty)(""));
    (0, _assert.default)(!(0, _type.isEmpty)(" "));
    (0, _assert.default)((0, _type.isEmpty)([]));
    (0, _assert.default)(!(0, _type.isEmpty)([0]));
    (0, _assert.default)((0, _type.isEmpty)(new Map()));
    (0, _assert.default)(!(0, _type.isEmpty)(new Map([["x", 1]])));
    (0, _assert.default)((0, _type.isEmpty)(new Set()));
    return (0, _assert.default)(!(0, _type.isEmpty)(new Set([0])));
  })])])));
})();
//# sourceMappingURL=data:application/json;base64,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QUFBLENBQUEsRUFBUCxDQUFPLENBQVAsQztBQUZKLEtBQ0UsQ0FERixFQUlFLGdCQUFBLFFBQUEsRUFBZSxZQUFBO2FBQ2IscUJBQU8sa0JBQUEsQ0FBQSxFQUFQLENBQU8sQ0FBUCxDO0FBTEosS0FJRSxDQUpGLEM7QUF2RmdCLEdBa0ZGLEVBQWhCLENBbEZrQixFQStGbEIsZ0JBQUEsU0FBQSxFQUFnQixZQUFBO0FBQ2QseUJBQU8sbUJBQVAsRUFBTyxDQUFQO0FBQ0EseUJBQU8sQ0FBRSxtQkFBVCxHQUFTLENBQVQ7QUFDQSx5QkFBTyxtQkFBUCxFQUFPLENBQVA7QUFDQSx5QkFBTyxDQUFFLG1CQUFRLENBQWpCLENBQWlCLENBQVIsQ0FBVDtBQUNBLHlCQUFPLG1CQUFRLElBQWYsR0FBZSxFQUFSLENBQVA7QUFDQSx5QkFBTyxDQUFFLG1CQUFRLElBQUEsR0FBQSxDQUFRLENBQUMsQ0FBQSxHQUFBLEVBQTFCLENBQTBCLENBQUQsQ0FBUixDQUFSLENBQVQ7QUFDQSx5QkFBTyxtQkFBUSxJQUFmLEdBQWUsRUFBUixDQUFQO1dBQ0EscUJBQU8sQ0FBRSxtQkFBUSxJQUFBLEdBQUEsQ0FBUSxDQUF6QixDQUF5QixDQUFSLENBQVIsQ0FBVCxDO0FBdkdnQixHQStGbEIsQ0EvRmtCLENBQWxCLENBRitCLENBQXJCLENBQVosRTtBQUZGLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3Byb3RvdHlwZSwgaXNUeXBlLCBpc0tpbmQsXG4gICAgaXNCb29sZWFuLCBpc051bWJlciwgaXNOYU4sIGlzRmluaXRlLCBpc0ludGVnZXIsIGlzRmxvYXQsXG4gICAgaXNTdHJpbmcsIGlzQnVmZmVyLCBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNBcnJheSxcbiAgICBpc1JlZ0V4cCwgaXNEYXRlLCBpc0RlZmluZWQsIGlzR2VuZXJhdG9yRnVuY3Rpb24sIGlzUHJvbWlzZSxcbiAgICBpc0FzeW5jRnVuY3Rpb24sIFR5cGUsIGluc3RhbmNlT2YsIGlzRW1wdHl9IGZyb20gXCIuLi9zcmMvdHlwZVwiXG5cbmRvIC0+XG5cbiAgcHJpbnQgYXdhaXQgdGVzdCBcInR5cGUgaGVscGVyc1wiLCBbXG5cbiAgICB0ZXN0IFwicHJvdG90eXBlXCIsIFtcblxuICAgICAgIyBpc1R5cGUgYW5kIGlzS2luZCByZWxpZXMgb24gcHJvdG90eXBlXG5cbiAgICAgIHRlc3QgXCJpc0tpbmRcIiwgLT5cbiAgICAgICAgQSA9IHByb3RvdHlwZToge31cbiAgICAgICAgQiA9IHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZSBBLnByb3RvdHlwZVxuICAgICAgICBiID0gT2JqZWN0LmNyZWF0ZSBCLnByb3RvdHlwZVxuICAgICAgICBhc3NlcnQgaXNLaW5kIEIsIGJcbiAgICAgICAgYXNzZXJ0IGlzS2luZCBBLCBiXG4gICAgICAgIGFzc2VydCAhKGlzS2luZCBBLCB7fSlcblxuICAgICAgdGVzdCBcImlzVHlwZVwiLCBbXG5cbiAgICAgICAgIyB0aGVzZSBhcmUgYWxsIGRlZmluZWQgdXNpbmcgaXNUeXBlXG5cbiAgICAgICAgdGVzdCBcImlzTnVtYmVyXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzTnVtYmVyIDdcbiAgICAgICAgICBhc3NlcnQgISBpc051bWJlciBcIjdcIlxuICAgICAgICAgIGFzc2VydCAhIGlzTnVtYmVyIGZhbHNlXG4gICAgICAgICAgYXNzZXJ0IGlzTnVtYmVyLmxlbmd0aCA9PSAxXG5cbiAgICAgICAgdGVzdCBcImlzQm9vbGVhblwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0Jvb2xlYW4gdHJ1ZVxuICAgICAgICAgIGFzc2VydCAhaXNCb29sZWFuIDdcblxuICAgICAgICB0ZXN0IFwiaXNEYXRlXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzRGF0ZSAobmV3IERhdGUpXG4gICAgICAgICAgYXNzZXJ0ICFpc0RhdGUgN1xuXG4gICAgICAgIHRlc3QgXCJpc1JlZ0V4cFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc1JlZ0V4cCAvXFxzL1xuICAgICAgICAgIGFzc2VydCAhaXNSZWdFeHAgN1xuXG4gICAgICAgIHRlc3QgXCJpc1N0cmluZ1wiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc1N0cmluZyBcInhcIlxuICAgICAgICAgIGFzc2VydCAhaXNTdHJpbmcgN1xuXG4gICAgICAgIHRlc3QgXCJpc0J1ZmZlclwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0J1ZmZlciAoQnVmZmVyLmZyb20gXCJoZWxsb1wiKVxuXG4gICAgICAgIHRlc3QgXCJpc0Z1bmN0aW9uXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzRnVuY3Rpb24gLT5cbiAgICAgICAgICBhc3NlcnQgIWlzRnVuY3Rpb24gN1xuICAgICAgICAgIGFzc2VydCBpc0Z1bmN0aW9uLmxlbmd0aCA9PSAxXG5cbiAgICAgICAgdGVzdCBcImlzT2JqZWN0XCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzT2JqZWN0IHt9XG4gICAgICAgICAgYXNzZXJ0ICFpc09iamVjdCA3XG5cbiAgICAgICAgdGVzdCBcImlzQXJyYXlcIiwgLT5cbiAgICAgICAgICBhc3NlcnQgaXNBcnJheSBbXVxuICAgICAgICAgIGFzc2VydCAhaXNBcnJheSA3XG5cbiAgICAgICAgdGVzdCBcImlzTmFOXCJcbiAgICAgICAgdGVzdCBcImlzRmluaXRlXCJcblxuICAgICAgICB0ZXN0IFwiaXNJbnRlZ2VyXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzSW50ZWdlciA1XG4gICAgICAgICAgYXNzZXJ0ICEgaXNJbnRlZ2VyIDMuNVxuICAgICAgICAgIGFzc2VydCAhIGlzSW50ZWdlciBcIjVcIlxuICAgICAgICAgIGFzc2VydCAhIGlzSW50ZWdlciBOYU5cblxuICAgICAgICB0ZXN0IFwiaXNGbG9hdFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0Zsb2F0IDMuNVxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgNVxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgXCIzLjVcIlxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgTmFOXG5cbiAgICAgICAgdGVzdCBcImlzRGVmaW5lZFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0RlZmluZWQge31cbiAgICAgICAgICBhc3NlcnQgIWlzRGVmaW5lZCB1bmRlZmluZWRcblxuICAgICAgICB0ZXN0IFwiaXNHZW5lcmF0b3JGdW5jdGlvblwiLCAtPlxuICAgICAgICAgIGYgPSAtPiB5aWVsZCB0cnVlXG4gICAgICAgICAgYXNzZXJ0IGlzR2VuZXJhdG9yRnVuY3Rpb24gZlxuXG4gICAgICAgIHRlc3QgXCJpc0FzeW5jRnVuY3Rpb25cIiwgLT5cbiAgICAgICAgICBmID0gLT4gYXdhaXQgdHJ1ZVxuICAgICAgICAgIGFzc2VydCBpc0FzeW5jRnVuY3Rpb24gZlxuICAgICAgXVxuXG4gICAgdGVzdCBcIlR5cGVcIiwgZG8gLT5cblxuICAgICAgQSA9IFR5cGUuZGVmaW5lKClcbiAgICAgIEIgPSBUeXBlLmRlZmluZSBBXG4gICAgICBiID0gVHlwZS5jcmVhdGUgQlxuICAgICAgW1xuICAgICAgICB0ZXN0IFwiaXNUeXBlXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzVHlwZSBCLCBiXG5cbiAgICAgICAgdGVzdCBcImlzS2luZFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0tpbmQgQSwgYlxuICAgICAgXVxuXG4gICAgdGVzdCBcImlzRW1wdHlcIiwgLT5cbiAgICAgIGFzc2VydCBpc0VtcHR5IFwiXCJcbiAgICAgIGFzc2VydCAhIGlzRW1wdHkgXCIgXCJcbiAgICAgIGFzc2VydCBpc0VtcHR5IFtdXG4gICAgICBhc3NlcnQgISBpc0VtcHR5IFsgMCBdXG4gICAgICBhc3NlcnQgaXNFbXB0eSBuZXcgTWFwXG4gICAgICBhc3NlcnQgISBpc0VtcHR5IG5ldyBNYXAgW1sgXCJ4XCIsIDEgXV1cbiAgICAgIGFzc2VydCBpc0VtcHR5IG5ldyBTZXRcbiAgICAgIGFzc2VydCAhIGlzRW1wdHkgbmV3IFNldCBbIDAgXVxuICBdXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=type.coffee