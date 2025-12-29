import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  enterLeft: {
    x: -400,
    scale: 0.85,
    opacity: 0,
    zIndex: 0,
  },
  enterRight: {
    x: 420,
    scale: 0.85,
    opacity: 0,
    zIndex: 0,
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 2,
  },
  left: {
    x: -200,
    scale: 0.85,
    opacity: 0.7,
    zIndex: 1,
  },
  right: {
    x: 200,
    scale: 0.85,
    opacity: 0.7,
    zIndex: 1,
  },
  exitLeft: {
    x: -400,
    scale: 0.85,
    opacity: 0,
    zIndex: 0,
  },
  exitRight: {
    x: 420,
    scale: 0.85,
    opacity: 0,
    zIndex: 0,
  },
};

export default function MotionCarousel({ items }) {
  const [[index, direction], setState] = useState([0, 0]);
  const INTERVAL = 2000; // 0.5 sec
  const paginate = (dir) => {
    setState([(index + dir + items.length) % items.length, dir]);
  };

  const total = items.length;

  useEffect(() => {
    if (!items || total < 2) return;

    const interval = setInterval(() => {
      setState(([prevIndex]) => [
        (prevIndex + 1) % total,
        1, // direction = right
      ]);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-105 flex items-center justify-center overflow-hidden ">
      <AnimatePresence initial={false} custom={direction}>
        {[-1, 0, 1].map((offset) => {
          const i = (index + offset + total) % total;

          const position =
            offset === 0 ? "center" : offset === -1 ? "left" : "right";

          const enter = direction > 0 ? "enterRight" : "enterLeft";
          const exit = direction > 0 ? "exitLeft" : "exitRight";

          return (
            <motion.div
              key={i}
              custom={direction}
              variants={variants}
              initial={enter}
              animate={position}
              exit={exit}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute touch-pan-x will-change-transform"
            >
              {items[i]}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 text-white text-2xl z-10"
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-6 text-white text-2xl z-10"
      >
        ›
      </button>
    </div>
  );
}
