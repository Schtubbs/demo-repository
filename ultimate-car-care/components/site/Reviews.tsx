import {
  Card,
  Container,
  Eyebrow,
  H2,
  Section,
} from "@/components/ui";

const reviews = [
  {
    quote:
      "Took my Outback in for a brake noise. They found a worn caliper bracket the dealer missed twice, fixed it for less than the quote, and called when they said they would. Done.",
    author: "Maria K.",
    where: "Fair Lawn",
  },
  {
    quote:
      "I've been bringing every car my family owns here since 2008. Honest, fast, and they don't sell you anything you don't need. The whole block knows them.",
    author: "Dan P.",
    where: "Glen Rock",
  },
  {
    quote:
      "Blew a tire on Route 4 at 11pm. Tow truck was there in 25 minutes, car was ready by lunch the next day. Reasonable price, no drama.",
    author: "Elaine R.",
    where: "Paramus",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-rust" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section spacing="lg" id="reviews">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <Eyebrow>From the neighbors</Eyebrow>
            <H2>Word of mouth, written down.</H2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-rust transition-colors"
          >
            See all Google reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card key={r.author} className="flex flex-col gap-6">
              <Stars />
              <blockquote className="flex-1 font-display text-lg leading-snug text-ink">
                <span aria-hidden className="text-rust">“</span>
                {r.quote}
                <span aria-hidden className="text-rust">”</span>
              </blockquote>
              <footer className="pt-4 border-t border-neutral-200 flex items-baseline justify-between">
                <cite className="not-italic font-display font-semibold text-ink">
                  {r.author}
                </cite>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  {r.where}
                </span>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
