import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sharp)] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Gold-Fill → Ghost-Hover mit Gold-Glow
        default:
          "bg-[linear-gradient(135deg,#E6C36A,#B8923E)] text-emerald-deep hover:bg-none hover:bg-transparent hover:text-gold hover:ring-1 hover:ring-gold hover:shadow-[0_0_18px_-2px_rgba(201,168,76,0.5)]",
        outline:
          "border border-line bg-transparent text-ivory hover:border-gold hover:text-gold",
        ghost: "text-ivory-dim hover:bg-white/5 hover:text-ivory",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
