export function createDotsBackground(canvas, width, height, config = {}) {
  const ctx = canvas.getContext("2d");
  let animationId; // Store the animation frame ID for control

  const {
    dotCount = 100,
    dotSizes = [0.2, 0.4, 0.6],
    speedFactor = 0.4,
  } = config;

  const dots = Array.from({ length: dotCount }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: dotSizes[Math.floor(Math.random())],
    depth: Math.random(),
    dx: (Math.random() - 0.5) * speedFactor,
    dy: (Math.random() - 0.5) * speedFactor,
  }));

  function flashDot(dot) {
    const originalSize = dot.size;
    dot.size = originalSize * 0.5;
    const flashColor = "#c0c0c0b7";

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size * 5, 0, Math.PI * 2);
    ctx.fillStyle = flashColor;
    ctx.fill();

    setTimeout(() => {
      dot.size = originalSize;
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
      ctx.arc(dot.x, dot.y, dot.size * 5, 0, Math.PI * 1);
      ctx.fillStyle = `#c0c0c0b7, ${1 - dot.depth})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(update); // Store the frame ID
  }

  function start() {
    if (!animationId) {
      update();
    }
  }

  function stop() {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Start animation initially
  start();

  return { start, stop };
}
