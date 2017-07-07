angular.module("app", ["ui.router"])

.run(function() {
  console.log("ui.router is displaying")
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:          '/home',
      templateUrl:  './src/views/home/home.html'
    })

    .state('login', {
      url:          '/login',
      templateUrl:  'src/views/login/login.html',
      controller:   'loginCtrl'
    })

    .state('Profile', {
      url:          '/profile',
      templateUrl:  'src/views/profile/profile.html',
      controller:   'profileCtrl'
    })

    .state('clock', {
      url:          '/clock',
      templateUrl:  'src/views/clock/clock.html',
      controller:   'clockCtrl'
      // controller: function($scope, $stateParams) {
      //   console.log($stateParams)
      // }
    })

    .state('nav-bar', {
      url:          '/navBar',
      templateUrl:  'src/views/nav/nav.html',
    })

  $urlRouterProvider
  .otherwise('/');

})
