import type { HTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";

type MotionFadeProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function MotionFade({
  children,
  className,
  delay = 0,
  ...props
}: MotionFadeProps) {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.35, delay, ease: "easeOut" };
  return (
    <motion.div
      initial={initialState}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={transitionConfig}
      className={clsx(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}




