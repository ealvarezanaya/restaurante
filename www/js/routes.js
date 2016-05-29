angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.beneficios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beneficios.html',
        controller: 'beneficiosCtrl'
      }
    }
  })

  .state('menu.planAlimenticio', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planAlimenticio.html',
        controller: 'planAlimenticioCtrl'
      }
    }
  })

  .state('menu.rutinas', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rutinas.html',
        controller: 'rutinasCtrl'
      }
    }
  })

  .state('menu.control', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/control.html',
        controller: 'controlCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});