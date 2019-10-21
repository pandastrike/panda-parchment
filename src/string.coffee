import {curry, compose} from "panda-garden"

toString = (x) -> x.toString()

toUpper = (s) -> s.toUpperCase()

toLower = (s) -> s.toLowerCase()

plainText = (string) ->
  string
    .replace( /^[A-Z]/g, (c) -> c.toLowerCase() )
    .replace( /[A-Z]/g, (c) -> " #{c.toLowerCase()}" )
    .replace( /\W+/g, " " )

capitalize = (string) ->
  string[0].toUpperCase() + string[1..]

titleCase = (string) ->
  string
  .toLowerCase()
  .replace(/^(\w)|\W(\w)/g, (char) -> char.toUpperCase())

camelCase = (string) ->
  string.toLowerCase().replace(/(\W+\w)/g, (string) ->
    string.trim().toUpperCase())

underscored = (string) -> plainText(string).replace(/\W+/g, "_")

dashed = (string) -> plainText(string).replace(/\W+/g, "-")

htmlEscape = do ->

  map =
    "&": "&amp;"
    "<": "&lt;"
    ">": "&gt;"
    '"': '&quot;'
    "'": '&#39;'
    "/": '&#x2F;'

  entities = Object.keys( map )
  re = new RegExp( "#{entities.join('|')}", "g" )
  (string) -> string.replace( re, (s) -> map[s] )

trim = (s) -> s.trim()

split = curry (re, s) -> s.split re

w = compose (split /\s+/), trim

blank = (s) -> s.constructor == String && s.length == 0

match = curry (pattern, string) -> string.match pattern

isMatch = curry (pattern, string) -> pattern.test string

replace = curry (pattern, replacement, string) ->
  string.replace pattern, replacement

export {toString, toUpper, toLower, capitalize,
  titleCase, camelCase, underscored, dashed, plainText,
  htmlEscape, trim, split, w, blank, match, isMatch, replace}
