var images = [];
var thefont;

var blendmodes = ["source-over", "darken", "lighten", "difference", "multiply", "exclusion", "screen", "copy", "overlay", "hard-light", "soft-light", "color-dodge", "color-burn", "lighter", "destination-out", "subtract"];

function preload() {
	for(let i = 0;i<10;i++)
	{
		images[i] = loadImage(i+'.jpg');
	}
	thefont = loadFont('Soft Marshmallow Turbo.otf');
}

function setup() {
	let mycanvas = createCanvas(300, 300);
  mycanvas.position(0, 0);
	background(0);
	textFont(thefont);
	textSize(60);
	textAlign(CENTER, CENTER);
	fill(255);
}

function draw() {
	let whichimage = random(images);
	var x = random(width);
	var y = random(height);
	var scale = random(0.02, 0.2);
	var w = whichimage.width*scale;
	var h = whichimage.height*scale;
	var bm = random(blendmodes);
	blendMode(bm)
	text("SUNSET", width/2, height/2);
	bm = random(blendmodes);
	blendMode(bm)
	image(whichimage, x, y, w, h);
	bm = random(blendmodes);
	blendMode(bm)
	ellipse(mouseX, mouseY, 50, 50);
}

function keyTyped()
{
	background(random(255), random(255), random(255));
	fill(random(255), random(255), random(255));

}
