import assert from "assert"
import {test, print} from "amen"

import {promise, resolve, follow, reject, all} from "../src/promise"

do -> print await test "promise helpers"
