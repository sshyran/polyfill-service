require('dotenv').load();
module.exports = function(config) {
  const customSauceLaunchers = {
    'chrome_46': {
      base: 'SauceLabs', browserName: 'chrome', version: '46', platform: 'Windows 7'},
    'chrome_42': {
      base: 'SauceLabs', browserName: 'chrome', version: '42', platform: 'Windows 7'},
    'chrome_35': {
      base: 'SauceLabs', browserName: 'chrome', version: '35', platform: 'OSX 10.11'},
    'chrome_30': {
      base: 'SauceLabs', browserName: 'chrome', version: '30', platform: 'Windows 7'},
    'firefox_41': {
      base: 'SauceLabs', browserName: 'firefox', version: '41', platform: 'Linux'},
    'firefox_33': {
      base: 'SauceLabs', browserName: 'firefox', version: '33', platform: 'Linux'},
    'firefox_30': {
      base: 'SauceLabs', browserName: 'firefox', version: '30', platform: 'OSX 10.11'},
    'firefox_20': {
      base: 'SauceLabs', browserName: 'firefox', version: '20', platform: 'Linux'},
    'ie_12': {
      base: 'SauceLabs', browserName: 'microsoftedge', version: '20.10240', platform: 'Windows 10'},
    'ie_11': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '11', platform: 'Windows 10'},
    'ie_10': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '10', platform: 'Windows 7'},
    'ie_9': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '9', platform: 'Windows 7'},
    'ie_8': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '8', platform: 'Windows XP'},
    'ie_7': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '7', platform: 'Windows XP'},
    'ie_6': {
      base: 'SauceLabs', browserName: 'internet explorer', version: '6', platform: 'Windows XP'},
    'safari_9': {
      base: 'SauceLabs', browserName: 'safari', version: '9.0', platform: 'OSX 10.11'},
    'safari_8': {
      base: 'SauceLabs', browserName: 'safari', version: '8.0', platform: 'OSX 10.10'},
    'safari_5.1': {
      base: 'SauceLabs', browserName: 'safari', version: '5.1', platform: 'Windows 7'},
    'android_4.4': {
      base: 'SauceLabs', browserName: 'android', version: '4.4', platform: 'linux'},
    'android_4.3': {
      base: 'SauceLabs', browserName: 'android', version: '4.3', platform: 'linux'},
    'android_4.2': {
      base: 'SauceLabs', browserName: 'android', version: '4.2', platform: 'linux'},
    'android_4.1': {
      base: 'SauceLabs', browserName: 'android', version: '4.1', platform: 'linux'},
    'ios_saf_9.1': {
      base: 'SauceLabs', browserName: 'iphone', version: '9.1', platform: 'OSX 10.10'}
  }

  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './node_modules/mocha/mocha.js',
      'polyfills/*/polyfill.js',
      'polyfills/*/tests.js',
    ],
    preprocessors: {
      'polyfills/*/tests.js': [ 'webpack' ]
    },
    webpack: {
      node : {
        fs: 'empty'
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    customLaunchers: customSauceLaunchers,
    browsers: Object.keys(customSauceLaunchers),
    reporters: ['dots', 'saucelabs'],
    concurrency: 2,
    browserNoActivityTimeout: 1000 * 60 * 5
  })
}
