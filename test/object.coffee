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
    # Define a prototype with a property that uses JavaScript's native getter and setter.
    class A
      properties @::,
        foo:
          get: -> @_foo
          set: (v) -> @_foo = v

    # Test with an instance of "A".
    a = new A
    a.foo = "bar"
    assert a._foo == "bar"  # Proves the setter was used to create and set "_foo".

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
    fruits =
      apples: 3
      oranges: null
      mangos: 12

    f = (key, value) -> value?            # Only if the value is truthy
    g = (key, value) -> value % 2 == 1    # Only if there is an odd number
    h = (key, value) -> key == "mangos"   # Realy likes mangos?

    assert.deepEqual (pick f, fruits), {apples: 3, mangos: 12}
    assert.deepEqual (pick g, fruits), {apples: 3}
    assert.deepEqual (pick h, fruits), {mangos: 12}

  context.test "omit", ->
    fruits =
      apples: 3
      oranges: null
      mangos: 12

    f = (key, value) -> value?            # Only if the value is falsey
    g = (key, value) -> value % 2 == 0    # Only if there is an even number
    h = (key, value) -> key == "mangos"   # Realy hates mangos?

    assert.deepEqual (omit f, fruits), {oranges: null}
    assert.deepEqual (omit g, fruits), {apples: 3}
    assert.deepEqual (omit h, fruits), {apples: 3, oranges: null}

  context.test "query", ->
    princess =
      name: "Aurora"
      alias:
        name: "Sleeping Beauty"
      dwarves: 7
      enemy: "Maleficent"

    # Query will find an object within a larger object.
    assert query({name: "Aurora"}, princess) == true
    assert query({name: "Belle"}, princess) == false

    # But query cannot find the sub-object within a nested structure.
    findBeauty = query {name: "Sleeping Beauty"}
    assert findBeauty(princess) == false
    assert findBeauty(princess.alias) == true

    # If the "search-term" or target are not an objects, query performs a deepEqual comparison
    princesses = ["Ariel", "Aurora", "Belle", "Cinderella", "Jasmine", "Merida",
      "Mulan", "Pocahontas", "Rapunzel", "Tiana", "Snow White"]

    assert query({name: "Aurora"}, princesses) == false
    assert query("Aurora", princesses) == false
    assert query(11, princesses.length) == true

  context.test "toJSON", ->
    mage =
      vitals:
        hp: 50
        mp: 100
      attributes:
        stamina: 10
        strength: 10
        intelligence: 50
        agility: 20

    string = toJSON mage
    pretty = toJSON mage, true

    assert string == '{"vitals":{"hp":50,"mp":100},"attributes":{"stamina":10,"strength":10,"intelligence":50,"agility":20}}'
    assert pretty,
    '{
      "vitals": {
        "hp": 50,
        "mp": 100
      },
      "attributes": {
        "stamina": 10,
        "strength": 10,
        "intelligence": 50,
        "agility": 20
      }
    }'


  context.test "fromJSON", ->
    mage = fromJSON '{"vitals":{"hp":50,"mp":100},"attributes":{"stamina":10,"strength":10,"intelligence":50,"agility":20}}'

    assert mage,
      vitals:
        hp: 50
        mp: 100
      attributes:
        stamina: 10
        strength: 10
        intelligence: 50
        agility: 20
