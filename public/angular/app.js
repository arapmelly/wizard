


var app = angular.module('app', 
  [
  'ngRoute',
  'ngDraggable', 
  'ui.bootstrap',
  '720kb.datepicker',
  'levelCtrl',
  'levelService',
  'careerCtrl',
  'careerService',
  'sampleCtrl',
  'sampleService',
  'templateCtrl',
  'templateService',
  'resumeCtrl',
  'resumeService',
  'editorCtrl',
  'objectiveCtrl',
  'objectiveService',
  'experienceCtrl',
  'experienceService',
  'skillCtrl',
  'skillService',
  'achievementCtrl',
  'achievementService',
  'awardCtrl',
  'awardService',
  'publicationCtrl',
  'publicationService',
  'referenceCtrl',
  'referenceService',
  'educationCtrl',
  'educationService',
  'certificationCtrl',
  'certificationService',
  'scaffoldCtrl',
  'scaffoldService'
  ]);


app.constant('ENDPOINT_URI', 'http://localhost/laracore/public');




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/', {
        templateUrl: 'views/partials/main.html'
      }).
       when('/dashboard', {
        templateUrl: 'views/partials/main.html'
      }).
       when('/scaffold', {
        templateUrl: 'views/partials/scaffold.html',
        controller: 'scaffoldController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);







app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/levels', {
        templateUrl: 'views/partials/level.html',
        controller: 'levelController'
      });
  }]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/careers', {
        templateUrl: 'views/partials/career.html',
        controller: 'careerController'
      });
  }]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/samples', {
        templateUrl: 'views/partials/sample.html',
        controller: 'sampleController'
      });
  }]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/templates', {
        templateUrl: 'views/partials/template.html',
        controller: 'templateController'
      });
  }]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/resumes', {
        templateUrl: 'views/partials/resume.html',
        controller: 'resumeController'
      });
  }]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/resumeeditor/:resumeId', {
        templateUrl: 'views/partials/resumebuilder.html',
        controller: 'editorController'
      });
  }]);





app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/references', {
        templateUrl: 'views/partials/reference.html',
        controller: 'referenceController'
      });
  }]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
       when('/experiences', {
        templateUrl: 'views/partials/experience.html',
        controller: 'experienceController'
      });
  }]);


