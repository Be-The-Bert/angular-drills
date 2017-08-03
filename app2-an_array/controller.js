angular.module('arrayApp').controller('arrayController', function($scope, appSrvc){
  $scope.data = appSrvc.data;
})