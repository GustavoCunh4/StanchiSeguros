import { clsx } from "clsx";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ForwardedRef } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-brand-accent text-white shadow-card hover:bg-brand-accent-600 active:bg-brand-accent-600 ring-offset-brand-surface",
  secondary:
    "bg-white text-brand-primary shadow-sm ring-1 ring-brand-primary/20 hover:bg-brand-light-200 ring-offset-brand-surface",
  outline:
    "border border-brand-primary text-brand-primary hover:bg-brand-light-200 ring-offset-brand-surface",
  ghost:
    "bg-transparent text-brand-primary hover:bg-brand-light-200 ring-offset-brand-surface",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

function ButtonBase(
  { className, variant = "primary", fullWidth, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        baseClasses,
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}

export const Button = forwardRef(ButtonBase);
