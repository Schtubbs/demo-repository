import {
  Card,
  Container,
  Eyebrow,
  H2,
  Body,
  Section,
} from "@/components/ui";

const services = [
  {
    n: "01",
    title: "Oil Changes",
    blurb:
      "Conventional, blend, or full synthetic. Filter swap, fluid top-off, and a full courtesy check while you wait.",
  },
  {
    n: "02",
    title: "Mechanical",
    blurb:
      "Brakes, suspension, exhaust, transmissions, engine work. Diagnostics done right the first time.",
  },
  {
    n: "03",
    title: "Maintenance",
    blurb:
      "Factory-scheduled service for any make. Belts, fluids, filters, plugs — everything that keeps you on the road.",
  },
  {
    n: "04",
    title: "Tires & Alignment",
    blurb:
      "Mount, balance, rotate, repair. Four-wheel alignment with a printed before/after spec sheet.",
  },
  {
    n: "05",
    title: "Glass Repair",
    blurb:
      "Windshield chip and crack repair. Full replacements coordinated through your insurance.",
  },
  {
    n: "06",
    title: "24 / 7 Towing",
    blurb:
      "Flat-bed and wheel-lift towing across Bergen County. Roadside lockouts and jump-starts too.",
  },
];

export function Services() {
  return (
    <Section spacing="lg" id="services">
      <Container>
        <div className="max-w-2xl mb-16 space-y-4">
          <Eyebrow>What we work on</Eyebrow>
          <H2>Six things, done well.</H2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.n} className="flex flex-col gap-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs text-steel">{s.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  Service
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
                {s.title}
              </h3>
              <Body className="flex-1">{s.blurb}</Body>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-rust transition-colors"
              >
                Learn more
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
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
