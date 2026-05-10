import { cubicBezier, type Transition, type Variants } from "framer-motion";

export const ease = cubicBezier(0.22, 1, 0.36, 1);

export const transition = {
  default: { duration: 0.65, ease } satisfies Transition,
  fast: { duration: 0.4, ease } satisfies Transition,
  slow: { duration: 0.9, ease } satisfies Transition,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: transition.default },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: transition.default },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease, delay: 0.3 } },
};
