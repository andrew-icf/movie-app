angular.module('movieApp')
  .controller('MovieController', MovieController);

  function MovieController($scope, $stateParams, MoviesService){ //call service as param
    var title = $stateParams.title;
//invoke service with methods
    MoviesService
    .getMovies(title)
      .then(function(movies){ // get movies
        $scope.movies = movies;
    });
  };
