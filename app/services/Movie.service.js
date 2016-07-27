(function(){
  angular
  .module('movieApp')
  .factory('MovieService', MovieService);

  function MovieService($http) {
    var URL = 'http://www.omdbapi.com/?i=';

    return {
      getMovie: function(id) {
        return $http.get(URL + id)
        .then(function (result){
          console.log(result.data);
          return result.data;
        });
      }
    };
  };
})();
