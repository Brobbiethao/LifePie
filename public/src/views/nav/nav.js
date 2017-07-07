angular.module("app").directive("navDir", function() {
  console.log("navjs is listening")
  return {
     templateUrl: "./src/views/nav/nav.html"
  //   , scope: {
  //   }
  //   , controller: function($scope, $state){
  //     loginService.isLoggedin().then(res=>{
  //       $scope.isLoggedin = res.data.isLoggedin
  //     })
  //     $scope.logout = function(){
  //       $scope.isLoggedin = false;
  //       loginService.loggedIn = false;
  //     }
  //
  //   }
  //   , link: function(scope, element, attrs) {
  //
  //   }
  }
})
