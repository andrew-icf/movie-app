angular.module('movieApp')
  .controller('MovieController', MovieController);

  function MovieController($scope, $stateParams, MoviesService){
    var title = $stateParams.title;

    MoviesService
    .getMovies(title)
    .then(function(movies){
      $scope.movies = movies;
    });
  };
