import {
  Container,
  Eyebrow,
  H2,
  PhoneLink,
  Section,
} from "@/components/ui";

const SHOP_PHONE = "201-747-8484";
const ADDRESS_LINE_1 = "12-34 River Road";
const ADDRESS_LINE_2 = "Fair Lawn, NJ 07410";
const MAPS_QUERY = encodeURIComponent(
  "Ultimate Car Care, Fair Lawn, NJ",
);

const hours: { day: string; time: string }[] = [
  { day: "Mon – Fri", time: "7:30 am – 6:00 pm" },
  { day: "Saturday", time: "8:00 am – 4:00 pm" },
  { day: "Sunday", time: "Closed (towing 24/7)" },
];

export function LocationHours() {
  return (
    <Section
      spacing="lg"
      id="location"
      className="bg-neutral-50 border-y border-neutral-200"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200 shadow-card bg-neutral-200">
              <iframe
                title="Map to Ultimate Car Care, Fair Lawn, NJ"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <Eyebrow>Come by</Eyebrow>
              <H2>Find us on River Road.</H2>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Address
              </div>
              <p className="font-display text-xl text-ink leading-snug">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel mb-3">
                Hours
              </div>
              <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between py-3"
                  >
                    <dt className="font-display font-semibold text-ink">
                      {h.day}
                    </dt>
                    <dd className="font-mono text-sm text-ink/80">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pt-2">
              <PhoneLink phone={SHOP_PHONE} label="Call the shop" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
