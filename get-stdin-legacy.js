'use strict'
var process = require('process')

module.exports = function (cb) {
  var ret = ''

  process.stdin.setEncoding('utf8')

  process.stdin.on('data', function (data) {
    ret += data
  })

  process.stdin.on('end', function () {
    cb(ret)
  })
}
