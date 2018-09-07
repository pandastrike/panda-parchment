"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _amen = require("amen");

var _array = require("../src/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  // import sinon from "sinon"
  return (0, _amen.print)((await (0, _amen.test)("array helperrs", [(0, _amen.test)("first", function () {
    return (0, _assert2.default)((0, _array.first)([1, 2, 3, 4, 5]) === 1);
  }), (0, _amen.test)("second", function () {
    return (0, _assert2.default)((0, _array.second)([1, 2, 3, 4, 5]) === 2);
  }), (0, _amen.test)("third", function () {
    return (0, _assert2.default)((0, _array.third)([1, 2, 3, 4, 5]) === 3);
  }), (0, _amen.test)("fourth", function () {
    return (0, _assert2.default)((0, _array.fourth)([1, 2, 3, 4, 5]) === 4);
  }), (0, _amen.test)("fifth", function () {
    return (0, _assert2.default)((0, _array.fifth)([1, 2, 3, 4, 5]) === 5);
  }), (0, _amen.test)("nth", function () {
    return (0, _assert2.default)((0, _array.nth)(3, [1, 2, 3, 4, 5]) === 3);
  }), (0, _amen.test)("last", function () {
    return (0, _assert2.default)((0, _array.last)([1, 2, 3, 4, 5]) === 5);
  }), (0, _amen.test)("rest", function () {
    return (0, _assert2.default)((0, _array.first)((0, _array.rest)([1, 2, 3, 4, 5])) === 2);
  }), (0, _amen.test)("includes", function () {
    return (0, _assert2.default)((0, _array.includes)(3, [1, 2, 3, 4, 5]) && !(0, _array.includes)(6, [1, 2, 3, 4, 5]));
  }), (0, _amen.test)("findIndexOf"), (0, _amen.test)("findLastIndexOf"), (0, _amen.test)("push/enqueue", function () {
    return _assert2.default.deepEqual((0, _array.push)([1, 2, 3, 4], 5), [1, 2, 3, 4, 5]);
  }), (0, _amen.test)("pop/dequeue", function () {
    return (0, _assert2.default)((0, _array.pop)([1, 2, 3, 4, 5]) === 5);
  }), (0, _amen.test)("shift"), (0, _amen.test)("unshift"), (0, _amen.test)("splice"), (0, _amen.test)("cat", function () {
    return _assert2.default.deepEqual((0, _array.cat)([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }), (0, _amen.test)("slice", function () {
    _assert2.default.deepEqual((0, _array.slice)(1, 2, [1, 2, 3, 4, 5]), [2]);
    _assert2.default.deepEqual((0, _array.slice)(2, 5, [1, 2, 3, 4, 5]), [3, 4, 5]);
    _assert2.default.deepEqual((0, _array.slice)(1, -2, [1, 2, 3, 4, 5]), [2, 3]);
    _assert2.default.deepEqual((0, _array.slice)(-3, -1, [1, 2, 3, 4, 5]), [3, 4]);
    return _assert2.default.deepEqual((0, _array.slice)(-3, -1, "0123456789"), "78");
  }), (0, _amen.test)("splice"), (0, _amen.test)("uniqueBy", function () {
    var mod3;
    mod3 = function (x) {
      return x % 3;
    };
    return _assert2.default.deepEqual((0, _array.uniqueBy)(mod3, [1, 2, 3, 4, 5]), [1, 2, 0]);
  }), (0, _amen.test)("unique", function () {
    return _assert2.default.deepEqual((0, _array.unique)([...[1, 2, 3, 4], ...[4, 3, 2, 1]]), [1, 2, 3, 4]);
  }), (0, _amen.test)("dupes", function () {
    return _assert2.default.deepEqual((0, _array.dupes)([...[1, 2, 3], ...[2, 1]]), [1, 2]);
  }), (0, _amen.test)("union", function () {
    return _assert2.default.deepEqual((0, _array.union)([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }), (0, _amen.test)("intersection", function () {
    return _assert2.default.deepEqual((0, _array.intersection)([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 10]), [4, 5, 6]);
  }), (0, _amen.test)("difference", function () {
    return _assert2.default.deepEqual((0, _array.difference)([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 10]);
  }), (0, _amen.test)("complement", function () {
    return _assert2.default.deepEqual((0, _array.complement)([1, 2, 3, 4, 5], [3, 4, 5, 6]), [1, 2]);
  }), (0, _amen.test)("insert", function () {
    _assert2.default.deepEqual((0, _array.insert)([4, 2, 1], 3, 1), [4, 3, 2, 1]);
    _assert2.default.deepEqual((0, _array.insert)([1, 2, 4], 3, -1), [1, 2, 3, 4]);
    return _assert2.default.deepEqual((0, _array.insert)([2, 3, 4], 1, 0), [1, 2, 3, 4]);
  }), (0, _amen.test)("remove", function () {
    _assert2.default.deepEqual((0, _array.remove)([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);
    return _assert2.default.deepEqual((0, _array.remove)([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5]);
  }), (0, _amen.test)("shuffle"),
  //   # use a sinon sandbox b/c we're mocking globals
  //   sinon.test ->
  //     # stubbing Math.random() allows us to determine the algorithm used
  //     # by expecting a specific result
  //     sinon.stub(Math, "random").returns 0.8
  //     # "Given Math.random() always returns 0.8..."
  //     # * if the biased j = (i * array.size) algorithm is used,
  //     #   the expected result is: [ 9, 1, 2, 3, 4, 5, 6, 7, 10, 8 ]
  //     # * if the fisher-yates algorithm used, the expected result is:
  //     fisher_yates = [ 1, 2, 3, 4, 10, 5, 6, 7, 8, 9 ]
  //     assert.deepEqual (shuffle [1..10]), fisher_yates
  (0, _amen.test)("range", function () {
    _assert2.default.deepEqual((0, _array.range)(1, 5), [1, 2, 3, 4, 5]);
    return _assert2.default.deepEqual((0, _array.range)(5, 1), [5, 4, 3, 2, 1]);
  }), (0, _amen.test)("join"), (0, _amen.test)("fill"), (0, _amen.test)("pluck"), (0, _amen.test)("pair")])));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJyYXkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVEsQUFBTTs7QUFFZCxBQUFRLEFBQU8sQUFBUSxBQUFPLEFBQVEsQUFBTyxBQUFLLEFBQU0sQUFDdEQsQUFBTyxBQUFVLEFBQWEsQUFBaUIsQUFBVSxBQUFRLEFBQU0sQUFDdkUsQUFBTyxBQUFjLEFBQVksQUFBWSxBQUFNLEFBQUssQUFBTyxBQUMvRCxBQUFTLEFBQVMsQUFBUSxBQUFRLEFBQVEsQUFBSyxBQUFPLEFBQU0sQUFDNUQsQUFBUyxBQUFPLEFBQU87Ozs7QUFJdEIsQ0FBQSxrQkFBQTs7U0FFRCxBQUFNLGtCQUFBLE1BQU0sZ0JBQUEsQUFBSyxtQ0FFZixBQUFLLFNBQVM7V0FBRyxzQkFBUSxrQkFBTSxhQUFQLEFBQUMsR0FBRCxLQUFWLEFBQUcsQUFBeUI7QUFGVCxBQUVqQyxHQUFBLENBRmlDLGtCQUdqQyxBQUFLLFVBQVU7V0FBRyxzQkFBUSxtQkFBTyxhQUFSLEFBQUMsR0FBRCxLQUFWLEFBQUcsQUFBMEI7QUFIWCxBQUdqQyxHQUFBLG1CQUNBLEFBQUssU0FBUztXQUFHLHNCQUFRLGtCQUFNLGFBQVAsQUFBQyxHQUFELEtBQVYsQUFBRyxBQUF5QjtBQUpULEFBSWpDLEdBQUEsbUJBQ0EsQUFBSyxVQUFVO1dBQUcsc0JBQVEsbUJBQU8sYUFBUixBQUFDLEdBQUQsS0FBVixBQUFHLEFBQTBCO0FBTFgsQUFLakMsR0FBQSxtQkFDQSxBQUFLLFNBQVM7V0FBRyxzQkFBUSxrQkFBTSxhQUFQLEFBQUMsR0FBRCxLQUFWLEFBQUcsQUFBeUI7QUFOVCxBQU1qQyxHQUFBLG1CQUNBLEFBQUssT0FBTztXQUFHLHNCQUFRLGdCQUFBLEFBQUksR0FBRyxhQUFSLEFBQUMsR0FBRCxLQUFWLEFBQUcsQUFBMEI7QUFQUixBQU9qQyxHQUFBLG1CQUNBLEFBQUssUUFBUTtXQUFHLHNCQUFRLGlCQUFLLGFB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LG1CQUFPLGFBQVAsSUFBbEIsQUFBa0IsQUFBZSxJQUFJLGFBRnhCLEFBRWI7QUExRCtCLEFBd0RqQyxHQUFBLEdBSUEsZ0JBNURpQyxBQTREakMsQUFBSzs7Ozs7Ozs7Ozs7O0FBYUwsa0JBQUEsQUFBSyxTQUFTO0FBQ1osQUFBTSxxQkFBTixBQUFPLFVBQVcsa0JBQUEsQUFBTSxHQUF4QixBQUFrQixBQUFTLElBQUksYUFBL0I7V0FDQSxBQUFNLGlCQUFOLEFBQU8sVUFBVyxrQkFBQSxBQUFNLEdBQXhCLEFBQWtCLEFBQVMsSUFBSSxhQUZuQixBQUVaO0FBM0UrQixBQXlFakMsTUFJQSxnQkE3RWlDLEFBNkVqQyxBQUFLLFNBQ0wsZ0JBOUVpQyxBQThFakMsQUFBSyxTQUNMLGdCQS9FaUMsQUErRWpDLEFBQUssVUFDTCxnQkFsRkQsQUFFRCxBQUFNLEFBQU0sQUFBdUIsQUFnRmpDLEFBQUs7QUFsRlQsQUFBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiXG5pbXBvcnQge3Rlc3QsIHByaW50fSBmcm9tIFwiYW1lblwiXG5cbmltcG9ydCB7Zmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGgsIG50aCwgbGFzdCwgcmVzdCxcbiAgZW1wdHksIGluY2x1ZGVzLCBmaW5kSW5kZXhPZiwgZmluZExhc3RJbmRleE9mLCB1bmlxdWVCeSwgdW5pcXVlLCB1bmlxLCBkdXBlcyxcbiAgdW5pb24sIGludGVyc2VjdGlvbiwgZGlmZmVyZW5jZSwgY29tcGxlbWVudCwgcHVzaCwgcG9wLCBzaGlmdCwgdW5zaGlmdCxcbiAgZW5xdWV1ZSwgZGVxdWV1ZSwgc3BsaWNlLCBpbnNlcnQsIHJlbW92ZSwgY2F0LCBzbGljZSwgam9pbiwgZmlsbCxcbiAgc2h1ZmZsZSwgcmFuZ2UsIHBsdWNrLCBwYWlyfSBmcm9tIFwiLi4vc3JjL2FycmF5XCJcblxuIyBpbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCJcblxuZG8gLT5cblxuICBwcmludCBhd2FpdCB0ZXN0IFwiYXJyYXkgaGVscGVycnNcIiwgW1xuXG4gICAgdGVzdCBcImZpcnN0XCIsIC0+IGFzc2VydCAoZmlyc3QgWzEuLjVdKSA9PSAxXG4gICAgdGVzdCBcInNlY29uZFwiLCAtPiBhc3NlcnQgKHNlY29uZCBbMS4uNV0pID09IDJcbiAgICB0ZXN0IFwidGhpcmRcIiwgLT4gYXNzZXJ0ICh0aGlyZCBbMS4uNV0pID09IDNcbiAgICB0ZXN0IFwiZm91cnRoXCIsIC0+IGFzc2VydCAoZm91cnRoIFsxLi41XSkgPT0gNFxuICAgIHRlc3QgXCJmaWZ0aFwiLCAtPiBhc3NlcnQgKGZpZnRoIFsxLi41XSkgPT0gNVxuICAgIHRlc3QgXCJudGhcIiwgLT4gYXNzZXJ0IChudGggMywgWzEuLjVdKSA9PSAzXG4gICAgdGVzdCBcImxhc3RcIiwgLT4gYXNzZXJ0IChsYXN0IFsxLi41XSkgPT0gNVxuICAgIHRlc3QgXCJyZXN0XCIsIC0+IGFzc2VydCAoZmlyc3QgcmVzdCBbMS4uNV0pID09IDJcbiAgICB0ZXN0IFwiaW5jbHVkZXNcIiwgLT4gYXNzZXJ0IChpbmNsdWRlcyAzLCBbMS4uNV0pICYmICEoaW5jbHVkZXMgNiwgWzEuLjVdKVxuICAgIHRlc3QgXCJmaW5kSW5kZXhPZlwiXG4gICAgdGVzdCBcImZpbmRMYXN0SW5kZXhPZlwiXG4gICAgdGVzdCBcInB1c2gvZW5xdWV1ZVwiLCAtPiBhc3NlcnQuZGVlcEVxdWFsIChwdXNoIFsxLi40XSwgNSksIFsxLi41XVxuICAgIHRlc3QgXCJwb3AvZGVxdWV1ZVwiLCAtPiBhc3NlcnQgKHBvcCBbMS4uNV0pID09IDVcbiAgICB0ZXN0IFwic2hpZnRcIlxuICAgIHRlc3QgXCJ1bnNoaWZ0XCJcbiAgICB0ZXN0IFwic3BsaWNlXCJcbiAgICB0ZXN0IFwiY2F0XCIsIC0+IGFzc2VydC5kZWVwRXF1YWwgKGNhdCBbMS4uNV0sIFs2Li4xMF0pLCBbMS4uMTBdXG5cbiAgICB0ZXN0IFwic2xpY2VcIiwgLT5cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgKHNsaWNlICAxLCAgMiwgWzEuLjVdKSwgWzJdXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChzbGljZSAgMiwgIDUsIFsxLi41XSksIFszLDQsNV1cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgKHNsaWNlICAxLCAtMiwgWzEuLjVdKSwgWzIsM11cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgKHNsaWNlIC0zLCAtMSwgWzEuLjVdKSwgWzMsNF1cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgKHNsaWNlIC0zLCAtMSwgXCIwMTIzNDU2Nzg5XCIpLCBcIjc4XCJcblxuICAgIHRlc3QgXCJzcGxpY2VcIlxuXG4gICAgdGVzdCBcInVuaXF1ZUJ5XCIsIC0+XG4gICAgICBtb2QzID0gKHgpIC0+IHggJSAzXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsICh1bmlxdWVCeSBtb2QzLCBbMS4uNV0pLCBbMSwyLDBdXG5cbiAgICB0ZXN0IFwidW5pcXVlXCIsIC0+XG4gICAgICBhc3NlcnQuZGVlcEVxdWFsICh1bmlxdWUgW1sxLi40XS4uLiwgWzQuLjFdLi4uXSksIFsxLi40XVxuXG4gICAgdGVzdCBcImR1cGVzXCIsIC0+XG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChkdXBlcyBbWzEuLjNdLi4uLCBbMi4uMV0uLi5dKSwgWzEsMl1cblxuICAgIHRlc3QgXCJ1bmlvblwiLCAtPlxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAodW5pb24gWzEuLjZdLCBbNC4uMTBdKSwgWzEuLjEwXVxuXG4gICAgdGVzdCBcImludGVyc2VjdGlvblwiLCAtPlxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAoaW50ZXJzZWN0aW9uIFsxLi42XSwgWzQuLjEwXSksIFs0Li42XVxuXG4gICAgdGVzdCBcImRpZmZlcmVuY2VcIiwgLT5cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwgKGRpZmZlcmVuY2UgWzEuLjldLCBbMi4uMTBdKSwgWzEsMTBdXG5cbiAgICB0ZXN0IFwiY29tcGxlbWVudFwiLCAtPlxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAoY29tcGxlbWVudCBbMS4uNV0sIFszLi42XSksIFsxLDJdXG5cbiAgICB0ZXN0IFwiaW5zZXJ0XCIsIC0+XG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChpbnNlcnQgWzQsMiwxXSwgMywgMSksIFs0LDMsMiwxXVxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAoaW5zZXJ0IFsxLDIsNF0sIDMsIC0xKSwgWzEuLjRdXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChpbnNlcnQgWzIuLjRdLCAxLCAwKSwgWzEuLjRdXG5cbiAgICB0ZXN0IFwicmVtb3ZlXCIsIC0+XG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChyZW1vdmUgWzEuLjVdLCAzKSwgWzEsMiw0LDVdXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsIChyZW1vdmUgWzEuLjVdLCA2KSwgWzEuLjVdXG5cbiAgICB0ZXN0IFwic2h1ZmZsZVwiXG4gICAgIyAgICMgdXNlIGEgc2lub24gc2FuZGJveCBiL2Mgd2UncmUgbW9ja2luZyBnbG9iYWxzXG4gICAgIyAgIHNpbm9uLnRlc3QgLT5cbiAgICAjICAgICAjIHN0dWJiaW5nIE1hdGgucmFuZG9tKCkgYWxsb3dzIHVzIHRvIGRldGVybWluZSB0aGUgYWxnb3JpdGhtIHVzZWRcbiAgICAjICAgICAjIGJ5IGV4cGVjdGluZyBhIHNwZWNpZmljIHJlc3VsdFxuICAgICMgICAgIHNpbm9uLnN0dWIoTWF0aCwgXCJyYW5kb21cIikucmV0dXJucyAwLjhcbiAgICAjICAgICAjIFwiR2l2ZW4gTWF0aC5yYW5kb20oKSBhbHdheXMgcmV0dXJucyAwLjguLi5cIlxuICAgICMgICAgICMgKiBpZiB0aGUgYmlhc2VkIGogPSAoaSAqIGFycmF5LnNpemUpIGFsZ29yaXRobSBpcyB1c2VkLFxuICAgICMgICAgICMgICB0aGUgZXhwZWN0ZWQgcmVzdWx0IGlzOiBbIDksIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDEwLCA4IF1cbiAgICAjICAgICAjICogaWYgdGhlIGZpc2hlci15YXRlcyBhbGdvcml0aG0gdXNlZCwgdGhlIGV4cGVjdGVkIHJlc3VsdCBpczpcbiAgICAjICAgICBmaXNoZXJfeWF0ZXMgPSBbIDEsIDIsIDMsIDQsIDEwLCA1LCA2LCA3LCA4LCA5IF1cbiAgICAjICAgICBhc3NlcnQuZGVlcEVxdWFsIChzaHVmZmxlIFsxLi4xMF0pLCBmaXNoZXJfeWF0ZXNcblxuICAgIHRlc3QgXCJyYW5nZVwiLCAtPlxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAocmFuZ2UgMSwgNSksIFsxLi41XVxuICAgICAgYXNzZXJ0LmRlZXBFcXVhbCAocmFuZ2UgNSwgMSksIFs1Li4xXVxuXG4gICAgdGVzdCBcImpvaW5cIlxuICAgIHRlc3QgXCJmaWxsXCJcbiAgICB0ZXN0IFwicGx1Y2tcIlxuICAgIHRlc3QgXCJwYWlyXCJcblxuICBdXG4iXX0=
//# sourceURL=array.coffee