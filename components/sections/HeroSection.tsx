"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { fadeUp, staggerContainer, ease } from "@/lib/motion";

const AVATARS = [
  { initials: "AK", from: "#6c63ff", to: "#a78bfa" },
  { initials: "MR", from: "#38d9a9", to: "#0ea5e9" },
  { initials: "LC", from: "#ff6584", to: "#fb923c" },
  { initials: "DP", from: "#facc15", to: "#f97316" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-45 pb-24">
      {/* Glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-150 w-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.16) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute top-24 -right-20 h-125 w-125 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56,217,169,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-290 px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-[rgba(56,217,169,0.2)] bg-[rgba(56,217,169,0.08)] px-3.5 py-1.5 text-[13px] font-medium text-accent2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent2" />
                New — Automation 2.0 is live
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-syne text-5xl font-extrabold tracking-[-0.03em] leading-[1.07] mb-6 lg:text-6xl"
            >
              Your team,
              <br />
              <span className="grad-text">perfectly in sync.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-md text-lg font-light leading-relaxed text-muted"
            >
              TaskFlow brings tasks, deadlines, and team collaboration into one
              clean workspace. Built for small teams who get things done.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                href="#"
                className="shadow-[0_0_40px_rgba(108,99,255,0.35)] hover:shadow-[0_0_60px_rgba(108,99,255,0.5)]"
              >
                Start free trial
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="#">
                <Play size={15} className="fill-current" />
                View demo
              </Button>
            </motion.div>

            {/* Trust */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex">
                {AVATARS.map((av, i) => (
                  <div
                    key={av.initials}
                    className="h-8 w-8 rounded-full border-2 border-bg font-syne text-[11px] font-bold flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${av.from}, ${av.to})`,
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-muted">
                <strong className="text-text">2,400+</strong> teams already
                using TaskFlow
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
