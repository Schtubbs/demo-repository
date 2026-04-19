import Image from "next/image";
import {
  Button,
  Container,
  Eyebrow,
  H1,
  Lead,
  PhoneLink,
  Section,
} from "@/components/ui";

const SHOP_PHONE = "201-747-8484";

export function Hero() {
  return (
    <Section spacing="lg" className="pt-12 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 space-y-8">
            <Eyebrow>Fair Lawn, NJ · Since 1993</Eyebrow>

            <H1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] leading-[1.02]">
              Your car's next 100,000 miles
              <span className="text-rust">.</span>
              <br className="hidden sm:block" /> start here.
            </H1>

            <Lead className="max-w-xl">
              Independent shop. Three decades of straight answers, fair
              estimates, and work that holds up. We service what we'd put our
              own family in.
            </Lead>

            <div className="flex flex-wrap gap-4 pt-2">
              <PhoneLink phone={SHOP_PHONE} label="Call the shop" />
              <Button variant="secondary" size="lg">
                Book an appointment
              </Button>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  Established
                </dt>
                <dd className="font-display text-2xl font-bold text-ink mt-1">
                  1993
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  Vehicles served
                </dt>
                <dd className="font-display text-2xl font-bold text-ink mt-1">
                  40k+
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  Towing
                </dt>
                <dd className="font-display text-2xl font-bold text-ink mt-1">
                  24 / 7
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: photo */}
          <div className="lg:col-span-5">
            <figure className="space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-neutral-200 shadow-card">
                <Image
                  src="https://images.pexels.com/photos/8986145/pexels-photo-8986145.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Mechanic inspecting a lifted SUV inside the shop"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                The shop floor · Fair Lawn, NJ
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </Section>
  );
}
