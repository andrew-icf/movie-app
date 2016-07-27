angular.module("movieApp", ["ui.router"])
  .config(config)

  function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateURL: 'app/views/home.html'
    });
  };
