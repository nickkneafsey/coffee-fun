var coffeeApp = angular.module('coffeeApp', ['ngMaterial', 'ngAnimate']);

coffeeApp.service("DrinkOptions", [ function() {
  this.options1 = [
    {
      name: "coffee maker",
      type: "coffee",
      image: "./svg/machine.svg"
    },
    {
      name: "teapot",
      type: "tea",
      image: "./svg/tea_pot.svg"
    },
    {
      name: "espresso machine",
      type: "espresso",
      image: "./svg/espresso_machine.svg"
    }
  ];

  this.options2 = [
    {
      name: "coffee filter",
      type: "coffee",
      image: "./svg/coffee_filter.svg"
    },
    {
      name: "tea strainer",
      type: "tea",
      image: "./svg/tea_strainer.svg"
    },
    {
      name: "espresso tamper",
      type: "espresso",
      image: "./svg/espresso_tamper.svg"
    }
  ];

  this.options3 = [
    {
      name: "coffee grounds",
      type: "coffee",
      image: "./svg/coffee_beans.svg"
    },
    {
      name: "loose tea",
      type: "tea",
      image: "./svg/tea_leaves.svg"
    },
    {
      name: "espresso beans",
      type: "espresso",
      image: "./svg/espresso_beans.svg"
    }
  ];
}])

coffeeApp.controller('CoffeeController', ['$scope', '$interval', 'DrinkOptions', function($scope, $interval, DrinkOptions) {
  $scope.slot1bool = false;
  $scope.slot2bool = false;
  $scope.slot3bool = false;
  $scope.disabled = true;
  $scope.result = null;
  $scope.drinkWon = null;
  var iterations = 0;

  var slot1Interval = 21;
  var slot2Interval = 41;
  var slot3Interval = 81;

  $scope.options1 = DrinkOptions.options1;
  $scope.options2 = DrinkOptions.options2;
  $scope.options3 = DrinkOptions.options3;

  $scope.slot1 = $scope.options1[0];
  $scope.slot2 = $scope.options2[1];
  $scope.slot3 = $scope.options3[2];
  
  var resetResult = function() {
    iterations = 0;
    $scope.result = null;
    $scope.drinkWon = null;
    $scope.disabled = true;
  }
  
  var setTrue = function() {
    $scope.sometimesTrue = true;
  }

  var setFalse = function() {
    $scope.sometimesTrue = false;
  }
 
  $scope.spin = function() {

    resetResult();
    $interval(function() {
      $scope.slot1bool = !$scope.slot1bool;
      $scope.slot1 = $scope.options1[Math.floor(Math.random()*3)];
    }, 200, slot1Interval);

    $interval(function() {
      $scope.slot2bool = !$scope.slot2bool;
      $scope.slot2 = $scope.options2[Math.floor(Math.random()*3)];
    }, 200, slot2Interval);

    $interval(function() {
      $scope.slot3bool = !$scope.slot3bool;
      $scope.slot3 = $scope.options3[Math.floor(Math.random()*3)];
      iterations ++;
      if (iterations === slot3Interval) {
        getResult();
      }
    }, 200, slot3Interval);
  }

  var getResult = function() {
    if ($scope.slot1.type === $scope.slot2.type && $scope.slot2.type === $scope.slot3.type) {
      $scope.result = "win";
      $scope.drinkWon = $scope.slot1.type;
    } else {
      $scope.result = "loss";
    }
    $scope.disabled = false;
    $scope.slot1bool = true;
    $scope.slot2bool = true;
    $scope.slot3bool = true;
  };

  resetResult();
  $scope.spin();

}]);

coffeeApp.directive('slotEntry',['$animate', function($animate) {
  return {
    restrict: 'AECM',
    scope: {
      info: '=',
      bindModel: '=ngModel',
      bool: '='
    },
    templateUrl: './directive_templates/slot.html'
  };
}]);
