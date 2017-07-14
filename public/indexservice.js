angular.module("app")
.service("dbservice", function($http) {
  console.log("Services are up");

  this.getusers = function(){
    return $http.get('/api/allusers')
    .then(function(res, req, next) {
      return res.data;
    })
  }
  this.life = function(){
    return $http.get('/api/life')
    .then(function(res, req, next) {
      return res.data;
    })
  }
});
