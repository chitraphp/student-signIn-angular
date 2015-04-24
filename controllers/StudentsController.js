studentsSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
  // $scope.makePresence = function (student) {
  //     student.presence = true;
  // }
});
