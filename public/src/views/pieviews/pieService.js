angular.module("app")
.service("dbservice", function($http) {
  console.log("Hmm")
  this.getAllPie = function(){
    console.log('is this working?')
    return $http.get('/api/allPie')
    .then(function(res, req, next) {
      return res.data;
    })
  }
});
