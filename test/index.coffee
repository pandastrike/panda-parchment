targets = process.argv[2..]

if targets.length == 0
  targets = [
    "array"
    "numeric"
    "object"
    "promise"
    "string"
    "type"
    "utility"
  ]

# TODO: how to set up targetted tests via build-tools?
(require "./#{target}") for target in targets
