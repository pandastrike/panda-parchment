targets = process.argv[2..]

if targets.length == 0
  targets = [
    "array"
    "hash"
    "numeric"
    "object"
    "promise"
    "string"
    "type"
    "util"
  ]

(require "./#{target}") for target in targets
