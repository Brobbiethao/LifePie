angular.module("app", ["ui.router"])

.run(function() {
  console.log("index app is listening")
})

// .config(function($stateProvider, $urlRouterProvider){
//
//   $stateProvider
//     .state('home', {
//       url:          '/',
//       templateUrl:  '#'
//     })
//   $urlRouterProvider
//   .otherwise('/');
    // .state('login', {
    //   url:          '/login',
    //   templateUrl:  'src/views/login/login.html',
    //   controller:   'loginCtrl'
    // })
    // .state('clock', {
    //   url:          '/clock',
    //   templateUrl:  'src/views/clock/clock.html',
    //   controller:   'clockCtrl'
    //   // controller: function($scope, $stateParams) {
    //   //   console.log($stateParams)
    //   // }
    // })
// })
