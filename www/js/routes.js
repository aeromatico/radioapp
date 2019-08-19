angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.live', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/live.html',
        controller: 'liveCtrl'
      }
    }
  })

  .state('menu.informaciN', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informaciN.html',
        controller: 'informaciNCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('website', {
    url: '/web',
    templateUrl: 'templates/website.html',
    controller: 'websiteCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')


});