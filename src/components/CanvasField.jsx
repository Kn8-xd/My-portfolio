import { useEffect, useRef } from 'react';

export default function CanvasField({ paused }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    let width = 0;
    let height = 0;
    let frame;
    let visible = true;
    let phase = 0;
    let previousTime = 0;
    const pointer = { x: 0, y: 0 };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width * 0.32, height * 0.35, 260);
      const cx = width * (width > 760 ? 0.72 : 0.55) + pointer.x * 20;
      const cy = height * 0.49 + pointer.y * 20;
      for (let ring = 0; ring < 36; ring += 1) {
        context.beginPath();
        for (let point = 0; point <= 160; point += 1) {
          const angle = (point / 160) * Math.PI * 2;
          const ripple = Math.sin(angle * 3 + phase + ring * 0.09) * 13;
          const r = radius + ring * 2 + ripple;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r * 0.72 + Math.cos(angle * 2 + phase) * 18;
          if (point === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = `rgba(210, 250, 105, ${0.05 + (ring / 36) * 0.19})`;
        context.lineWidth = 0.7;
        context.stroke();
      }
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const tick = (time) => {
      if (previousTime && time - previousTime < 32) {
        frame = requestAnimationFrame(tick);
        return;
      }
      phase += previousTime ? Math.min(time - previousTime, 64) * 0.00025 : 0;
      previousTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (!paused && visible && !document.hidden) frame = requestAnimationFrame(tick);
      else draw();
    };
    const move = (event) => {
      if (paused || event.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / Math.max(width, 1) - 0.5;
      pointer.y = (event.clientY - rect.top) / Math.max(height, 1) - 0.5;
    };
    const reset = () => { pointer.x = 0; pointer.y = 0; };
    const parent = canvas.parentElement;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    observer.observe(canvas);
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', sync);
    resize();
    sync();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [paused]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
