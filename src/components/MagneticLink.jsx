import { motion, useReducedMotion, useSpring } from 'framer-motion';

export default function MagneticLink({ children, className = '', ...props }) {
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  const reset = () => { x.set(0); y.set(0); };

  const move = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.2);
  };

  return (
    <span className="magnetic-zone" onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
      <motion.a {...props} className={className} style={reducedMotion ? {} : { x, y }} onBlur={reset}>
        {children}
      </motion.a>
    </span>
  );
}
