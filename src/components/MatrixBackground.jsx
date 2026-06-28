import { useEffect, useRef } from 'react';

export default function MatrixBackground({ onFirstColumnDone }) {
  const canvasRef = useRef(null);
  const executedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.repeat(6).split('');
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8670f5';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
          if (!executedRef.current) {
            executedRef.current = true;
            onFirstColumnDone?.();
          }
        }
      }
    }, 24);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [onFirstColumnDone]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix"
      style={{ position: 'fixed', zIndex: -200, filter: 'blur(1px)' }}
    />
  );
}
