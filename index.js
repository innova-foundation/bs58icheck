'use strict'

var createHash = require('create-hash')
var bs58dcheckBase = require('./base')
var tribushash = require('tribushash-js')

// TRIBUSHASH(TRIBUS(buffer))
function tribus(buffer) {
  return Buffer(tribushash.tribus(buffer, 1, 1))
}

module.exports = bs58dcheckBase(tribus)
