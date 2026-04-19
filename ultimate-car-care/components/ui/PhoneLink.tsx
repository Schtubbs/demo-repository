import * as React from "react";
import { cn } from "@/lib/cn";

export interface PhoneLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  phone: string;
  label?: string;
}

function toTel(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const PhoneLink = React.forwardRef<HTMLAnchorElement, PhoneLinkProps>(
  ({ phone, label = "Call", className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={toTel(phone)}
        className={cn(
          "group inline-flex items-center gap-3 rounded-lg",
          "bg-ink text-cream px-5 py-3 min-h-12",
          "shadow-card transition-colors hover:bg-rust",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
          className,
        )}
        {...props}
      >
        <span
          aria-hidden
          className="grid place-items-center h-8 w-8 rounded-full bg-rust text-cream group-hover:bg-cream group-hover:text-rust transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/70">
            {label}
          </span>
          <span className="font-mono text-base md:text-lg font-medium tracking-wide">
            {phone}
          </span>
        </span>
      </a>
    );
  },
);
PhoneLink.displayName = "PhoneLink";
