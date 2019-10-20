import "source-map-support/register"
import {success} from "amen"

targets = process.argv[2..]

if targets.length == 0
  targets = [
    # "array"
    # "array-advanced"
    "clone"
    "equal"
    # "numeric"
    # "object"
    # "object-advanced"
    # "promise"
    # "string"
    # "type"
    # "time"
  ]

# TODO: how to set up targetted tests via build-tools?
(require "./#{target}") for target in targets

setExitStatus = -> process.exit if success then 0 else 1

setTimeout setExitStatus, 1000
