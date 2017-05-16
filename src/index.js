var app = angular.module('todoList', ['ngRoute', 'ng-token-auth']);

app.config(function($routeProvider, $locationProvider, $authProvider){
    // $locationProvider.hashPrefix('');

  $authProvider.configure({
        apiUrl: 'http://localhost:3000/api',
        validateOnPageLoad: false
      });

  $routeProvider.when('/login', {
    templateUrl: 'app/login/login.html',
    // template: '<div>here</div>',
    controller: 'login-controller'
  })

  $locationProvider.html5Mode(true);

   // .when('/', {
   //    templateUrl: 'index.html',
   //    controller: 'loginController'
   //  })
   // .otherwise({ redirectTo: '/' });
})
