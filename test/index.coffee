targets = process.argv[2..]

if targets.length == 0
  targets = [
    "array"
    "async"
    "numeric"
    "object"
    "string"
    "type"
    "util"
  ]

(require "./#{target}") for target in targets
