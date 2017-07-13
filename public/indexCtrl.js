angular.module("app")
  .controller("userCtrl", function($scope, dbservice) {
    dbservice.getusers()
    .then(function(result) {
      $scope.user = result;
    })
    console.log("Scope#1 works");
    dbservice.life()
    .then(function(result) {
      $scope.life = result;
    })
    console.log("Scope#2 works");
    this.user = $scope.user;

  })
