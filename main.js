// First component needed - Module.
// Basically a 'bucket' for code (container for OTHER angular elements)

//create module (takes one or two args - name & an empty array, which is an injector)
angular.module('helloModule', [])
//dependency injection

// Next big component to Angular is CONTROLLER
// Probably most common angular component
// Allows you to expose data to the view - glue between Model & view

// with just the name argument, this retrieves the module
angular.module('helloModule')
  // the final method in the injector MUST be a function that represent the controller itself
  .controller('alpha', [
      '$scope', // this is the object that will expose data to the view
      alphaCtrl
  ]);

  // This is the funciton that represents the controller
  // Must pass, as parameters, the dependencies injected above
  function alphaCtrl($scope){
    $scope.greeting = "Welcome to the Command Center!";
    $scope.subGreeting = "Power Rangers ONLY";
    $scope.fightPutty = function() {
      $scope.subGreeting = 'punch noises';
    }
  }
