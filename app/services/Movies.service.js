(function(){ //wrapped in IIFE
  angular
  .module('movieApp')
  .factory('MoviesService', MoviesService);

  function MoviesService($http) {
    var URL = 'http://www.omdbapi.com/?s='; //'s' is for search, check docs

    return {
      getMovies: function(title) { // get movies by search title
        return $http.get(URL + title)
        .then(function (result) {
          console.log(result);
          return result.data.Search;
        });
      }
    }
  }
})();
