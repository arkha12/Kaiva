"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ShimmerButton } from "./ShimmerButton";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setVisible(latest > 700 && latest < max - 1200);
  });

  return (
    <div className="fixed right-6 bottom-6 z-40 hidden sm:block">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ShimmerButton href="#piloto" className="shadow-lg shadow-black/30">
              Solicita acceso
            </ShimmerButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
