angular.module('todoList').controller(
  'todolistsCtrl', function($scope, $http, $auth, $location){
    console.log("starting");  
    $http.get('http://localhost:3000/todolists.json')
    .then(function(response){
      console.log("success");
      console.log(response.data);
      $scope.todolists = response.data;
  }).catch(function(err) {
      console.log("erraaa");
      console.log(err);
  });
  $scope.deletetodolist = function(todolist){
  $http.delete('http://localhost:3000/todolists/' + todolist.id)
  .then(function(response){
    var indexofTask = $scope.todolists.indexOf(todolist);
    $scope.todolists.splice(indexofTask, 1);
    console.log("deleted");
    })
  }
})