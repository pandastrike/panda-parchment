{lift} = require "when/generator"
{isGeneratorFunction} = require "./type"

async = (f) -> if isGeneratorFunction f then lift f else f
call = (f) -> do async f

module.exports = {async, call}
