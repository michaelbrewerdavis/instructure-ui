/* eslint no-var: 0 */
'use strict'

var path = require('path')
var merge = require('lodash.merge')

function getConfig () {
  var ROOT = process.cwd()
  var pkg = require(path.join(ROOT, 'package.json'))
  var config = {
    buildPath: '__build__',
    library: {
      packageName: pkg.name,
      name: 'InstUI',
      main: pkg.main,
      prefix: 'ic',
      version: pkg.version,
      projectUrl: pkg.homepage,
      author: pkg.author,
      docsUrl: 'http://instructure.github.io/instructure-ui/'
    },
    app: {
      title: 'Instructure UI Component Library'
    },
    docs: {
      files: 'docs/*.md'
    },
    components: {
      files: 'lib/components/*/index.js'
    },
    theme: {
      files: 'lib/components/*/theme/*.js',
      config: 'lib/theme/config'
    },
    tests: {
      files: 'lib/**/*.test.js'
    }
  }

  return merge({}, config, {
    rootPath: ROOT,
    docsAppPath: path.resolve(__dirname, '../../docs/app'),
    distPath: path.join(ROOT, config.buildPath, '/dist'),
    docsPath: path.join(ROOT, config.buildPath, '/docs')
  })
}

module.exports = getConfig()
