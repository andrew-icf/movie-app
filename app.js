angular
  .module("movieApp", ["ui.router"])
  .config(config)

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', { //loading home.html
      url: '/',
      controller: 'HomeController',
      templateUrl: 'app/views/home.html'
    }).state('home.movies', { //nesting movies.html
      url: 'movies/:title', // title is ng-model name, "what you're searching for"
      controller: 'MovieController',
      templateUrl: 'app/views/movies.html'
    }).state('home.movie', { //nesting movie.html
      url: 'movie/:id', //ui-sref on moives.html "what you're searching for"
      controller: 'DetailController',
      templateUrl: 'app/views/movie.html'
    });
  };
