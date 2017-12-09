"use strict";

(function () {
  var i, len, target, targets;

  targets = process.argv.slice(2);

  if (targets.length === 0) {
    targets = ["array", "numeric", "object", "promise", "string", "type", "utility"];
  }

  for (i = 0, len = targets.length; i < len; i++) {
    target = targets[i];
    // TODO: how to set up targetted tests via build-tools?
    require(`./${target}`);
  }
}).call(undefined);