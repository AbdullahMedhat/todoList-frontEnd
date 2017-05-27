angular.module('todoList')
  .controller('signoutCtrl', function($location, $rootScope, $scope, $auth) {
    $scope.handleLogoutBtnClick = function() {
      $auth.signOut().then(function(){
        $location.path('/login')
      })
  }});