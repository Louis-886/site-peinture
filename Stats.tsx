"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { useCountUp } from "@/lib/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <div className="font-display text-6xl font-black tracking-tightest text-blanc sm:text-7xl lg:text-8xl">
        {animatedValue}
        <span className="text-orange">{suffix}</span>
      </div>
      <p className="mt-3 font-body text-sm uppercase tracking-widest2 text-white/50">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-noir py-24 sm:py-28">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 h-4 brush-divider bg-orange"
        />
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
