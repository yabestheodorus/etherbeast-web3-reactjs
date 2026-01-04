import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function SummonButton({ action, buttonText, buttonDisabled }) {
  const HOLD_DURATION = 1500;
  const HOLD_SECONDS = HOLD_DURATION / 1000;
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!holding) {
      setProgress(0);
      return;
    }

    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / HOLD_DURATION, 1);
      setProgress(pct);

      if (pct === 1) {
        setHolding(false);
        // action();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [holding]);

  return (
    <div>
      <div className="relative w-76 h-20">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-emerald-400"
          animate={{ scaleX: holding ? 1 : 0 }}
          transformOrigin="left"
          transition={{
            duration: holding ? HOLD_SECONDS : 0.15,
            ease: holding ? "easeOut" : "easeIn",
          }}
          onAnimationComplete={() => {
            if (holding) action();
          }}
          style={{
            boxShadow: holding
              ? "0 0 40px rgba(16,185,129,0.8)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full  bg-emerald-400/10"
          animate={{ opacity: holding ? 1 : 0 }}
          transition={{ duration: HOLD_SECONDS }}
        />

        <motion.button
          disabled={buttonDisabled}
          onPointerDown={() => setHolding(true)}
          onPointerUp={() => setHolding(false)}
          onPointerLeave={() => setHolding(false)}
          whileTap={{ scale: 0.97 }}
          className=" relative z-10 w-full h-full rounded-full 
          border border-slate-600/40 bg-slate-800  text-slate-300 text-2xl font-semibold tracking-widest select-none  hover:cursor-pointer "
        >
          {holding ? "CHANNELING..." : buttonText}
        </motion.button>
      </div>
    </div>
  );
}

export default SummonButton;
