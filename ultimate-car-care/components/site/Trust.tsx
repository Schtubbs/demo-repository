import { Container, Eyebrow, Section } from "@/components/ui";

export function Trust() {
  return (
    <Section
      spacing="lg"
      id="trust"
      className="bg-cream border-y border-neutral-200"
    >
      <Container>
        <div className="max-w-5xl space-y-10">
          <Eyebrow>Who we work for</Eyebrow>

          <p className="font-display font-bold text-ink leading-[1.05] tracking-tight text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.75rem]">
            30+ years.{" "}
            <span className="text-steel-500">Domestic, foreign,</span>{" "}
            <span className="text-steel-500">fleet,</span>{" "}
            <span className="text-steel-500">leased returns.</span>{" "}
            <span className="text-rust">Se habla español.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-300">
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Honest estimates
              </div>
              <p className="font-body text-base text-ink/80">
                You hear about every part and every hour before we touch the
                car.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Local accountability
              </div>
              <p className="font-body text-base text-ink/80">
                Same family, same building, same phone number for thirty years.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                Warranty on the work
              </div>
              <p className="font-body text-base text-ink/80">
                Two years / 24,000 miles on parts and labor we install.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
