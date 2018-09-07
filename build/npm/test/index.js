"use strict";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBQSxHQUFBLEtBQUEsUUFBQTs7QUFBQSxVQUFVLEFBQU8sUUFBQyxBQUFLOztBQUV2QixJQUFHLEFBQU8sUUFBQyxBQUFSLFdBQWtCLEFBQXJCO0FBQ0UsWUFBVSxDQUNSLEFBRFEsU0FFUixBQUZRLFdBR1IsQUFIUSxVQUlSLEFBSlEsV0FLUixBQUxRLFVBTVIsQUFOUSxRQU9SLEFBUFEsQUFEWjs7O0FBWUEsS0FBQSxzQ0FBQTttQkFBQTs7QUFBQyxBQUFRLFVBQUEsS0FBSyxBQUFMLE1BQUEsQUFBUixBQUFEIiwic291cmNlc0NvbnRlbnQiOlsidGFyZ2V0cyA9IHByb2Nlc3MuYXJndlsyLi5dXG5cbmlmIHRhcmdldHMubGVuZ3RoID09IDBcbiAgdGFyZ2V0cyA9IFtcbiAgICBcImFycmF5XCJcbiAgICBcIm51bWVyaWNcIlxuICAgIFwib2JqZWN0XCJcbiAgICBcInByb21pc2VcIlxuICAgIFwic3RyaW5nXCJcbiAgICBcInR5cGVcIlxuICAgIFwidXRpbGl0eVwiXG4gIF1cblxuIyBUT0RPOiBob3cgdG8gc2V0IHVwIHRhcmdldHRlZCB0ZXN0cyB2aWEgYnVpbGQtdG9vbHM/XG4ocmVxdWlyZSBcIi4vI3t0YXJnZXR9XCIpIGZvciB0YXJnZXQgaW4gdGFyZ2V0c1xuIl19
//# sourceURL=index.coffee