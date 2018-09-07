Array = require "./array"
Numeric = require "./numeric"
Object = require "./object"
Promise = require "./promise"
String = require "./string"
Type = require "./type"
Util = require "./utility"

{include} = Object

include module.exports, Array, Numeric, Object,
  Promise, String, Type, Util
