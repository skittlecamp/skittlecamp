// Select the canvas and the .left element
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
var leftElement = document.querySelector('.main');

// Set the canvas width and height dynamically based on the .left element
canvas.width = window.innerWidth;
canvas.height = leftElement.offsetHeight + 100;

// Setting up the letters
var letters = 'SKITTLECAMPSKITTLECAMPSKITTLECAMPSKITTLECAMPSKITTLECAMPSKITTLECAMPSKITTLECAMP';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height / fontSize); // Randomize initial position
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Increment the drop position
    drops[i]++;

    // Reset the drop position when it goes out of bounds
    if (drops[i] * fontSize > canvas.height) {
      drops[i] = 0; // Start again from the top
    }
  }
}

// Loop the animation with a constant interval for smooth flow
setInterval(draw, 33);

// Adjust the canvas height on window resize to match the .left element's height
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = leftElement.offsetHeight;
  columns = canvas.width / fontSize;
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize); // Re-randomize positions
  }
});
