// backgroundDots.js 

export function createDotsBackground(canvas, width, height, config = {}) {
  const ctx = canvas.getContext("2d");

  // Configuration with defaults
  const {
    dotCount = 100, // Number of dots
    dotSizes = [0.2, 0.4, 0.6], // Array of dot sizes
    speedFactor = 0.4, // Speed multiplier for movement
  } = config;

  const dots = Array.from({ length: dotCount }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: dotSizes[Math.floor(Math.random())],
    depth: Math.random(), // Depth for layering (0 to 1)
    dx: (Math.random() - 0.5) * speedFactor,
    dy: (Math.random() - 0.5) * speedFactor,
  }));

  function flashDot(dot) {
    const originalSize = dot.size;
    dot.size = originalSize * 2; // Flash size multiplier
    const flashColor = "#f508e9"; // Bright yellow for flash

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size * 5, 0, Math.PI * 2);
    ctx.fillStyle = flashColor;
    ctx.fill();

    setTimeout(() => {
      dot.size = originalSize; // Reset size after flash
    }, 300);
  }

  setInterval(() => {
    const randomDot = dots[Math.floor(Math.random() * dots.length)];
    flashDot(randomDot);
  }, 300);

  function update() {
    ctx.clearRect(0, 0, width, height);

    dots.forEach((dot) => {
      dot.x += dot.dx;
      dot.y += dot.dy;

      if (dot.x < 0 || dot.x > width) dot.dx *= -1;
      if (dot.y < 0 || dot.y > height) dot.dy *= -1;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size * 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(58, 167, 194, ${1 - dot.depth})`; // Depth affects opacity
      ctx.fill();
    });

    requestAnimationFrame(update);
  }

  update();
}
