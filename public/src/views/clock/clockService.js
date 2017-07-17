
angular.module("app")
.service("dbservice", function($http) {
  console.log("Services are up");

  this.getusers = function(){
    return $http.get('/api/allusers')
    .then(function(res, req, next) {
      return res.data;
    })
  }
  this.getlifepie = function(){
    return $http.get('/api/lifepie')
    .then(function(res, req, next) {
      return res.data;
    })
  }
});
