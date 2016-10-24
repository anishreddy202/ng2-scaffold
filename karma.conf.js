
var webpackConfig = require('./config/webpack.test.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    files: [ { pattern: './config/spec-bundle.js', watched: false } ],
    exclude: [],
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack'] },
    reporters: ["mocha", "coverage", "karma-remap-istanbul"],

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true, quiet: true },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'json',
        dir: 'coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      }]
    },

    remapIstanbulReporter: {
      src: 'coverage/json/coverage-final.json',
      reports: {
        lcovonly: 'coverage/json/lcov.info',
        html: 'coverage/html',
        'text': null
      },
      timeoutNotCreated: 1000,
      timeoutNoMoreFiles: 1000
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}
