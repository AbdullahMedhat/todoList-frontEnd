angular.module('todoList').controller(
  'adminLoginCtrl', function($scope, $http, $auth, $location){
    $scope.authenticationProcess = function(){
      $auth.submitLogin($scope.loginForm)
      .then(function(user){
        // console.log(user)
        console.log("Sign in successfully.")
        $location.path('/todolists').replace();
      }).catch(function(error){
        console.log(error)
        console.log("failed to get data!!!")
      });
    }
  }
)