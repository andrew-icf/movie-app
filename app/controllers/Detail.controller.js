angular
  .module('movieApp')
  .controller('DetailController', DetailController);

  function DetailController($scope, $stateParams, MovieService){// service as param
    MovieService
    .getMovie($stateParams.id)// getting movie by api id
      .then(function(movie){
        $scope.movie = movie; //this function is how we call {{movie.etc}} in html
    });
  };
