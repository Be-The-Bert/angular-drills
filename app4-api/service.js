angular.module('apiApp').service('apiSrvc', function($http) {
  this.getShips = () => {
    return $http.get('https://swapi.co/api/starships/').then(res => res.data.results);
  }
})