angular.module("app")
  .controller("lifePieCtrl", function($scope, dbservice) {

    dbservice.getAllPie()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.
        console.log($scope.life)
      })
    console.log("Scope#2 calls");


    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("lifepieChart", { // pieChart is assigned the Element ID
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
              "value": data.workweek, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "MISC unaccounted time",
              "value": data.misc, // this data is from data[0]
              "color": "red"
            },
            {
              "label": "Sleep",
              "value": data.sleepweek, // this data is from data[0]
              "color": "grey"
            },

            {
              "label": "Social/Family",
              "value": data.socialweek, // this data is from data[0]
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
  .controller("socialPieCtrl", function($scope, dbservice) {

    dbservice.getAllPie()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.
        console.log($scope.life)
      })
    console.log("Scope#2 calls");


    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("socialpieChart", { // pieChart is assigned the Element ID
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
              "value": 0, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "MISC unaccounted time",
              "value": 0, // this data is from data[0]
              "color": "red"
            },
            {
              "label": "Life",
              "value": data.lifewithsocial, // this data is from data[0]
              "color": "#41ba2f"
            },

            {
              "label": "Social/Family",
              "value": data.socialweek, // this data is from data[0]
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


  .controller("sleepPieCtrl", function($scope, dbservice) {

    dbservice.getAllPie()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.
        console.log($scope.life)
      })
    console.log("Scope#2 calls");


    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("sleeppieChart", { // pieChart is assigned the Element ID
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
              "value": 0, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "MISC unaccounted time",
              "value": 0, // this data is from data[0]
              "color": "red"
            },
            {
              "label": "Sleep",
              "value": data.sleepweek, // this data is from data[0]
              "color": "grey"
            },

            {
              "label": "Life",
              "value": data.lifewithsleep, // this data is from data[0]
              "color": "#41ba2f"
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


  .controller("miscPieCtrl", function($scope, dbservice) {

    dbservice.getAllPie()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.
        console.log($scope.life)
      })
    console.log("Scope#2 calls");


    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("miscpieChart", { // pieChart is assigned the Element ID
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
              "value": 0, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "MISC unaccounted time",
              "value": data.misc, // this data is from data[0]
              "color": "red"
            },
            {
              "label": "Sleep",
              "value": 0, // this data is from data[0]
              "color": "grey"
            },

            {
              "label": "Life",
              "value": data.lifewithmisc, // this data is from data[0]
              "color": "#41ba2f"
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


  .controller("workPieCtrl", function($scope, dbservice) {

    dbservice.getAllPie()
      .then(function(result) {
        $scope.life = result;
        createChart($scope.life) // this invokes the createChart function that is at line 55.
        console.log($scope.life)
      })
    console.log("Scope#2 calls");


    ////////////////////////////////////
    // This is the start of D3Pie     //
    function createChart(data) { // this is invoked int he scope and called here
      data = data[0] // this is assigned as index of the array

      var pie = new d3pie("workpieChart", { // pieChart is assigned the Element ID
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
              "value": data.workweek, // this data is from data[0]
              "color": "#0066cc"
            },
            {
              "label": "Life",
              "value": data.lifewithwork, // this data is from data[0]
              "color": "#41ba2f"
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
