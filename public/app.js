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

    .state('about', {
      url:          '/about',
      templateUrl:  'src/views/about/about.html',
      // controller:   'loginCtrl'
    })

    .state('clock', {
      url:          '/clock',
      templateUrl:  'src/views/clock/clock.html',
      controller:   'clockCtrl'
    })

    .state('form', {
      url:          '/form',
      templateUrl:  'src/views/formData/form.html',
      controller:   'formCtrl'
      // controller: function($scope, $stateParams) {
      //   console.log($stateParams)
      // }
    })

    .state('navPage', {
      url:          '/navPage',
      templateUrl:  'src/views/nav/nav.html',
    })

    .state('text', {
      url:          '/text',
      templateUrl:  'src/views/animation/text.html',
    })

    .state('lifePie', {
      url:          '/lifepie',
      templateUrl:  'src/views/pieviews/lifepie.html',
    })

    .state('workPie', {
      url:          '/workpie',
      templateUrl:  'src/views/pieviews/workpie.html',
    })

    .state('socialPie', {
      url:          '/socialpie',
      templateUrl:  'src/views/pieviews/socialpie.html',
    })

    .state('sleepPie', {
      url:          '/sleepie',
      templateUrl:  'src/views/pieviews/sleeppie.html',
    })

    .state('miscPie', {
      url:          '/miscpie',
      templateUrl:  'src/views/pieviews/miscpie.html',
    })

  $urlRouterProvider
  .otherwise('/');

})

.directive("clock", function() {
  return {
    templateUrl: "./src/views/clock/clock.html",
    controller: "clockCtrl"
  }
})

.directive("navPage", function() {
  return {
    templateUrl: "./src/views/nav/nav.html",
    controller: "navCtrl"
  }
})

.directive("homePage", function() {
  return {
    templateUrl: "./src/views/home/home.html",
    controller: "homeCtrl"
  }
})

// .directive("textAnimation", function() {
//   return {
//     templateUrl: "./src/views/animation/text.html",
//   }
// })

.directive("formData", function() {
  return {
    templateUrl: "./src/views/formData/form.html",
    controller: "formCtrl"
  }
})

.directive("lifeHome", function() {
  return {
    templateUrl: "./src/views/login/life.html",
    controller: "lifeCtrl"
  }
})

.directive("lifePie", function() {
  return {
    templateUrl: "./src/views/pieviews/lifepie.html",
    controller: "lifePieCtrl"
  }
})

.directive("workPie", function() {
  return {
    templateUrl: "./src/views/pieviews/workpie.html",
    controller: "pieCtrl"
  }
})

.directive("socialPie", function() {
  return {
    templateUrl: "./src/views/pieviews/socialpie.html",
    controller: "pieCtrl"
  }
})

.directive("sleepPie", function() {
  return {
    templateUrl: "./src/views/pieviews/sleeppie.html",
    controller: "pieCtrl"
  }
})

.directive("miscPie", function() {
  return {
    templateUrl: "./src/views/pieviews/miscPie.html",
    controller: "pieCtrl"
  }
})
