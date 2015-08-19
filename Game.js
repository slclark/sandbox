Sandbox.Game = function(game) {
	// variables
	// this.var_name;
};

Sandbox.Game.prototype = {
	
	create: function() {
		this.buildWorld();
	},
	
	buildWorld: function() {
		//this.add.image(0, 0, 'game_bg');
		
		// Insert a sprite
		var sampleSprite = this.add.sprite(50, 50, 'sample_sprite');
        // must indicate that the sprite can have click/touch input events
        sampleSprite.inputEnabled = true;
        // phaser events: http://phaser.io/docs/2.4.2/Phaser.Events.html
        sampleSprite.events.onInputDown.add(this.sampleSpriteListener,this);
		
		// Text beneath sample sprite
		var style = { font: "24px Arial", fill: "#000066", align: "center" };
		var text = this.add.text(50, 200, "Sample Text", style);
		
		// Insert an image
		this.add.image(590, 10, 'phaser_logo');
		
        
		// Insert a button
		
        /* params: x position, y position, the image key, callback function, callback context, the frame for over image, the frame for out image, the frame for down image, the frame for up image (none used here)
        
        The four states a Button responds to are:

        'Over' - when the Pointer moves over the Button. This is also commonly known as 'hover'.
        'Out' - when the Pointer that was previously over the Button moves out of it.
        'Down' - when the Pointer is pressed down on the Button. I.e. touched on a touch enabled device or clicked with the mouse.
        'Up' - when the Pointer that was pressed down on the Button is released again.

        */
        var sampleButton = this.add.button(150, 300, 'button_spritesheet', this.debug, this, 2, 1, 0);
        //sampleButton = this.add.button(this.world.centerX, this.world.centerY, 'buttonGeneric', this.debug, this, 2, 1, 0);
        sampleButton.name = 'sampleBtn';
        // anchored on the center of the button
        sampleButton.anchor.setTo(0.5, 0.5);
        
		// Graphics objects
		
		// Draw a line
		var sampleLine = this.add.graphics(600, 300);
        //  - need to use hex value - not HTML hex
		sampleLine.lineStyle(3, 0x333399, 1);
		sampleLine.moveTo(0, 0);
		sampleLine.lineTo(290, 10);
		
		// Draw a circle
		var sampleCircle = this.add.graphics(600,320);
		// Trying to make it blue, but the fill seems to be black by default - need to use hex value - not HTML hex
		sampleCircle.beginFill(0x333399, 0.5);
		sampleCircle.drawCircle(20, 20, 20);
		sampleCircle.endFill();
		
		// Drawing an arc (part of a circle)
		var sampleArc = this.add.graphics(500, 400);
		// Not sure what method to use to make the Arc colored - need to use hex value - not HTML hex
		sampleArc.beginFill(0x333399, 0.7);
		sampleArc.arc(0, 0, 30, 0, 1); // This arc method seems to crash this script
		sampleArc.endFill();
        
        
        // sharonArc example
        var sharonArc = this.add.graphics(this.world.centerX, this.world.centerY);
        //  Our first arc will be a line only
        sharonArc.lineStyle(8, 0xffd900);
        sharonArc.arc(0, 0, 135, 0, 1.5707963267948966, false);
        //  This will reset the lineStyle
        sharonArc.lineStyle(0);
        //  And this draws a filled arc
        sharonArc.beginFill(0xFF3300);
        sharonArc.arc(-100, -100, 135, this.math.degToRad(0), this.math.degToRad(90));
        sharonArc.endFill();
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
		
	},
    
    /* listener functions */
    
    sampleSpriteListener: function(){
        this.debug();
    },
    debug: function(){
        console.log('Sprite or Button clicked');
    }
};