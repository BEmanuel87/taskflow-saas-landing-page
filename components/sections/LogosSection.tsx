"use client";

import { motion } from "framer-motion";
import { LOGOS } from "@/lib/constants";
import { ease } from "@/lib/motion";

export default function LogosSection() {
  return (
    <section className="border-t border-white/7 py-12">
      <div className="mx-auto max-w-290 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center text-[12px] uppercase tracking-[0.12em] text-muted"
        >
          Trusted by teams at
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center justify-center gap-10"
        >
          {LOGOS.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="font-syne text-lg font-bold tracking-tight text-white/16 hover:text-white/40 transition-colors duration-300 cursor-default select-none"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
