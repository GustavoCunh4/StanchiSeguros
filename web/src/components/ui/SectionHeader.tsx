import { motion } from "framer-motion";
import { clsx } from "clsx";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={clsx(
        "space-y-3",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            "section-eyebrow flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-1 w-8 rounded-full bg-brand-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p
          className={clsx(
            "section-subtitle",
            align === "center" && "mx-auto max-w-3xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
