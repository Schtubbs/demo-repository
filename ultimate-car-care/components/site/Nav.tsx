import Link from "next/link";
import { Container } from "@/components/ui";

const SHOP_PHONE = "201-747-8484";

const links = [
  { href: "#services", label: "Services" },
  { href: "#trust", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-neutral-200">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display font-bold text-ink"
        >
          <span className="text-lg md:text-xl tracking-tight">Ultimate</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust">
            Car Care
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold text-ink/80 hover:text-rust transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${SHOP_PHONE.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-2 rounded-md bg-ink text-cream px-4 py-2.5 md:px-5 md:py-3 font-mono text-sm md:text-base font-medium tracking-wide shadow-card hover:bg-rust transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-rust"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden sm:inline">Call</span> {SHOP_PHONE}
        </a>
      </Container>
    </header>
  );
}
