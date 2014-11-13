module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
      'app/components/angular/angular.js',
      'app/components/angular-route/angular-route.js',
      'app/components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/**/*.js'
    ],

    exclude : [
      'app/**/*.min.js',
      'app/**/*-debug.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
