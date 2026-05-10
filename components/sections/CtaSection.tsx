"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { ease } from "@/lib/motion";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="border-t border-white/7 py-32 text-center relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-175 w-175 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.11) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-290 px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <Pill className="mx-auto mb-8">Get started today</Pill>

          <h2 className="font-syne text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 lg:text-6xl">
            Start organizing your
            <br />
            <span className="grad-text">team today.</span>
          </h2>

          <p className="mx-auto mb-12 max-w-md text-lg font-light leading-relaxed text-muted">
            Free forever for small teams. No credit card, no commitments. Just
            clarity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#"
              className="shadow-[0_0_50px_rgba(108,99,255,0.35)]"
            >
              Start free trial
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" href="#">
              Talk to sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
