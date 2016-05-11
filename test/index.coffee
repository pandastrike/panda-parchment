targets = process.argv[2..]

if targets.length == 0
  targets = [
    "array"
    "base64-words"
    "hash"
    "numeric"
    "object"
    "promise"
    "string"
    "type"
    "util"
  ]

(require "./#{target}") for target in targets
