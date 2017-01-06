(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.stateLunch = "";

    $scope.lunchCountItems = function() {
      var numberOfItems = $scope.items.split(',');
      if (numberOfItems == "" || numberOfItems == null)  $scope.stateLunch = "Please enter data first";
      else if (numberOfItems.length <= 3) $scope.stateLunch = "Enjoy!";
      else $scope.stateLunch = "Too much!";
    };
  }

})();
