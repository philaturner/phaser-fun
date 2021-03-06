//firebase stuff
var database;
var highScores =[];
var HIGH_SCORE_MODE = 'dev';

var medalInfo = {
  "dev":[
         {
          "gold": 3000,
          "silver":2500,
          "bronze": 2000
        }],
  "level1":[
          {
          "gold": 3000,
          "silver":2500,
          "bronze": 2000
        }]
};

var loadState = {

  preload: function(){
    //loading label
    var loadingLabel = game.add.text(game.world.centerX, game.world.centerY, '..loading..', { font: 'Courier',fontSize: '22px', fill: '#fff', align: 'center'});
    loadingLabel.anchor.set(0.5,0.5);

    //load game assets
    game.load.image('star', 'assets/manifesto_neon.png');
    game.load.image('starbox', 'assets/manifesto-box-neon.png');
    game.load.spritesheet('dude', 'assets/dude_neon_v2.png', 32, 48);
    game.load.spritesheet('baddie', 'assets/baddie_neon_v2.png', 32, 32);
    game.load.tilemap('main_map_j', 'assets/map/level1JSON.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/map/main_tileset.png', 32, 32);
    game.load.image('downarrow', 'assets/downarrow.png');
    game.load.image('blocker', 'assets/blocker.png');
    game.load.image('bg_scroll', 'assets/scoll-bg-dark.jpg');
    game.load.image('menu_scroll', 'assets/scroll_bg_neon.png');
    game.load.image('endbox', 'assets/starbox_neon.png');
    game.load.image('heart', 'assets/heart_neon.png');
    game.load.image('gold', 'assets/gold-medal.png');
    game.load.image('silver', 'assets/silver-medal.png');
    game.load.image('bronze', 'assets/bronze-medal.png');
    console.log('Loaded Assets');

    //initliase Firebase
    var config = {
      apiKey: "AIzaSyAB8M7qKVj8KyRbKb60EnskxpoxdFsCy7U",
      authDomain: "manifestos-791d5.firebaseapp.com",
      databaseURL: "https://manifestos-791d5.firebaseio.com",
      projectId: "manifestos-791d5",
      storageBucket: "",
      messagingSenderId: "155608722757"
    };
    firebase.initializeApp(config);
    database = firebase.database();
  },

  create: function(){
    console.log(database);
    game.state.start('menu');
  }
};
