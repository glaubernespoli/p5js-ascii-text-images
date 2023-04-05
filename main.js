const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
//const density = "         .:░▒▓█";

let cat;

function preload() {
  cat = loadImage("cat2.jpg");
}

function setup() {
  noCanvas();

  background(0);
  //image(cat, 0, 0, width, height);

  let w = width / cat.width;
  let h = height / cat.height;
  cat.loadPixels();

  for (let j = 0; j < cat.height; j++) {
    let row = "";
    for (let i = 0; i < cat.width; i++) {
      const pixelIndex = (i + j * cat.width) * 4;
      const r = cat.pixels[pixelIndex + 0];
      const g = cat.pixels[pixelIndex + 1];
      const b = cat.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      row += c == " " ? "&nbsp" : density.charAt(charIndex);
    }
    createDiv(row);
  }
}
