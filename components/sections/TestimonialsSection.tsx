"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";
import { ease } from "@/lib/motion";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/7 py-28"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(56,217,169,0.02), transparent)",
      }}
    >
      <div className="mx-auto max-w-290 px-6">
        <SectionHeader
          pill="Testimonials"
          title={
            <>
              Teams that switched{" "}
              <span className="grad-text">never looked back.</span>
            </>
          }
          subtitle="Real words from real teams who use TaskFlow every day."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-5 rounded-2xl border border-white/7 bg-surface p-7 transition-colors duration-300 hover:border-white/12"
            >
              <div className="text-[#facc15] tracking-[3px] text-sm">
                {"★".repeat(t.stars)}
              </div>

              <p className="flex-1 text-[15px] italic leading-relaxed text-text">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${t.avatarGrad} font-syne text-[13px] font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold">{t.name}</p>
                  <p className="text-[12px] text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
