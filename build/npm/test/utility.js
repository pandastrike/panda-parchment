"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _amen = require("amen");

var _utility = require("../src/utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("utility helpers", [(0, _amen.test)("timer", function () {
    var cancel, tooLate, x; // We need an action to put into "timer",
    // but we'll cancel it before it runs.

    x = 5;

    tooLate = function () {
      return x++;
    };

    cancel = (0, _utility.timer)(10000, tooLate); // 10s is too long to wait.  Cancel it!!

    cancel();
    return (0, _assert.default)(x === 5); // We kept tooLong from executing.
  }), (0, _amen.test)("sleep", [(0, _amen.test)("microseconds/benchmark", async function () {
    return (0, _assert.default)((await (0, _utility.benchmark)(async function () {
      return await (0, _utility.sleep)(100);
    })) > 100 * 1000);
  })]), (0, _amen.test)("times", function () {
    var n;
    n = 0;
    return _assert.default.deepEqual((0, _utility.times)(function () {
      return ++n;
    }, 3), [1, 2, 3]);
  })])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFHRyxDQUFBLGtCQUFBO1NBRUQsa0JBQU0sTUFBTSxnQkFBQSxpQkFBQSxFQUF3QixDQUVsQyxnQkFBQSxPQUFBLEVBQWMsWUFBQTtBQUdaLFFBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLENBSFksQzs7O0FBR1osSUFBQSxDQUFBLEdBQUksQ0FBSjs7QUFDQSxJQUFBLE9BQUEsR0FBVSxZQUFBO2FBQUcsQ0FBQSxFO0FBQUgsS0FBVjs7QUFDQSxJQUFBLE1BQUEsR0FBUyxvQkFBQSxLQUFBLEVBRlQsT0FFUyxDQUFULENBTFksQzs7QUFRWixJQUFBLE1BQUE7V0FDQSxxQkFBTyxDQUFBLEtBVEssQ0FTWixDLENBVFksQ0FBQTtBQUZvQixHQUVsQyxDQUZrQyxFQWFsQyxnQkFBQSxPQUFBLEVBQWMsQ0FDWixnQkFBQSx3QkFBQSxFQUErQixrQkFBQTtXQUM3QixxQkFBTyxDQUFDLE1BQU0sd0JBQVcsa0JBQUE7QUFBRyxhQUFBLE1BQU0sb0JBQU4sR0FBTSxDQUFOO0FBQXJCLEtBQU8sQ0FBUCxJQUEwQyxNQUFqRCxJQUFBLEM7QUFGVSxHQUNaLENBRFksQ0FBZCxDQWJrQyxFQWtCbEMsZ0JBQUEsT0FBQSxFQUFjLFlBQUE7QUFDWixRQUFBLENBQUE7QUFBQSxJQUFBLENBQUEsR0FBSSxDQUFKO1dBQ0EsZ0JBQUEsU0FBQSxDQUFrQixvQkFBTyxZQUFBO2FBQUcsRUFBRSxDO0FBQVosS0FBQSxFQUFsQixDQUFrQixDQUFsQixFQUFzQyxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQXRDLENBQXNDLENBQXRDLEM7QUFwQmdDLEdBa0JsQyxDQWxCa0MsQ0FBeEIsQ0FBWixFO0FBRkYsQ0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXG5pbXBvcnQge3Rlc3QsIHByaW50fSBmcm9tIFwiYW1lblwiXG5cbmltcG9ydCB7dGltZXMsIHNsZWVwLCB0aW1lciwgbWVtb2l6ZSxcbiAgICBiZW5jaG1hcmssIGVtcHR5LCBsZW5ndGh9IGZyb20gXCIuLi9zcmMvdXRpbGl0eVwiXG5cbmRvIC0+XG5cbiAgcHJpbnQgYXdhaXQgdGVzdCBcInV0aWxpdHkgaGVscGVyc1wiLCBbXG5cbiAgICB0ZXN0IFwidGltZXJcIiwgLT5cbiAgICAgICMgV2UgbmVlZCBhbiBhY3Rpb24gdG8gcHV0IGludG8gXCJ0aW1lclwiLFxuICAgICAgIyBidXQgd2UnbGwgY2FuY2VsIGl0IGJlZm9yZSBpdCBydW5zLlxuICAgICAgeCA9IDVcbiAgICAgIHRvb0xhdGUgPSAtPiB4KytcbiAgICAgIGNhbmNlbCA9IHRpbWVyIDEwMDAwLCB0b29MYXRlXG5cbiAgICAgICMgMTBzIGlzIHRvbyBsb25nIHRvIHdhaXQuICBDYW5jZWwgaXQhIVxuICAgICAgY2FuY2VsKClcbiAgICAgIGFzc2VydCB4ID09IDUgICAjIFdlIGtlcHQgdG9vTG9uZyBmcm9tIGV4ZWN1dGluZy5cblxuICAgIHRlc3QgXCJzbGVlcFwiLCBbXG4gICAgICB0ZXN0IFwibWljcm9zZWNvbmRzL2JlbmNobWFya1wiLCAtPlxuICAgICAgICBhc3NlcnQgKGF3YWl0IGJlbmNobWFyayAoLT4gYXdhaXQgc2xlZXAgMTAwKSkgPiAoMTAwICogMTAwMClcbiAgICBdXG5cbiAgICB0ZXN0IFwidGltZXNcIiwgLT5cbiAgICAgIG4gPSAwXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsICh0aW1lcyAoLT4gKytuKSwgMyksIFsxLCAyLCAzXVxuIF1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=utility.coffee