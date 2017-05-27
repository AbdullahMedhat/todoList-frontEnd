angular.module('todoList')
  .controller('registrationCtrl', function($scope, $auth, $location) {
    console.log("starting");
    $scope.handleRegBtnClick = function() {
      console.log("starting2")
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          console.log(resp);
          console.log("registered");
          $location.path('/login').replace();
        })
        .catch(function(resp) {
          console.log("error")
        });
    };
  });