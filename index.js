const sls = require('serverless-http')
const binaryMimeTypes = require('./src/binaryMimeTypes')

const server = require('./src/server')

module.exports.server = sls(server, {
  binary: binaryMimeTypes,
})
