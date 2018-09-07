"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _utility = require("../src/utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("utility helpers", [(0, _amen.test)("timer", function () {
    var cancel, tooLate, x;
    // We need an action to put into "timer",
    // but we'll cancel it before it runs.
    x = 5;
    tooLate = function () {
      return x++;
    };
    cancel = (0, _utility.timer)(10000, tooLate);
    // 10s is too long to wait.  Cancel it!!
    cancel();
    return (0, _assert2.default)(x === 5); // We kept tooLong from executing.
  }), (0, _amen.test)("sleep", [(0, _amen.test)("microseconds/benchmark", async function () {
    return (0, _assert2.default)((await (0, _utility.benchmark)(async function () {
      return await (0, _utility.sleep)(100);
    })) > 100 * 1000);
  })]), (0, _amen.test)("times", function () {
    var n;
    n = 0;
    return _assert2.default.deepEqual((0, _utility.times)(function () {
      return ++n;
    }, 3), [1, 2, 3]);
  })])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0eS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNOztBQUVkLEFBQVEsQUFBTyxBQUFPLEFBQU8sQUFDekIsQUFBVyxBQUFPOzs7O0FBRW5CLENBQUE7MkJBRUssc0JBQU0sQUFBSyxvQ0FFZixBQUFLLFNBQVM7UUFHWixRQUFBLFNBQUE7OztBQUFBLFFBQUk7QUFDSixjQUFVO2FBQUEsQUFBRzs7QUFDYixhQUFTLG9CQUFBLEFBQU0sT0FGZixBQUVTLEFBQWE7O0FBR3RCO1dBQ0Esc0JBQU8sTUFUSyxBQVNaLEFBQVksR0FOWixDQUhZO0FBRm9CLEFBRWxDLEdBQUEsQ0FGa0Msa0JBYWxDLEFBQUssMEJBQ0gsQUFBSywwQkFBMEI7V0FDN0IsdUJBQVEsOEJBQWlCO0FBQUcsYUFBQSxNQUFNLG9CQUFULEFBQUcsQUFBTSxBQUFNO0FBQWpDLEFBQUMsQUFBTSxBQUFVLEFBQXdCLEtBQWxDLEFBQVUsQ0FBakIsQUFBQyxJQUF5QyxNQURwQixBQUM3QixBQUFnRCxBQUFPO0FBZnpCLEFBYWxDLEFBQWMsQUFDWixHQUFBLENBRFksQ0FBZCxtQkFLQSxBQUFLLFNBQVMsWUFDWjtRQUFBO0FBQUEsUUFBSTs0QkFDSixBQUFPLDhCQUFrQjthQUFHLEVBQUgsQUFBSztBQUFaLEFBQU0sS0FBTixBQUFNLEVBQXhCLEFBQWtCLEFBQWdCLEVBQWxDLEFBQU0sRUFBZ0MsQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUY5QixBQUVaLEFBQXNDLEFBQU87QUF0QmhELEFBRUQsQUFBTSxBQUFNLEFBQXdCLEFBa0JsQyxHQUFBLEVBbEJVLENBQVosQUFBTTtBQUZSLEFBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge3RpbWVzLCBzbGVlcCwgdGltZXIsIG1lbW9pemUsXG4gICAgYmVuY2htYXJrLCBlbXB0eSwgbGVuZ3RofSBmcm9tIFwiLi4vc3JjL3V0aWxpdHlcIlxuXG5kbyAtPlxuXG4gIHByaW50IGF3YWl0IHRlc3QgXCJ1dGlsaXR5IGhlbHBlcnNcIiwgW1xuXG4gICAgdGVzdCBcInRpbWVyXCIsIC0+XG4gICAgICAjIFdlIG5lZWQgYW4gYWN0aW9uIHRvIHB1dCBpbnRvIFwidGltZXJcIixcbiAgICAgICMgYnV0IHdlJ2xsIGNhbmNlbCBpdCBiZWZvcmUgaXQgcnVucy5cbiAgICAgIHggPSA1XG4gICAgICB0b29MYXRlID0gLT4geCsrXG4gICAgICBjYW5jZWwgPSB0aW1lciAxMDAwMCwgdG9vTGF0ZVxuXG4gICAgICAjIDEwcyBpcyB0b28gbG9uZyB0byB3YWl0LiAgQ2FuY2VsIGl0ISFcbiAgICAgIGNhbmNlbCgpXG4gICAgICBhc3NlcnQgeCA9PSA1ICAgIyBXZSBrZXB0IHRvb0xvbmcgZnJvbSBleGVjdXRpbmcuXG5cbiAgICB0ZXN0IFwic2xlZXBcIiwgW1xuICAgICAgdGVzdCBcIm1pY3Jvc2Vjb25kcy9iZW5jaG1hcmtcIiwgLT5cbiAgICAgICAgYXNzZXJ0IChhd2FpdCBiZW5jaG1hcmsgKC0+IGF3YWl0IHNsZWVwIDEwMCkpID4gKDEwMCAqIDEwMDApXG4gICAgXVxuXG4gICAgdGVzdCBcInRpbWVzXCIsIC0+XG4gICAgICBuID0gMFxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAodGltZXMgKC0+ICsrbiksIDMpLCBbMSwgMiwgM11cbiBdXG4iXX0=
//# sourceURL=utility.coffee