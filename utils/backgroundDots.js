export function createAnimatedDots(container) {
    const dotCount = 100;
    const sizes = [0.4, 0.6, 0.8]; // Possible sizes for dots
    const dots = [];
  
    // Create dots and append to the container
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      const size = sizes[Math.floor(Math.random() * sizes.length)];
  
      dot.style.position = 'absolute';
      dot.style.width = `${size}rem`;
      dot.style.height = `${size}rem`;
      dot.style.backgroundColor = '#fff';
      dot.style.borderRadius = '50%';
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.transition = 'transform 2s ease-in-out';
  
      dots.push(dot);
      container.appendChild(dot);
    }
  
    // Animate dots
    setInterval(() => {
      dots.forEach((dot) => {
        dot.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
      });
    }, 2000);
}
  