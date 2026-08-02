"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Anime un compteur de 0 jusqu'à `target` lorsque l'élément entre dans le
 * viewport. Utilise requestAnimationFrame pour une animation fluide et
 * peu coûteuse (pas de re-render à chaque frame via setInterval).
 */
export function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frameId: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutQuart(progress);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return { ref, value };
}
