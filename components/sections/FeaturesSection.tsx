"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";
import { ease } from "@/lib/motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="border-t border-white/7 py-28">
      <div className="mx-auto max-w-290 px-6">
        <SectionHeader
          pill="Features"
          title={
            <>
              Everything your team needs,{" "}
              <span className="grad-text">nothing it doesn&apos;t.</span>
            </>
          }
          subtitle="Four core pillars that keep your team aligned, productive, and always on track."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col rounded-2xl border border-white/7 bg-surface p-8 transition-colors duration-300 hover:border-[rgba(108,99,255,0.28)] overflow-hidden"
              >
                {/* Top gradient border on hover */}
                <div className="absolute inset-x-0 top-0 h-px grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ${feat.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${feat.iconColor}`} />
                </div>

                <h3 className="font-syne text-lg font-bold mb-3">
                  {feat.title}
                </h3>
                <p className="text-muted text-[15px] leading-relaxed flex-1 mb-5">
                  {feat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/7 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
