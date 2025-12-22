import { clsx } from "clsx";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  Ref,
} from "react";
import { forwardRef } from "react";

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

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

type ButtonComponent = <T extends ElementType = "button">(
  props: ButtonProps<T> & { ref?: Ref<ElementRef<T>> },
) => ReactElement | null;

function InnerButton<T extends ElementType = "button">(
  {
    as,
    children,
    className,
    variant = "primary",
    fullWidth,
    ...props
  }: ButtonProps<T>,
  ref: ForwardedRef<ElementRef<T>>,
) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        baseClasses,
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export const Button = forwardRef(InnerButton) as ButtonComponent;
