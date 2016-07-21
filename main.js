angular.module('Chuckuthon', []);

angular.module('ChuckFactory')
  .factory('ChuckFactory', ChuckFactory)

function ChuckFactory() {

}

angular.module('Chuckuthon')
  .controller('ChuckingAwesomeController', ChuckingAwesomeController)

function ChuckingAwesomeController() {
  var cAc = this; 
}
