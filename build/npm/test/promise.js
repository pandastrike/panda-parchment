"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _promise = require("../src/promise");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_assert2.default.rejects = function (f) {
  return f().then(function () {
    return _assert2.default.fail("Missing expected promise rejection.");
  }).catch(function () {});
};

_assert2.default.resolves = function (f) {
  return f().catch(function () {
    return _assert2.default.fail("Missing expected promise resolution.");
  });
};

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("promise helpers", [(0, _amen.test)("rephrase", [(0, _amen.test)("node style", function () {
    var _foo, foo;
    foo = {
      bar: function (callback) {
        return callback(null, true);
      },
      baz: function (callback) {
        return callback(true, false);
      }
    };
    _foo = (0, _promise.rephrase)("node", foo);
    _assert2.default.resolves(function () {
      return _foo.bar();
    });
    return _assert2.default.rejects(function () {
      return _foo.baz();
    });
  })])])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvbWlzZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNOztBQUVkLEFBQVEsQUFBUyxBQUFVLEFBQVM7Ozs7QUFFcEMsQUFBTSxpQkFBTixBQUFPLFVBQVUsVUFBQSxBQUFDO2FBQ2hCLEFBQ0MsS0FBSztXQUFHLEFBQU0saUJBQU4sQUFBTyxLQUFWLEFBQUcsQUFBWTtBQURyQixBQUVBLEdBRkEsQUFDQSxFQURBLEFBRUMsTUFBTSxZQUFBLENBSFEsQUFDZjs7O0FBSUYsQUFBTSxpQkFBTixBQUFPLFdBQVcsVUFBQSxBQUFDO2FBQ2pCLEFBQ0MsTUFBTTtXQUFHLEFBQU0saUJBQU4sQUFBTyxLQUFWLEFBQUcsQUFBWTtBQUZOLEFBQ2hCLEdBQUEsQUFDQTs7O0FBRUMsQ0FBQTsyQkFFSyxzQkFBTSxBQUFLLG9DQUVmLEFBQUssNkJBRUgsQUFBSyxjQUFjLFlBQ2pCO1FBQUEsTUFBQTtBQUFBO0FBQ0UsV0FBSyxVQUFBLEFBQUM7ZUFBYSxTQUFBLEFBQVMsTUFBdkIsQUFBYyxBQUFlO0FBQWxDO0FBQ0EsV0FBSyxVQUFBLEFBQUM7ZUFBYSxTQUFBLEFBQVMsTUFBdkIsQUFBYyxBQUFlO0FBRGxDO0FBQUE7QUFHRixXQUFPLHVCQUFBLEFBQVMsUUFBVCxBQUFpQjtBQUV4QixBQUFNLHFCQUFOLEFBQU8sU0FBUzthQUFHLEFBQUksS0FBUCxBQUFHLEFBQUs7QUFBeEI7NEJBQ0EsQUFBTyxRQUFRO2FBQUcsQUFBSSxLQUFQLEFBQUcsQUFBSztBQVJOLEFBUWpCLEtBQUEsQUFBTTtBQWRYLEFBRUQsQUFBTSxBQUFNLEFBQXdCLEFBRWxDLEFBQWlCLEFBRWYsR0FBQSxDQUZlLENBQWpCLENBRmtDLENBQXhCLENBQVosQUFBTTtBQUZSLEFBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3Byb21pc2UsIHJlcGhyYXNlLCByZXNvbHZlLCByZWplY3R9IGZyb20gXCIuLi9zcmMvcHJvbWlzZVwiXG5cbmFzc2VydC5yZWplY3RzID0gKGYpIC0+XG4gIGYoKVxuICAudGhlbiAtPiBhc3NlcnQuZmFpbCBcIk1pc3NpbmcgZXhwZWN0ZWQgcHJvbWlzZSByZWplY3Rpb24uXCJcbiAgLmNhdGNoIC0+XG5cbmFzc2VydC5yZXNvbHZlcyA9IChmKSAtPlxuICBmKClcbiAgLmNhdGNoIC0+IGFzc2VydC5mYWlsIFwiTWlzc2luZyBleHBlY3RlZCBwcm9taXNlIHJlc29sdXRpb24uXCJcblxuZG8gLT5cblxuICBwcmludCBhd2FpdCB0ZXN0IFwicHJvbWlzZSBoZWxwZXJzXCIsIFtcblxuICAgIHRlc3QgXCJyZXBocmFzZVwiLCBbXG5cbiAgICAgIHRlc3QgXCJub2RlIHN0eWxlXCIsIC0+XG4gICAgICAgIGZvbyA9XG4gICAgICAgICAgYmFyOiAoY2FsbGJhY2spIC0+IGNhbGxiYWNrIG51bGwsIHRydWVcbiAgICAgICAgICBiYXo6IChjYWxsYmFjaykgLT4gY2FsbGJhY2sgdHJ1ZSwgZmFsc2VcblxuICAgICAgICBfZm9vID0gcmVwaHJhc2UgXCJub2RlXCIsIGZvb1xuXG4gICAgICAgIGFzc2VydC5yZXNvbHZlcyAtPiBfZm9vLmJhcigpXG4gICAgICAgIGFzc2VydC5yZWplY3RzIC0+IF9mb28uYmF6KClcbiAgICAgIF1cbiAgXVxuIl19
//# sourceURL=promise.coffee