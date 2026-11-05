(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.querySelector('.background-stars');

  if (container) {
    const count = window.innerWidth > 900 ? 28 : 14;
    for (let i = 0; i < count; i += 1) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 5 + 2;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = (2.6 + Math.random() * 1.6) + 's';
      star.style.opacity = 0.55 + Math.random() * 0.33;
      star.dataset.speed = 0.25 + Math.random() * 0.2;
      star.dataset.offset = Math.random() * 100;
      container.appendChild(star);
    }

    if (!reduce) {
      let t = 0;
      const frame = () => {
        requestAnimationFrame(frame);
        if (document.hidden) return;
        t += 1;
        container.querySelectorAll('.star').forEach((star) => {
          const speed = parseFloat(star.dataset.speed);
          const offset = parseFloat(star.dataset.offset);
          const next = (parseFloat(star.style.left) + Math.sin(t / 80 + offset) * speed) % 100;
          star.style.left = ((next + 100) % 100) + 'vw';
        });
      };
      frame();
    }
  }

  document.querySelectorAll('.text-container button, .auth-container button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const d = Math.max(btn.clientWidth, btn.clientHeight);
      const circle = document.createElement('span');
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = (e.clientX - rect.left - d / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - d / 2) + 'px';
      circle.classList.add('ripple');
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
})();