angular
  .module('movieApp')
  .controller('DetailController', DetailController);

  function DetailController($scope, $stateParams, MovieService){
    MovieService.getMovie($stateParams.id).then(function(movie){
      $scope.movie = movie;
    });
  };
