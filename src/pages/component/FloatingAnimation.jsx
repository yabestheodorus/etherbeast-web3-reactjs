import React, { useMemo } from "react";
import { motion } from "framer-motion";

function random(min, max) {
  return Math.random() * (max - min) + min;
}
function FloatingAnimation({ children, index }) {
  var size = random(60, 80); // how big the circuit is
  const duration = random(10, 16);
  const delay = random(1, 2);

  const s = size; // circuit size

  var direction = "cw";
  if (index % 2 === 0) {
    direction = "ccw";
  }
  const dir = direction === "cw" ? 1 : -1;
  return (
    <motion.div
      animate={{
        x: [0, s * 0.9, s, s, s * 0.9, s * 0.1, 0, 0, s * 0.1, 0],
        y: [
          0,
          0,
          s * 0.1 * dir,
          s * 0.9 * dir,
          s * dir,
          s * dir,
          s * 0.9 * dir,
          s * 0.1 * dir,
          0,
          0,
        ],
        rotate: [0, 0.6, 0, -0.6, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default FloatingAnimation;
