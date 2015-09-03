assert = require "assert"
Amen = require "amen"

Amen.describe "Object functions", (context) ->

  {include, extend, merge, clone,
    properties, property, delegate, bind, detach,
    has, keys, values, pairs, pick, omit, query,
    toJSON, fromJSON} = require "../src/object"

  {compose} = require "fairmont-core"
  {deepEqual} = require "../src/util"

  context.test "include && extend", ->
    stats = {hp: 50, mp: 100}

    include stats, {stamina: 10, strength: 10}, {intelligence: 50, agility: 20}
    assert.deepEqual Object.keys(stats), ["hp", "mp", "stamina", "strength", "intelligence", "agility"]
    include stats, {stamina: 50}
    assert stats.stamina == 50

    stats = {hp: 50, mp: 25}
    extend stats, {stamina: 10, strength: 10}, {intelligence: 50, agility: 20}
    assert.deepEqual Object.keys(stats), ["hp", "mp", "stamina", "strength", "intelligence", "agility"]
    assert.deepEqual Object.keys(stats), ["hp", "mp", "stamina", "strength", "intelligence", "agility"]

  context.test "merge", ->
    stats = merge {hp: 50, mp: 100}, {stamina: 10, strength: 10}, {intelligence: 50, agility: 20}
    assert.deepEqual Object.keys(stats), ["hp", "mp", "stamina", "strength", "intelligence", "agility"]

  context.test "clone", ->
    person =
      name: "Steve Jobs"
      address:
        street: "1 Infinite Loop"
        city: "Cupertino, CA"
        zip: 95014
      birthdate: new Date 'Feb 24, 1955'
      regex: /foo.*/igm

    assert.notEqual  (clone person), person
    assert.deepEqual (clone person), person

    assert (clone 1) == 1


  context.test "property", ->
    a = { foo: 1, bar: 2, baz: { foo: 2 }}
    assert (property "foo", a) == 1
    bazFoo = (compose (property "foo"), (property "baz"))
    assert (bazFoo a) == 2

  context.test "delegate", ->
    a =
      foo: -> this.bar()
      bar: -> "This is a"

    b =
      bar: -> "This is b"

    assert a.foo() == "This is a"
    delegate a, b
    assert a.foo() == "This is b"
    assert a.bar() == "This is b"

  context.test "bind", ->
    this.x = 9
    foo =
      x: 81
      getX: -> this.x

    assert foo.getX() == 81     # accesses foo's internal context

    getX = foo.getX
    assert getX() == 9          # "this" refers to the global context

    boundGetX = bind getX, foo
    assert boundGetX() == 81    # Now, boundGetX's "this" is bound to foo's context

    foo.x = 11
    assert boundGetX() == 11    # And the context is *shared*, not copied.

  context.test "detach", ->
    # Establishing an instance of prototype.
    foo = ->
    foo::x = 81
    foo::f = (y) -> this.x / y

    # Establishing secondary contexts.
    this.x = 9
    bar = x: 36

    # Once detached, we may apply the other contexts to "f".
    g = detach foo::f
    assert (g this, 3) == 3
    assert (g bar, 3) == 12


    # Detaching reflective functions creates a function that only needs one argument (a context).
    trim = detach String::trim
    assert (trim "  panda    ") == "panda"

  context.test "properties", ->
    class A
      properties @::,
        foo:
          get: -> @_foo
          set: (v) -> @_foo = v

    a = new A
    a.foo = "bar"
    assert a.foo == "bar"
    assert a._foo?

  context.test "has", ->
    panda =
      color: "black and white"
      limbs: 4

    fish =
      color: "silver"
      limbs: 0

    car =
      color: "red"
      wheels: 4

    assert (has "limbs", panda) == true
    assert (has "limbs", fish) == true
    assert (has "limbs", car) == false

    # has is curried, so we can create a function that always checks for the same property.
    wheelCheck = has "wheels"
    assert (wheelCheck panda) == false
    assert (wheelCheck fish) == false
    assert (wheelCheck car) == true

  context.test "keys", ->
    panda =
      c: 3
      v: 1
      q: 12
      t: 10

    assert.deepEqual (keys panda), ["c", "v", "q", "t"]

  context.test "values", ->
    panda =
      c: 3
      v: 1
      q: 12
      t: 10

    assert.deepEqual (values panda), [3, 1, 12, 10]

  context.test "pairs", ->
    assert deepEqual (pairs {a: 1, b: 2, c: 3}),
      [["a", 1], ["b", 2], ["c", 3]]

    obj =
      a:
        foo: 100
        bar: 200
      b: 2
      c: 3

    assert.deepEqual (pairs obj), [ [ 'a', { foo: 100, bar: 200 } ], [ 'b', 2 ], [ 'c', 3 ] ]


  context.test "pick", ->
    assert deepEqual (pick ((k, v) -> v?), {a: 1, b: null, c: 3}),
      {a :1, c: 3}

  context.test "omit", ->
    assert deepEqual (omit ((k, v) -> v?), {a: 1, b: null, c: 3}),
      {b: null}

  context.test "query", ->
    snowWhite = name: "Snow White", dwarves: 7, enemies: [ "Evil Queen" ]
    assert query {name: "Snow White"}, snowWhite
    assert query {enemies: [ "Evil Queen" ]}, snowWhite
    assert ! query {name: "Sleeping Beauty"}, snowWhite
    assert ! query {enemies: [ "Maleficent" ]}, snowWhite

  context.test "toJSON"

  context.test "fromJSON"
