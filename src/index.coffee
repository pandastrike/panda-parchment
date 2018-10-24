Array = require "./array"
Numeric = require "./numeric"
Object = require "./object"
Promise = require "./promise"
String = require "./string"
Type = require "./type"
Time = require "./time"

{include} = Object

include module.exports, Array, Numeric, Object,
  Promise, String, Type, Time
