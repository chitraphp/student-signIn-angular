var studentsSignIn = angular.module('studentsSignIn', ['ui.router']);

studentsSignIn.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signIn', {
    url: "/signIn",
    templateUrl: "partials/sign-in.html",
    controller: 'StudentsCtrl'
  });

  // $stateProvider.state('presence', {
  //   url: "/presence",
  //   templateUrl: "partials/presence.html",
  //   controller: 'StudentsCtrl'
  // });

});
