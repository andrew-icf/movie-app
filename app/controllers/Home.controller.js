angular
  .module('movieApp')
  .controller('HomeController', HomeController);

  function HomeController($scope, $state){

    $scope.getMovies = function(){
      $state.go('home.movies', {
        title: $scope.title //ng-model name is loading what we type in => to scope
      });
    };
  };
