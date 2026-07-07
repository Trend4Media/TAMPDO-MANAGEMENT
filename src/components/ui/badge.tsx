import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-sharp)] border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider",
  {
    variants: {
      variant: {
        neutral: "border-line bg-white/5 text-ivory-dim",
        success: "border-emerald/50 bg-emerald/15 text-[#5fd6ae]",
        warning: "border-gold/50 bg-gold/10 text-gold",
        info: "border-emerald/40 bg-emerald/10 text-[#7fd8bd]",
        gold: "border-gold/60 bg-[linear-gradient(135deg,#E6C36A,#B8923E)] text-emerald-deep",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
