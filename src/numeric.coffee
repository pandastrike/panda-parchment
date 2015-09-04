{curry, partial, negate} = require "fairmont-core"

gte = curry (x, y) -> x >= y
lte = curry (x, y) -> x <= y
gt = curry (x, y) -> x > y
lt = curry (x, y) -> x < y

add = curry (x, y) -> x + y
sub = curry (x, y) -> x - y
mul = curry (x, y) -> x * y
div = curry (x, y) -> x / y
mod = curry (x, y) -> x % y == 0

even = mod 2
odd = negate even

{min, max, abs, pow} = Math

module.exports = {gt, lt, gte, lte, add, sub, mul, div, mod,
  even, odd, min, max, abs}
