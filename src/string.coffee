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

w = (string) -> string.trim().split /\s+/

blank = (s) -> s.length == 0

match = curry (pattern, string) -> pattern.test string

module.exports = {toString, toUpper, toLower, capitalize,
  titleCase, camelCase, underscored, dashed, plainText,
  htmlEscape, w, blank, match}
