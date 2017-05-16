angular.module('todoList').
controller('login-controller', function($scope, $http, $auth){
    $scope.authenticationProcess = function(){
      $auth.submitLogin($scope.loginForm)
      .then(function(user){
        console.log("hello");
        console.log(user);
      }).catch(function(error){
        console.log("Morning");
        console.log(error)
      });
    }
  }
)
