"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _type = require("../src/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("type helpers", [(0, _amen.test)("prototype", [
  // isType and isKind relies on prototype
  (0, _amen.test)("isKind", function () {
    var A, B, b;
    A = {
      prototype: {}
    };
    B = {
      prototype: Object.create(A.prototype)
    };
    b = Object.create(B.prototype);
    (0, _assert2.default)((0, _type.isKind)(B, b));
    (0, _assert2.default)((0, _type.isKind)(A, b));
    return (0, _assert2.default)(!(0, _type.isKind)(A, {}));
  }), (0, _amen.test)("isType", [
  // these are all defined using isType
  (0, _amen.test)("isNumber", function () {
    (0, _assert2.default)((0, _type.isNumber)(7));
    (0, _assert2.default)(!(0, _type.isNumber)("7"));
    (0, _assert2.default)(!(0, _type.isNumber)(false));
    return (0, _assert2.default)(_type.isNumber.length === 1);
  }), (0, _amen.test)("isBoolean", function () {
    (0, _assert2.default)((0, _type.isBoolean)(true));
    return (0, _assert2.default)(!(0, _type.isBoolean)(7));
  }), (0, _amen.test)("isDate", function () {
    (0, _assert2.default)((0, _type.isDate)(new Date()));
    return (0, _assert2.default)(!(0, _type.isDate)(7));
  }), (0, _amen.test)("isRegExp", function () {
    (0, _assert2.default)((0, _type.isRegExp)(/\s/));
    return (0, _assert2.default)(!(0, _type.isRegExp)(7));
  }), (0, _amen.test)("isString", function () {
    (0, _assert2.default)((0, _type.isString)("x"));
    return (0, _assert2.default)(!(0, _type.isString)(7));
  }), (0, _amen.test)("isBuffer", function () {
    return (0, _assert2.default)((0, _type.isBuffer)(Buffer.from("hello")));
  }), (0, _amen.test)("isFunction", function () {
    (0, _assert2.default)((0, _type.isFunction)(function () {}));
    (0, _assert2.default)(!(0, _type.isFunction)(7));
    return (0, _assert2.default)(_type.isFunction.length === 1);
  }), (0, _amen.test)("isObject", function () {
    (0, _assert2.default)((0, _type.isObject)({}));
    return (0, _assert2.default)(!(0, _type.isObject)(7));
  }), (0, _amen.test)("isArray", function () {
    (0, _assert2.default)((0, _type.isArray)([]));
    return (0, _assert2.default)(!(0, _type.isArray)(7));
  }), (0, _amen.test)("isNaN"), (0, _amen.test)("isFinite"), (0, _amen.test)("isInteger", function () {
    (0, _assert2.default)((0, _type.isInteger)(5));
    (0, _assert2.default)(!(0, _type.isInteger)(3.5));
    (0, _assert2.default)(!(0, _type.isInteger)("5"));
    return (0, _assert2.default)(!(0, _type.isInteger)(0 / 0));
  }), (0, _amen.test)("isFloat", function () {
    (0, _assert2.default)((0, _type.isFloat)(3.5));
    (0, _assert2.default)(!(0, _type.isFloat)(5));
    (0, _assert2.default)(!(0, _type.isFloat)("3.5"));
    return (0, _assert2.default)(!(0, _type.isFloat)(0 / 0));
  }), (0, _amen.test)("isDefined", function () {
    (0, _assert2.default)((0, _type.isDefined)({}));
    return (0, _assert2.default)(!(0, _type.isDefined)(void 0));
  }), (0, _amen.test)("isGeneratorFunction", function () {
    var f;
    f = function* () {
      return yield true;
    };
    return (0, _assert2.default)((0, _type.isGeneratorFunction)(f));
  }), (0, _amen.test)("isAsyncFunction", function () {
    var f;
    f = async function () {
      return await true;
    };
    return (0, _assert2.default)((0, _type.isAsyncFunction)(f));
  })]), (0, _amen.test)("Type", function () {
    var A, B, b;
    A = _type.Type.define();
    B = _type.Type.define(A);
    b = _type.Type.create(B);
    return [(0, _amen.test)("isType", function () {
      return (0, _assert2.default)((0, _type.isType)(B, b));
    }), (0, _amen.test)("isKind", function () {
      return (0, _assert2.default)((0, _type.isKind)(A, b));
    })];
  }()), (0, _amen.test)("isEmpty", function () {
    (0, _assert2.default)((0, _type.isEmpty)(""));
    (0, _assert2.default)(!(0, _type.isEmpty)(" "));
    (0, _assert2.default)((0, _type.isEmpty)([]));
    (0, _assert2.default)(!(0, _type.isEmpty)([0]));
    (0, _assert2.default)((0, _type.isEmpty)(new Map()));
    (0, _assert2.default)(!(0, _type.isEmpty)(new Map([["x", 1]])));
    (0, _assert2.default)((0, _type.isEmpty)(new Set()));
    return (0, _assert2.default)(!(0, _type.isEmpty)(new Set([0])));
  })])])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHlwZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNOztBQUVkLEFBQVEsQUFBVyxBQUFRLEFBQ3ZCLEFBQVcsQUFBVSxBQUFPLEFBQVUsQUFBVyxBQUNqRCxBQUFVLEFBQVUsQUFBWSxBQUFVLEFBQzFDLEFBQVUsQUFBUSxBQUFXLEFBQXFCLEFBQ2xELEFBQWlCLEFBQU0sQUFBWTs7OztBQUVwQyxDQUFBOzJCQUVLLHNCQUFNLEFBQUssaUNBRWYsQUFBSzs7QUFJSCxrQkFBQSxBQUFLLFVBQVUsWUFDYjtRQUFBLEdBQUEsR0FBQTtBQUFBO0FBQUksaUJBQUEsQUFBVztBQUFYO0FBQ0o7QUFBSSxpQkFBVyxBQUFNLE9BQU4sQUFBTyxPQUFPLEFBQUMsRUFBMUIsQUFBVyxBQUFnQjtBQUEzQjtBQUNKLFFBQUksQUFBTSxPQUFOLEFBQU8sT0FBTyxBQUFDLEVBQWYsQUFBZ0I7QUFDcEIsMEJBQU8sa0JBQUEsQUFBTyxHQUFkLEFBQU8sQUFBVTtBQUNqQiwwQkFBTyxrQkFBQSxBQUFPLEdBQWQsQUFBTyxBQUFVO1dBQ2pCLHNCQUFPLEFBQUMsQ0FBQyxrQkFBQSxBQUFPLEdBTkgsQUFNYixBQUFRLEFBQUMsQUFBVTtBQVZMLEFBSWhCLElBSmdCLGtCQVloQixBQUFLOztBQUlILGtCQUFBLEFBQUssWUFBWTtBQUNmLDBCQUFPLG9CQUFQLEFBQU8sQUFBUztBQUNoQiwwQkFBTyxDQUFFLG9CQUFULEFBQVMsQUFBUztBQUNsQiwwQkFBTyxDQUFFLG9CQUFULEFBQVMsQUFBUztXQUNsQixzQkFBTyxBQUFRLGVBQVIsQUFBUyxXQUpELEFBSWYsQUFBMEI7QUFSZixBQUliLElBSmEsa0JBVWIsQUFBSyxhQUFhO0FBQ2hCLDBCQUFPLHFCQUFQLEFBQU8sQUFBVTtXQUNqQixzQkFBTyxDQUFDLHFCQUZRLEFBRWhCLEFBQVEsQUFBVTtBQVpQLEFBVWIsR0FBQSxt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QkFBTyxtQkFBUCxBQUFPLEFBQVE7QUFDZiwwQkFBTyxDQUFFLG1CQUFULEFBQVMsQUFBUTtBQUNqQiwwQkFBTyxtQkFBUCxBQUFPLEFBQVE7QUFDZiwwQkFBTyxDQUFFLG1CQUFRLENBQWpCLEFBQVMsQUFBUSxBQUFFO0FBQ25CLDBCQUFPLG1CQUFRLElBQWYsQUFBTyxBQUFZO0FBQ25CLDBCQUFPLENBQUUsbUJBQVEsSUFBQSxBQUFJLElBQUksQ0FBQyxDQUFBLEFBQUUsS0FBNUIsQUFBUyxBQUFRLEFBQVEsQUFBQyxBQUFPO0FBQ2pDLDBCQUFPLG1CQUFRLElBQWYsQUFBTyxBQUFZO1dBQ25CLHNCQUFPLENBQUUsbUJBQVEsSUFBQSxBQUFJLElBQUksQ0FSWCxBQVFkLEFBQVMsQUFBUSxBQUFRLEFBQUU7QUEzRzlCLEFBRUQsQUFBTSxBQUFNLEFBQXFCLEFBRS9CLEFBQWtCLEFBK0ZsQixHQUFBLEVBL0ZBLENBRitCLENBQXJCLENBQVosQUFBTTtBQUZSLEFBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3Byb3RvdHlwZSwgaXNUeXBlLCBpc0tpbmQsXG4gICAgaXNCb29sZWFuLCBpc051bWJlciwgaXNOYU4sIGlzRmluaXRlLCBpc0ludGVnZXIsIGlzRmxvYXQsXG4gICAgaXNTdHJpbmcsIGlzQnVmZmVyLCBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNBcnJheSxcbiAgICBpc1JlZ0V4cCwgaXNEYXRlLCBpc0RlZmluZWQsIGlzR2VuZXJhdG9yRnVuY3Rpb24sIGlzUHJvbWlzZSxcbiAgICBpc0FzeW5jRnVuY3Rpb24sIFR5cGUsIGluc3RhbmNlT2YsIGlzRW1wdHl9IGZyb20gXCIuLi9zcmMvdHlwZVwiXG5cbmRvIC0+XG5cbiAgcHJpbnQgYXdhaXQgdGVzdCBcInR5cGUgaGVscGVyc1wiLCBbXG5cbiAgICB0ZXN0IFwicHJvdG90eXBlXCIsIFtcblxuICAgICAgIyBpc1R5cGUgYW5kIGlzS2luZCByZWxpZXMgb24gcHJvdG90eXBlXG5cbiAgICAgIHRlc3QgXCJpc0tpbmRcIiwgLT5cbiAgICAgICAgQSA9IHByb3RvdHlwZToge31cbiAgICAgICAgQiA9IHByb3RvdHlwZTogT2JqZWN0LmNyZWF0ZSBBLnByb3RvdHlwZVxuICAgICAgICBiID0gT2JqZWN0LmNyZWF0ZSBCLnByb3RvdHlwZVxuICAgICAgICBhc3NlcnQgaXNLaW5kIEIsIGJcbiAgICAgICAgYXNzZXJ0IGlzS2luZCBBLCBiXG4gICAgICAgIGFzc2VydCAhKGlzS2luZCBBLCB7fSlcblxuICAgICAgdGVzdCBcImlzVHlwZVwiLCBbXG5cbiAgICAgICAgIyB0aGVzZSBhcmUgYWxsIGRlZmluZWQgdXNpbmcgaXNUeXBlXG5cbiAgICAgICAgdGVzdCBcImlzTnVtYmVyXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzTnVtYmVyIDdcbiAgICAgICAgICBhc3NlcnQgISBpc051bWJlciBcIjdcIlxuICAgICAgICAgIGFzc2VydCAhIGlzTnVtYmVyIGZhbHNlXG4gICAgICAgICAgYXNzZXJ0IGlzTnVtYmVyLmxlbmd0aCA9PSAxXG5cbiAgICAgICAgdGVzdCBcImlzQm9vbGVhblwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0Jvb2xlYW4gdHJ1ZVxuICAgICAgICAgIGFzc2VydCAhaXNCb29sZWFuIDdcblxuICAgICAgICB0ZXN0IFwiaXNEYXRlXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzRGF0ZSAobmV3IERhdGUpXG4gICAgICAgICAgYXNzZXJ0ICFpc0RhdGUgN1xuXG4gICAgICAgIHRlc3QgXCJpc1JlZ0V4cFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc1JlZ0V4cCAvXFxzL1xuICAgICAgICAgIGFzc2VydCAhaXNSZWdFeHAgN1xuXG4gICAgICAgIHRlc3QgXCJpc1N0cmluZ1wiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc1N0cmluZyBcInhcIlxuICAgICAgICAgIGFzc2VydCAhaXNTdHJpbmcgN1xuXG4gICAgICAgIHRlc3QgXCJpc0J1ZmZlclwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0J1ZmZlciAoQnVmZmVyLmZyb20gXCJoZWxsb1wiKVxuXG4gICAgICAgIHRlc3QgXCJpc0Z1bmN0aW9uXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzRnVuY3Rpb24gLT5cbiAgICAgICAgICBhc3NlcnQgIWlzRnVuY3Rpb24gN1xuICAgICAgICAgIGFzc2VydCBpc0Z1bmN0aW9uLmxlbmd0aCA9PSAxXG5cbiAgICAgICAgdGVzdCBcImlzT2JqZWN0XCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzT2JqZWN0IHt9XG4gICAgICAgICAgYXNzZXJ0ICFpc09iamVjdCA3XG5cbiAgICAgICAgdGVzdCBcImlzQXJyYXlcIiwgLT5cbiAgICAgICAgICBhc3NlcnQgaXNBcnJheSBbXVxuICAgICAgICAgIGFzc2VydCAhaXNBcnJheSA3XG5cbiAgICAgICAgdGVzdCBcImlzTmFOXCJcbiAgICAgICAgdGVzdCBcImlzRmluaXRlXCJcblxuICAgICAgICB0ZXN0IFwiaXNJbnRlZ2VyXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzSW50ZWdlciA1XG4gICAgICAgICAgYXNzZXJ0ICEgaXNJbnRlZ2VyIDMuNVxuICAgICAgICAgIGFzc2VydCAhIGlzSW50ZWdlciBcIjVcIlxuICAgICAgICAgIGFzc2VydCAhIGlzSW50ZWdlciBOYU5cblxuICAgICAgICB0ZXN0IFwiaXNGbG9hdFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0Zsb2F0IDMuNVxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgNVxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgXCIzLjVcIlxuICAgICAgICAgIGFzc2VydCAhIGlzRmxvYXQgTmFOXG5cbiAgICAgICAgdGVzdCBcImlzRGVmaW5lZFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0RlZmluZWQge31cbiAgICAgICAgICBhc3NlcnQgIWlzRGVmaW5lZCB1bmRlZmluZWRcblxuICAgICAgICB0ZXN0IFwiaXNHZW5lcmF0b3JGdW5jdGlvblwiLCAtPlxuICAgICAgICAgIGYgPSAtPiB5aWVsZCB0cnVlXG4gICAgICAgICAgYXNzZXJ0IGlzR2VuZXJhdG9yRnVuY3Rpb24gZlxuXG4gICAgICAgIHRlc3QgXCJpc0FzeW5jRnVuY3Rpb25cIiwgLT5cbiAgICAgICAgICBmID0gLT4gYXdhaXQgdHJ1ZVxuICAgICAgICAgIGFzc2VydCBpc0FzeW5jRnVuY3Rpb24gZlxuICAgICAgXVxuXG4gICAgdGVzdCBcIlR5cGVcIiwgZG8gLT5cblxuICAgICAgQSA9IFR5cGUuZGVmaW5lKClcbiAgICAgIEIgPSBUeXBlLmRlZmluZSBBXG4gICAgICBiID0gVHlwZS5jcmVhdGUgQlxuICAgICAgW1xuICAgICAgICB0ZXN0IFwiaXNUeXBlXCIsIC0+XG4gICAgICAgICAgYXNzZXJ0IGlzVHlwZSBCLCBiXG5cbiAgICAgICAgdGVzdCBcImlzS2luZFwiLCAtPlxuICAgICAgICAgIGFzc2VydCBpc0tpbmQgQSwgYlxuICAgICAgXVxuXG4gICAgdGVzdCBcImlzRW1wdHlcIiwgLT5cbiAgICAgIGFzc2VydCBpc0VtcHR5IFwiXCJcbiAgICAgIGFzc2VydCAhIGlzRW1wdHkgXCIgXCJcbiAgICAgIGFzc2VydCBpc0VtcHR5IFtdXG4gICAgICBhc3NlcnQgISBpc0VtcHR5IFsgMCBdXG4gICAgICBhc3NlcnQgaXNFbXB0eSBuZXcgTWFwXG4gICAgICBhc3NlcnQgISBpc0VtcHR5IG5ldyBNYXAgW1sgXCJ4XCIsIDEgXV1cbiAgICAgIGFzc2VydCBpc0VtcHR5IG5ldyBTZXRcbiAgICAgIGFzc2VydCAhIGlzRW1wdHkgbmV3IFNldCBbIDAgXVxuICBdXG5dXG4iXX0=
//# sourceURL=type.coffee