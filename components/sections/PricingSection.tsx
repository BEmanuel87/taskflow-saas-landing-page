"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PLANS } from "@/lib/constants";
import { ease } from "@/lib/motion";

export default function PricingSection() {
  return (
    <section id="pricing" className="border-t border-white/7 py-28">
      <div className="mx-auto max-w-290 px-6">
        <SectionHeader
          pill="Pricing"
          title={
            <>
              Simple pricing, <span className="grad-text">no surprises.</span>
            </>
          }
          subtitle="Start free, scale when you need. Cancel anytime, no questions asked."
        />

        <div className="mx-auto grid max-w-240 gap-5 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -5 }}
              className={`relative flex flex-col rounded-2xl border p-9 overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? "border-[rgba(108,99,255,0.4)] bg-linear-to-b from-[rgba(108,99,255,0.08)] to-surface"
                  : "border-white/7 bg-surface"
              }`}
            >
              {/* Featured top border */}
              {plan.featured && (
                <div className="absolute inset-x-0 top-0 h-0.5 grad-bg" />
              )}

              {/* Badge */}
              {plan.badge && (
                <span className="mb-5 inline-flex self-start rounded-full grad-bg px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-syne text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-[14px] text-muted mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-start leading-none">
                  <span className="font-syne mt-2 text-lg font-semibold">
                    $
                  </span>
                  <span className="font-syne text-[56px] font-extrabold tracking-tight leading-none">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-muted">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feat) => (
                  <li
                    key={feat.label}
                    className={`flex items-start gap-3 text-[14px] ${
                      feat.included ? "text-muted" : "opacity-35 text-muted"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        feat.included
                          ? "bg-[rgba(56,217,169,0.15)] text-accent2"
                          : "bg-white/5 text-muted"
                      }`}
                    >
                      {feat.included ? (
                        <Check size={10} strokeWidth={3} />
                      ) : (
                        <X size={10} strokeWidth={3} />
                      )}
                    </span>
                    {feat.label}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.ctaVariant}
                size="md"
                href="#"
                className={`w-full justify-center py-3 ${
                  plan.ctaVariant === "primary"
                    ? "shadow-[0_0_30px_rgba(108,99,255,0.22)] hover:shadow-[0_0_50px_rgba(108,99,255,0.4)]"
                    : ""
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
