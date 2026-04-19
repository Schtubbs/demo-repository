import * as React from "react";
import { cn } from "@/lib/cn";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export function H1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "font-display font-bold text-ink tracking-tight",
        "text-4xl sm:text-5xl md:text-6xl leading-[1.05]",
        className,
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-display font-bold text-ink tracking-tight",
        "text-3xl sm:text-4xl md:text-5xl leading-[1.1]",
        className,
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        "font-display font-semibold text-ink tracking-tight",
        "text-2xl sm:text-3xl leading-[1.2]",
        className,
      )}
      {...props}
    />
  );
}

export function Eyebrow({ className, ...props }: SpanProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.18em] text-rust",
        className,
      )}
      {...props}
    />
  );
}

export function Body({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        "font-body text-base leading-relaxed text-ink/80",
        className,
      )}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        "font-body text-lg sm:text-xl leading-relaxed text-ink/85",
        className,
      )}
      {...props}
    />
  );
}
