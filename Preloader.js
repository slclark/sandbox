Sandbox.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Sandbox.Preloader.prototype = {

	create: function() {
		this.preloadBar.cropEnabled = false;
		
    	this.state.start('StartMenu');
	},
	init: function() {
		
	},
	loadRender: function(){
		
		
	},
	loadUpdate: function() {
		
	},
	paused: function() {
		
	},
	pauseUpdate: function() {
		
	},
	preload: function() {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-100, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('titlescreen', 'assets/images/TitleBG.png');
		this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');
		this.load.image('game_bg', 'assets/images/game_bg_900x500.png');
		this.load.image('phaser_logo', 'assets/images/phaser_logo.png');
		this.load.image('sample_sprite', 'assets/images/sample_sprite_128x128.png');
        // 193x71 is the size of each frame.
        this.load.spritesheet('button_spritesheet', 'assets/images/spritesheets/button_sprite_sheet.png', 193, 71);
	},
	preRender: function() {
		
	},
	render: function (){
		
	},
	resize: function() {
		
	},
	resumed: function() {
		
	},
	shutdown: function() {
		
	},
	update: function () {
		this.ready = true;
		this.state.start('StartMenu');
	}
};