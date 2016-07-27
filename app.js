angular
  .module("movieApp", ["ui.router"])
  .config(config)

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'app/views/home.html'
    }).state('home.movies', {
      url: 'movies/:title',
      controller: 'MovieController',
      templateUrl: 'app/views/movies.html'
    }).state('home.movie', {
      url: 'movie/:id',
      controller: 'DetailController',
      templateUrl: 'app/views/movie.html'
    });
  };
