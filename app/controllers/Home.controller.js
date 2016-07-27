angular.module('movieApp')
  .controller('HomeController', HomeController);

  function HomeController($scope, $state){
    console.log("hello from home controller");
  };
