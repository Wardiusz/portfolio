import { useEffect, useRef } from 'react';

export default function FireworksEffect() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load fireworks-js from CDN if not already present
    const existing = document.getElementById('fireworks-script');
    const init = () => {
      if (containerRef.current && window.Fireworks) {
        const fw = new window.Fireworks.default(containerRef.current, {
          autoresize: true,
          opacity: 0.5,
          acceleration: 1.05,
          friction: 0.97,
          gravity: 1.5,
          particles: 150,
          traceLength: 3,
          traceSpeed: 10,
          explosion: 5,
          intensity: 30,
          flickering: 50,
          lineStyle: 'round',
          hue: { min: 0, max: 360 },
          delay: { min: 30, max: 60 },
          rocketsPoint: { min: 50, max: 50 },
          lineWidth: {
            explosion: { min: 1, max: 3 },
            trace: { min: 1, max: 2 },
          },
          brightness: { min: 50, max: 100 },
          decay: { min: 0.015, max: 0.03 },
          mouse: { click: false, move: false, max: 1 },
        });
        fw.start();
        return fw;
      }
    };

    let fw;
    if (existing) {
      fw = init();
    } else {
      const script = document.createElement('script');
      script.id = 'fireworks-script';
      script.src = 'https://cdn.jsdelivr.net/npm/fireworks-js@2.x/dist/index.umd.js';
      script.onload = () => { fw = init(); };
      document.body.appendChild(script);
    }

    return () => { fw?.stop(); };
  }, []);

  return <div ref={containerRef} className="fireworks" />;
}
