angular.module('apiApp').controller('apiCtrl', function($scope, apiSrvc) {
  apiSrvc.getShips().then(data => $scope.data = data);
})