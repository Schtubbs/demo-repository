import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ as: Tag = "div", className, ...props }, ref) => {
    const Component = Tag as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-xl bg-cream border border-neutral-200 p-6 md:p-8 shadow-card",
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";
