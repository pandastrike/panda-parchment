"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _amen = require("amen");

var _promise = require("../src/promise");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_assert.default.rejects = function (f) {
  return f().then(function () {
    return _assert.default.fail("Missing expected promise rejection.");
  }).catch(function () {});
};

_assert.default.resolves = function (f) {
  return f().catch(function () {
    return _assert.default.fail("Missing expected promise resolution.");
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

    _assert.default.resolves(function () {
      return _foo.bar();
    });

    return _assert.default.rejects(function () {
      return _foo.baz();
    });
  })])])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxnQkFBQSxPQUFBLEdBQWlCLFVBQUEsQ0FBQSxFQUFBO1NBQ2YsQ0FBQSxHQUFBLElBQUEsQ0FDTSxZQUFBO1dBQUcsZ0JBQUEsSUFBQSxDQUFBLHFDQUFBLEM7QUFEVCxHQUFBLEVBQUEsS0FBQSxDQUVPLFlBQUEsQ0FGUCxDQUFBLEM7QUFEZSxDQUFqQjs7QUFLQSxnQkFBQSxRQUFBLEdBQWtCLFVBQUEsQ0FBQSxFQUFBO1NBQ2hCLENBQUEsR0FBQSxLQUFBLENBQ08sWUFBQTtXQUFHLGdCQUFBLElBQUEsQ0FBQSxzQ0FBQSxDO0FBRFYsR0FBQSxDO0FBRGdCLENBQWxCOztBQUlHLENBQUEsa0JBQUE7U0FFRCxrQkFBTSxNQUFNLGdCQUFBLGlCQUFBLEVBQXdCLENBRWxDLGdCQUFBLFVBQUEsRUFBaUIsQ0FFZixnQkFBQSxZQUFBLEVBQW1CLFlBQUE7QUFDakIsUUFBQSxJQUFBLEVBQUEsR0FBQTs7QUFBQSxJQUFBLEdBQUEsR0FDRTtBQUFBLE1BQUEsR0FBQSxFQUFLLFVBQUEsUUFBQSxFQUFBO2VBQWMsUUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEM7QUFBbkIsT0FBQTtBQUNBLE1BQUEsR0FBQSxFQUFLLFVBQUEsUUFBQSxFQUFBO2VBQWMsUUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLEM7QUFBZDtBQURMLEtBREY7QUFJQSxJQUFBLElBQUEsR0FBTyx1QkFBQSxNQUFBLEVBQUEsR0FBQSxDQUFQOztBQUVBLG9CQUFBLFFBQUEsQ0FBZ0IsWUFBQTthQUFHLElBQUksQ0FBSixHQUFBLEU7QUFBbkIsS0FBQTs7V0FDQSxnQkFBQSxPQUFBLENBQWUsWUFBQTthQUFHLElBQUksQ0FBSixHQUFBLEU7QUFBbEIsS0FBQSxDO0FBVmEsR0FFZixDQUZlLENBQWpCLENBRmtDLENBQXhCLENBQVosRTtBQUZGLENBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3Byb21pc2UsIHJlcGhyYXNlLCByZXNvbHZlLCByZWplY3R9IGZyb20gXCIuLi9zcmMvcHJvbWlzZVwiXG5cbmFzc2VydC5yZWplY3RzID0gKGYpIC0+XG4gIGYoKVxuICAudGhlbiAtPiBhc3NlcnQuZmFpbCBcIk1pc3NpbmcgZXhwZWN0ZWQgcHJvbWlzZSByZWplY3Rpb24uXCJcbiAgLmNhdGNoIC0+XG5cbmFzc2VydC5yZXNvbHZlcyA9IChmKSAtPlxuICBmKClcbiAgLmNhdGNoIC0+IGFzc2VydC5mYWlsIFwiTWlzc2luZyBleHBlY3RlZCBwcm9taXNlIHJlc29sdXRpb24uXCJcblxuZG8gLT5cblxuICBwcmludCBhd2FpdCB0ZXN0IFwicHJvbWlzZSBoZWxwZXJzXCIsIFtcblxuICAgIHRlc3QgXCJyZXBocmFzZVwiLCBbXG5cbiAgICAgIHRlc3QgXCJub2RlIHN0eWxlXCIsIC0+XG4gICAgICAgIGZvbyA9XG4gICAgICAgICAgYmFyOiAoY2FsbGJhY2spIC0+IGNhbGxiYWNrIG51bGwsIHRydWVcbiAgICAgICAgICBiYXo6IChjYWxsYmFjaykgLT4gY2FsbGJhY2sgdHJ1ZSwgZmFsc2VcblxuICAgICAgICBfZm9vID0gcmVwaHJhc2UgXCJub2RlXCIsIGZvb1xuXG4gICAgICAgIGFzc2VydC5yZXNvbHZlcyAtPiBfZm9vLmJhcigpXG4gICAgICAgIGFzc2VydC5yZWplY3RzIC0+IF9mb28uYmF6KClcbiAgICAgIF1cbiAgXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=promise.coffee