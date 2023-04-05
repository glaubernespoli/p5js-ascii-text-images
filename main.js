const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
//const density = "         .:░▒▓█";

let cat;

function preload() {
  cat = loadImage("cat2.jpg");
}

function setup() {
  createCanvas(1500, 1500);
}

function draw() {
  background(0);
  //image(cat, 0, 0, width, height);

  let w = width / cat.width;
  let h = height / cat.height;
  cat.loadPixels();

  for (let i = 0; i < cat.width; i++) {
    for (let j = 0; j < cat.height; j++) {
      const pixelIndex = (i + j * cat.width) * 4;
      const r = cat.pixels[pixelIndex + 0];
      const g = cat.pixels[pixelIndex + 1];
      const b = cat.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      noStroke();
      fill(255);
      //square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}
