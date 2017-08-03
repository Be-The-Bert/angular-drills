angular.module('app').controller('appCtrl', function($scope, appSrvc) {
  $scope.data = appSrvc.data;
})