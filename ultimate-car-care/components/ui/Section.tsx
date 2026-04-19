import * as React from "react";
import { cn } from "@/lib/cn";

type Spacing = "sm" | "md" | "lg";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: Spacing;
  as?: "section" | "div" | "article";
}

const spacings: Record<Spacing, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ spacing = "md", as: Tag = "section", className, ...props }, ref) => {
    const Component = Tag as React.ElementType;
    return (
      <Component
        ref={ref}
        className={cn(spacings[spacing], className)}
        {...props}
      />
    );
  },
);
Section.displayName = "Section";
