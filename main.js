angular.module('Chuckuthon', []);

angular.module('Chuckuthon')
  .controller('ChuckingAwesomeController', ChuckingAwesome)
  .factory('ChuckFactory', ChuckFactory)

ChuckingAwesome.$inject = ['ChuckFactory'];
ChuckFactory.$inject = ['$http'];

function ChuckingAwesome(ChuckFactory) {
  var chuck = this;
  chuck.title = 'Time waits for no man. Unless than man is Chuck Norris';
  chuck.quote = '';

  chuck.newJoke = function() {
    ChuckFactory.getRandomQuote()
    .then(function(res){
      var data = res.data || {}
      value = data.value || {}
      joke = value.joke || ''

      chuck.quote = joke || ':( no joke found';
    }, function(error) {
      console.error(error);
      try {
        // unsafe code //
      } catch(error) {
        console.error(error); 
      }
    })
  }

}

function ChuckFactory($http) {
  return {
    getRandomQuote: function() {
      return $http.get('https://api.icndb.com/jokes/random');
    }
  }
}
