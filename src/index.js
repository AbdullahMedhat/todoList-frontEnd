var app = angular.module('todoList', ['ngRoute', 'ng-token-auth']);

app.config(function($routeProvider, $locationProvider, $authProvider){
  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
    });
  
    // $locationProvider.hashPrefix('');
  $routeProvider
  .when('/login', {
    templateUrl: 'app/login/login.html',
    // template: '<div>here</div>',
    // controller: 'loginCtrl'
  })
  .when('/register', {
    templateUrl: 'app/registration/registration.html',
    // template: '<div>here</div>',
    // controller: 'loginCtrl'
  })
  .when('/todolists', {
    templateUrl: 'app/todolists/todolists.html',
    // template: '<div>here</div>',
    // controller: 'loginCtrl'
  })
  .when('/todolists/:id', {
    templateUrl: 'app/todos/todos.html',
    // template: '<div>here</div>',
    // controller: 'loginCtrl'
  })
  $locationProvider.html5Mode(true);
})
