// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
exports.config = {
  SELENIUM_PROMISE_MANAGER: false,

  framework: 'jasmine',
  capabilities: {
/*     browserName: 'chrome',  //laeuft
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
      // nur damit gehts bei chrome  -- orig: 800,600
    } */
	browserName: 'firefox',
	'moz:firefoxOptions': {
         prefs: {'privacy.window.name.update.enabled': false}
    }
 
  },
  suites: {
	TestcasesForButtons: 'AddActions.js',
	DoesItRun: 'old.js'
  },
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: "pretty",
        },
      })
    )
    var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));
    }  
};
