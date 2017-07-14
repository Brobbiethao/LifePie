angular.module("app")
  .controller("userCtrl", function($scope, dbservice) {


    dbservice.getusers()
      .then(function(result) {
        $scope.user = result;
        console.log($scope.user);
      })
    console.log("Scope#1 calls");

    dbservice.life()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.

      })
    console.log("Scope#2 calls");

    // This is where my deathclock starts //

    // Set the date we're counting down to
    var countDownDate = new Date("April 05, 2059 00:00:00").getTime();



    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 364))
      var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 364)) / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("YYYYMM").innerHTML = years + " Year(s), " + days + " Day(s)";
      document.getElementById("HHMMSS").innerHTML = hours + ":" + minutes + ":" + seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    // This is the break on the timer //
    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("pieChart", { // pieChart is assigned the Element ID
        "header": {
          "title": {
            "text": "Your Life Quantified",
            "fontSize": 22,
            "font": "verdana"
          },
          "subtitle": {
            "text": "% of Quality of Life",
            "color": "#999999",
            "fontSize": 10,
            "font": "verdana"
          },
          "titleSubtitlePadding": 12
        },
        "size": {
          "canvasHeight": 400,
          "canvasWidth": 590,
          "pieOuterRadius": "88%"
        },
        "data": {
          "content": [{
              "label": "Work",
              "value": data.social, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "MISC unaccounted time",
              "value": data.development, // this data is from data[0]
              "color": "#003366"
            },
            {
              "label": "Sleep",
              "value": data.sleep, // this data is from data[0]
              "color": "#ff0033"
            },

            {
              "label": "Social/Family",
              "value": data.social, // this data is from data[0]
              "color": "#336600"
            }
          ]
        },
        "labels": {
          "outer": {
            "pieDistance": 32
            // },
            // "inner": {
            // 	"format": "value"
          },
          "mainLabel": {
            "font": "verdana"
          },
          "percentage": {
            "color": "#e1e1e1",
            "font": "verdana",
            "decimalPlaces": 2
          },
          "value": {
            "color": "#e1e1e1",
            "font": "verdana"
          },
          "lines": {
            "enabled": true,
            "color": "#cccccc"
          },
          "truncation": {
            "enabled": true
          }
        },
        "effects": {
          "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
          }
        },
        "callbacks": {}
      });
    }
  })
