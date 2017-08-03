angular.module('app').controller('appCtrl', function($scope) {
  $scope.text = '';
  $scope.update = (e) => {
    $scope.text = e.target.value;
  }
})