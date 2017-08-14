//ng-app = student
//[] for injecting other services
var myapp = angular.module('student', []);
//api loacation
var host = 'http://student.webdxd.com/api/';
//user input modify model(through controller)
//function(service,service), angular built-in service
myapp.controller('studentController', function($http, $scope){
  $scope.students = [];
  $http.get(host + 'student').success(function(response){
    console.log('fhj');
    $scope.students = response;
  })
//get student details
  $scope.getStudentDetail = function(sid){
  $http.get(host + 'student/' + sid).success(function(response){
    $scope.clickedStudent = response;
  })
}

$scope.createNewStudent = function(){
  //post(url,data)
  $http.post(host+'student', $scope.newStudent
).success(function(response){
  if(response.isNew){
    //push data into students
  $scope.students.push(response.data);
  $scope.newStudent=undefined;
}else{
  for(var i=0; i<$scope.students.length; i++){
    if($scope.students[i]._id ===response.data._id){
      $scope.students[i] = response.data;
      $scope.clickedStudent = response.data;
    }
  }
}
$scope.newStudent = undefined;
})
}

$scope.showEditForm = function(){
  $scope.newStudent = $scope.clickedStudent;
  $scope.clickedStudent=undefined;
}

$scope.deleteStudent = function(sid){
  $http.delete(host + 'student/' + sid).success(function(responese){

  })
}

})
