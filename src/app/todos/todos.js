angular.module('todoList').controller(
  'todosCtrl', function($scope, $http, $auth, $location){
    console.log("starting");  
    $http.get('http://localhost:3000/todos.json')
    .then(function(response){
      console.log("success");
      console.log(response.data);
      $scope.todos = response.data;
  }).catch(function(err) {
      console.log("err");
      console.log(err);
  });

  $scope.create = function(){
    $http.post('http://localhost:3000/todos/',{todo: $scope.todo}).then(function(response){
      $scope.todos.push(response.data);
      $scope.todo={};
    })
  }

  $scope.deletetodo = function(todo){
  $http.delete('http://localhost:3000/todos/' + todo.id)
  .then(function(response){
    var indexofTask = $scope.todos.indexOf(todo);
    $scope.todos.splice(indexofTask, 1);
    console.log("deleted");
    })
  }

$scope.done = function(todo){
  // todo.done=true
  $http.put('http://localhost:3000/todos/' + todo.id, {todo: todo}).then(function(response){
    // var indexofTask = $scope.todos.indexOf(todo);
  })
}

$scope.edit = function(todo){
  $http.put('http://localhost:3000/todos/' + todo.id, {todo: todo}).
  then(function(response){

  })
}

$scope.donestatus = function(todo){
  if (todo.done) {
    return 'done';
  }
  return '';
}

});


