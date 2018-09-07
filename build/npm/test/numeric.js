"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _numeric = require("../src/numeric");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  return (0, _amen.print)((await (0, _amen.test)("numeric helpers", [(0, _amen.test)("gt"), (0, _amen.test)("lt", function () {
    return (0, _assert2.default)((0, _numeric.lt)(6, 5));
  }), (0, _amen.test)("gte"), (0, _amen.test)("lte"), (0, _amen.test)("add"), (0, _amen.test)("sub"), (0, _amen.test)("mul"), (0, _amen.test)("div"), (0, _amen.test)("mod"), (0, _amen.test)("even"), (0, _amen.test)("odd", function () {
    return (0, _assert2.default)((0, _numeric.odd)(5));
  }), (0, _amen.test)("min"), (0, _amen.test)("max"), (0, _amen.test)("abs")])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnVtZXJpYy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFNOztBQUVkLEFBQVEsQUFBSSxBQUFJLEFBQUssQUFBSyxBQUFLLEFBQUssQUFBSyxBQUFLLEFBQzVDLEFBQU0sQUFBSyxBQUFLLEFBQUs7Ozs7QUFFcEIsQ0FBQTtTQUNELEFBQU0sa0JBQUEsTUFBTSxnQkFBQSxBQUFLLG9CQUNmLGdCQURrQyxBQUNsQyxBQUFLLHVCQUNMLEFBQUssTUFBTTtXQUFHLHNCQUFPLGlCQUFBLEFBQUcsR0FBYixBQUFHLEFBQU8sQUFBTTtBQUZPLEFBRWxDLEdBQUEsQ0FGa0MsRUFHbEMsZ0JBSGtDLEFBR2xDLEFBQUssUUFDTCxnQkFKa0MsQUFJbEMsQUFBSyxRQUNMLGdCQUxrQyxBQUtsQyxBQUFLLFFBQ0wsZ0JBTmtDLEFBTWxDLEFBQUssUUFDTCxnQkFQa0MsQUFPbEMsQUFBSyxRQUNMLGdCQVJrQyxBQVFsQyxBQUFLLFFBQ0wsZ0JBVGtDLEFBU2xDLEFBQUssUUFDTCxnQkFWa0MsQUFVbEMsQUFBSyx5QkFDTCxBQUFLLE9BQU87V0FBRyxzQkFBTyxrQkFBVixBQUFHLEFBQU8sQUFBSTtBQVhRLEFBV2xDLEdBQUEsR0FDQSxnQkFaa0MsQUFZbEMsQUFBSyxRQUNMLGdCQWJrQyxBQWFsQyxBQUFLLFFBQ0wsZ0JBZkQsQUFDRCxBQUFNLEFBQU0sQUFBd0IsQUFjbEMsQUFBSztBQWZULEFBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIlxuaW1wb3J0IHt0ZXN0LCBwcmludH0gZnJvbSBcImFtZW5cIlxuXG5pbXBvcnQge2d0LCBsdCwgZ3RlLCBsdGUsIGFkZCwgc3ViLCBtdWwsIGRpdiwgbW9kLFxuICBldmVuLCBvZGQsIG1pbiwgbWF4LCBhYnN9IGZyb20gXCIuLi9zcmMvbnVtZXJpY1wiXG5cbmRvIC0+XG4gIHByaW50IGF3YWl0IHRlc3QgXCJudW1lcmljIGhlbHBlcnNcIiwgW1xuICAgIHRlc3QgXCJndFwiXG4gICAgdGVzdCBcImx0XCIsIC0+IGFzc2VydCBsdCA2LCA1XG4gICAgdGVzdCBcImd0ZVwiXG4gICAgdGVzdCBcImx0ZVwiXG4gICAgdGVzdCBcImFkZFwiXG4gICAgdGVzdCBcInN1YlwiXG4gICAgdGVzdCBcIm11bFwiXG4gICAgdGVzdCBcImRpdlwiXG4gICAgdGVzdCBcIm1vZFwiXG4gICAgdGVzdCBcImV2ZW5cIlxuICAgIHRlc3QgXCJvZGRcIiwgLT4gYXNzZXJ0IG9kZCA1XG4gICAgdGVzdCBcIm1pblwiXG4gICAgdGVzdCBcIm1heFwiXG4gICAgdGVzdCBcImFic1wiXG4gIF1cbiJdfQ==
//# sourceURL=numeric.coffee