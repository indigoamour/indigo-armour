import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", variant = "default", ...props }, ref) => {
    const baseStyles = "w-auto rounded-full px-5 py-3 disabled:cursor-not-allowed font-semibold transition";
    
    const variants = {
      default: "border-transparent bg-black text-white hover:opacity-75",
      outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
      ghost: "border-transparent bg-transparent text-gray-900 hover:bg-gray-100"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
