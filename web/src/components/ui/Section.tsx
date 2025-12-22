import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("py-16 sm:py-20", className)}
      {...props}
    />
  );
}
