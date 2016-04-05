var coffeeApp = angular.module('coffeeApp', []);

coffeeApp.controller('CoffeeController', ['$scope', '$interval', function($scope, $interval) {
  $scope.options1 = [
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

  $scope.options2 = [
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

  $scope.options3 = [
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
      image: "./svg/espresso_machine.svg"
    }
  ];

  $scope.slot1 = $scope.options1[0];
  $scope.slot2 = $scope.options2[1];
  $scope.slot3 = $scope.options3[2];

  $scope.spin = function() {
    $interval(function() {
      $scope.slot1 = $scope.options1[Math.floor(Math.random()*3)];  
    }, 100, 10);

    $interval(function() {
      $scope.slot2 = $scope.options2[Math.floor(Math.random()*3)];
    }, 100, 20);

    $interval(function() {
      $scope.slot3 = $scope.options3[Math.floor(Math.random()*3)];
    }, 100, 40);

  }

  $scope.spin();

}]);
