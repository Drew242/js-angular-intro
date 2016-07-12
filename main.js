angular.module('PokeApp', []);

angular.module('PokeApp')
  .controller('PallettTown', [pallettCtrl]);

  function pallettCtrl() {
    var pCtrl = this;

    pCtrl.welcomeMessage = "Gotta Catch 'Em All";
    pCtrl.pokemon        = [
          'Charmander',
          'Bulbasaur',
          'Squirtle',
          'Growlithe',
          'Mankey',
          'Cubone',
          'Dugtrio',
          'Pidgeotto',
          'Pikachu'
    ];
    pCtrl.clonedPokemon = [
          'Pikachu',
          'Pikachu',
          'Pikachu',
          'Pikachu',
          'Pikachu',
          'Pikachu',
          'Rhydon'
    ];
    pCtrl.trainers = [
      {
        name : 'Ash',
        badges : [
          'Earth',
          'Wind',
          'Fire'
        ],
        skill : 1,
      },
      {
        name : 'Misty',
        badges : [
          'Water',
        ],
        skill : 3,
      },
      {
        name : 'Brock',
        badges : [
          'Rock',
          'Suplex',
          'Cascade'
        ],
        skill : 5,
      }
    ];
    pCtrl.jigglypuff = {
      squishiness : 7,
      rage        : 3,
      rockstar    : 'sure...',
      name        : 'jigglypugg'
    };
  }
