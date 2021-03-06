const path = require('path')
const glob = require('glob')
const Code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()

global.describe = lab.describe
global.it = lab.it
global.before = lab.before
global.beforeEach = lab.beforeEach
global.after = lab.after
global.afterEach = lab.afterEach
global.expect = Code.expect

global.fromRoot = requirePath => {
  return path.normalize(path.join(__dirname, '..', requirePath))
}

global.fromSrc = requirePath => {
  return fromRoot(`src/${requirePath}`)
}

global.resource = requirePath => {
  return fromRoot(`test/resources/${requirePath}`)
}

const tests = glob.sync(path.join(__dirname, '/!(node_modules)/**/**.spec.js'))
tests.forEach(fullPath => require(fullPath))
