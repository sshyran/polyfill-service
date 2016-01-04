require('dotenv').load();
module.exports = function(config) {
  const customBsLaunchers = {
    // bs_browser_1: {base: 'BrowserStack', os:'Windows', os_version:'XP', browser:'safari', browser_version:'5.1'},
    // bs_browser_6: {base: 'BrowserStack', os:'OS X', os_version:'Snow Leopard', browser:'safari', browser_version:'5.1'},
    // bs_browser_2: {base: 'BrowserStack', os:'OS X', os_version:'Mountain Lion', browser:'safari', browser_version:'6.2'},
    // bs_browser_5: {base: 'BrowserStack', os:'OS X', os_version:'Mavericks', browser:'safari', browser_version:'7.1'},
    // bs_browser_4: {base: 'BrowserStack', os:'OS X', os_version:'Yosemite', browser:'safari', browser_version:'8.0'},
    // bs_browser_3: {base: 'BrowserStack', os:'OS X', os_version:'El Capitan', browser:'safari', browser_version:'9.0'},
    bs_browser_7: {base: 'BrowserStack', os:'Windows', os_version:'10', browser:'edge', browser_version:'12.0'},
    // bs_browser_8: {base: 'BrowserStack', os:'Windows', os_version:'XP', browser:'ie', browser_version:'6.0'},
    // bs_browser_9: {base: 'BrowserStack', os:'Windows', os_version:'XP', browser:'ie', browser_version:'7.0'},
    // bs_browser_0: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'ie', browser_version:'8.0'},
    // bs_browser_a: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'ie', browser_version:'9.0'},
    // bs_browser_b: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'ie', browser_version:'10.0'},
    // bs_browser_c: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'ie', browser_version:'11.0'},
    // bs_browser_e: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'chrome', browser_version:'25.0'},
    // bs_browser_f: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'chrome', browser_version:'35.0'},
    bs_browser_g: {base: 'BrowserStack', os:'Windows', os_version:'7', browser:'chrome', browser_version:'46.0'},
    // bs_browser_h: {base: 'BrowserStack', os:'Windows', os_version:'8.1', browser:'firefox', browser_version:'26.0'},
    // bs_browser_i: {base: 'BrowserStack', os:'Windows', os_version:'8.1', browser:'firefox', browser_version:'36.0'},
    bs_browser_j: {base: 'BrowserStack', os:'Windows', os_version:'8.1', browser:'firefox', browser_version:'42.0'},
    // bs_browser_k: {base: 'BrowserStack', os:'Windows', os_version:'XP', browser:'opera', browser_version:'12.15'},
    // bs_browser_l: {base: 'BrowserStack', device:'iPhone 6', os:'ios', os_version:'8.3', browser:'iphone'},
    // bs_browser_m: {base: 'BrowserStack', device:'iPhone 5S', os:'ios', os_version:'7.0', browser:'iphone'},
    // bs_browser_n: {base: 'BrowserStack', device:'iPhone 4S (6.0)', os:'ios', os_version:'6.0', browser:'iphone'},
    // bs_browser_o: {base: 'BrowserStack', device:'iPhone 4S', os:'ios', os_version:'5.1', browser:'iphone'},
    // bs_browser_p: {base: 'BrowserStack', device:'Google Nexus 4', os:'android', os_version:'4.2', browser:'android'},
    // bs_browser_q: {base: 'BrowserStack', device:'HTC One X', os:'android', os_version:'4.0', browser:'android'},
    // bs_browser_r: {base: 'BrowserStack', device:'Samsung Galaxy S3', os:'android', os_version:'4.1', browser:'android'},
    // bs_browser_s: {base: 'BrowserStack', device:'Google Nexus 7', os:'android', os_version:'4.1', browser:'android'},
    // bs_browser_t: {base: 'BrowserStack', device:'HTC One M8', os:'android', os_version:'4.4', browser:'android'},
    // bs_browser_u: {base: 'BrowserStack', device:'Google Nexus 5', os:'android', os_version:'5.0', browser:'android'}
  }

  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      // './node_modules/mocha/mocha.js',
      // 'polyfills/*/polyfill.js',
      'polyfills/*/tests.js',
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    browserStack: {
      username: process.env.BROWSER_STACK_USERNAME,
      accessKey: process.env.BROWSER_STACK_ACCESS_KEY
    },

    singleRun: true,
    customLaunchers: customBsLaunchers,
    browsers: Object.keys(customBsLaunchers),
    reporters: ['dots'],
    concurrency: 2,
    browserNoActivityTimeout: 1000 * 60 * 5,
    pollingTimeout: 10000
  })
}
