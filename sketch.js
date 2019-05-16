// Original by https://www.openprocessing.org/sketch/529835

var particlesQuantity = 900;

var positionX = new Array(particlesQuantity);
var positionY = new Array(particlesQuantity);
var velocityX = new Array(particlesQuantity).fill(0);
var velocityY = new Array(particlesQuantity).fill(0);

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(64, 255, 255);

	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}

	positionX[0] = 0;
	positionY[0] = 0;
	frameRate(30);
}

function draw() {
	background(220, 128);

	velocityX[0] = velocityX[0] * 0.5 + (mouseX - positionX[0]) * 0.9;
	velocityY[0] = velocityY[0] * 0.5 + (mouseY - positionY[0]) * 0.9;

	positionX[0] += velocityX[0];
	positionY[0] += velocityY[0];

	if (frameCount % 1000 == 0) {
		reset();
	}

	for (var particle = 1; particle < particlesQuantity; particle++) {
		var whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
		whatever = whatever * 2;

		velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
		velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;

		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];

		if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
			velocityX[particle] = -velocityX[particle];
		}

		if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
			velocityY[particle] = -velocityY[particle];
		}
		stroke(220, 122, 122, 255);
		strokeWeight(10);

		// point(positionX[particle], positionY[particle]);
		text("no", positionX[particle], positionY[particle])

	}
	stroke(122, 220, 122, 255);
	strokeWeight(10);
	text("is this art?", width / 2, height / 10);
}

function reset() {
	for (var particle = 1; particle < particlesQuantity; particle++) {
		positionX[particle] = random(0, width);
		positionY[particle] = random(0, height);
	}
}

function mousePressed() {
	reset();
}
