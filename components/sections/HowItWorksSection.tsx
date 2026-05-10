"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { STEPS } from "@/lib/constants";
import { ease } from "@/lib/motion";

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      className="border-t border-white/7 py-28"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(108,99,255,0.03), transparent)",
      }}
    >
      <div className="mx-auto max-w-290 px-6">
        <SectionHeader
          pill="How it works"
          title={
            <>
              Up and running in{" "}
              <span className="grad-text">under 5 minutes.</span>
            </>
          }
          subtitle="No long onboarding. No steep learning curve. Just you, your team, and your work."
        />

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div
            className="absolute top-9 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), rgba(255,255,255,0.07), transparent)",
            }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
              className="group text-center px-6 py-8"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full border border-white/7 bg-surface font-syne text-xl font-extrabold relative z-10 transition-all duration-300 group-hover:grad-bg group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]"
              >
                {step.num}
              </motion.div>
              <h3 className="font-syne text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
