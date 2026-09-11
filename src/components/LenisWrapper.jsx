import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export default function LenisWrapper({ children }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false });
    let frame;
    const tick = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
