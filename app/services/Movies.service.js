(function(){
  angular
  .module('movieApp')
  .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var URL = 'http://www.omdbapi.com/?s=';

    return {
      getMovies: function(title) {
        return $http.get(URL + title)
        .then(function (result) {
          console.log(result);
          return result.data.Search;
        });
      }
    }
  }
})();
