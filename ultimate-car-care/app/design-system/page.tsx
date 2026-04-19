import {
  Button,
  Card,
  Container,
  PhoneLink,
  Section,
  H1,
  H2,
  H3,
  Eyebrow,
  Body,
  Lead,
} from "@/components/ui";

const colorTokens: { name: string; cls: string; hex: string }[] = [
  { name: "ink", cls: "bg-ink", hex: "#111418" },
  { name: "cream", cls: "bg-cream border border-neutral-300", hex: "#F5F1E8" },
  { name: "rust", cls: "bg-rust", hex: "#C9561E" },
  { name: "steel", cls: "bg-steel", hex: "#6B7280" },
];

const rustScale: { step: number; cls: string }[] = [
  { step: 50, cls: "bg-rust-50" },
  { step: 100, cls: "bg-rust-100" },
  { step: 200, cls: "bg-rust-200" },
  { step: 300, cls: "bg-rust-300" },
  { step: 400, cls: "bg-rust-400" },
  { step: 500, cls: "bg-rust-500" },
  { step: 600, cls: "bg-rust-600" },
  { step: 700, cls: "bg-rust-700" },
  { step: 800, cls: "bg-rust-800" },
  { step: 900, cls: "bg-rust-900" },
];

const steelScale: { step: number; cls: string }[] = [
  { step: 50, cls: "bg-steel-50" },
  { step: 100, cls: "bg-steel-100" },
  { step: 200, cls: "bg-steel-200" },
  { step: 300, cls: "bg-steel-300" },
  { step: 400, cls: "bg-steel-400" },
  { step: 500, cls: "bg-steel-500" },
  { step: 600, cls: "bg-steel-600" },
  { step: 700, cls: "bg-steel-700" },
  { step: 800, cls: "bg-steel-800" },
  { step: 900, cls: "bg-steel-900" },
];

const neutralScale: { step: number; cls: string }[] = [
  { step: 50, cls: "bg-neutral-50" },
  { step: 100, cls: "bg-neutral-100" },
  { step: 200, cls: "bg-neutral-200" },
  { step: 300, cls: "bg-neutral-300" },
  { step: 400, cls: "bg-neutral-400" },
  { step: 500, cls: "bg-neutral-500" },
  { step: 600, cls: "bg-neutral-600" },
  { step: 700, cls: "bg-neutral-700" },
  { step: 800, cls: "bg-neutral-800" },
  { step: 900, cls: "bg-neutral-900" },
];

const spacingRhythm = [
  { token: "12 (3rem)", cls: "w-12" },
  { token: "16 (4rem)", cls: "w-16" },
  { token: "24 (6rem)", cls: "w-24" },
  { token: "32 (8rem)", cls: "w-32" },
];

function SwatchScale({
  name,
  scale,
}: {
  name: string;
  scale: { step: number; cls: string }[];
}) {
  return (
    <div>
      <Eyebrow>{name}</Eyebrow>
      <div className="mt-3 grid grid-cols-5 sm:grid-cols-10 gap-2">
        {scale.map(({ step, cls }) => (
          <div key={step} className="space-y-1">
            <div
              className={`h-12 rounded-md border border-neutral-200 ${cls}`}
            />
            <div className="font-mono text-[10px] text-steel">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <H3>{title}</H3>
      <div>{children}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="bg-cream text-ink">
      <Section spacing="md" className="border-b border-neutral-200">
        <Container className="space-y-4">
          <Eyebrow>Ultimate Car Care · Design System</Eyebrow>
          <H1>Design tokens & primitives</H1>
          <Lead>
            A living style guide. Every color, type ramp, spacing rhythm, and
            UI primitive for the marketing site lives here.
          </Lead>
        </Container>
      </Section>

      {/* COLORS */}
      <Section>
        <Container className="space-y-12">
          <Block title="Brand colors">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {colorTokens.map((c) => (
                <div key={c.name} className="space-y-2">
                  <div className={`h-24 rounded-lg ${c.cls} shadow-card`} />
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-semibold">{c.name}</span>
                    <span className="font-mono text-xs text-steel">
                      {c.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Color scales">
            <div className="space-y-8">
              <SwatchScale name="rust" scale={rustScale} />
              <SwatchScale name="steel" scale={steelScale} />
              <SwatchScale name="neutral" scale={neutralScale} />
            </div>
          </Block>
        </Container>
      </Section>

      {/* TYPOGRAPHY */}
      <Section className="bg-neutral-50 border-y border-neutral-200">
        <Container className="space-y-12">
          <Block title="Typography">
            <div className="space-y-8">
              <div className="space-y-2">
                <Eyebrow>H1 · Display 700</Eyebrow>
                <H1>Honest service. Built on 30 years.</H1>
              </div>
              <div className="space-y-2">
                <Eyebrow>H2 · Display 700</Eyebrow>
                <H2>Brakes, transmissions, diagnostics</H2>
              </div>
              <div className="space-y-2">
                <Eyebrow>H3 · Display 600</Eyebrow>
                <H3>What we work on</H3>
              </div>
              <div className="space-y-2">
                <Eyebrow>Eyebrow · Mono uppercase</Eyebrow>
                <div>
                  <Eyebrow>Fair Lawn · Bergen County</Eyebrow>
                </div>
              </div>
              <div className="space-y-2">
                <Eyebrow>Lead · Body 400 large</Eyebrow>
                <Lead>
                  Family-run independent shop serving Fair Lawn drivers for
                  three decades. Walk-ins welcome.
                </Lead>
              </div>
              <div className="space-y-2">
                <Eyebrow>Body · Body 400</Eyebrow>
                <Body>
                  We service domestic and import vehicles — oil changes,
                  diagnostics, suspension, exhaust, A/C, and full inspections.
                  Honest estimates, no upsell pressure.
                </Body>
              </div>
              <div className="space-y-2">
                <Eyebrow>Mono · JetBrains Mono</Eyebrow>
                <p className="font-mono text-base">(201) 555-0142 · VIN-Ready</p>
              </div>
            </div>
          </Block>
        </Container>
      </Section>

      {/* SPACING */}
      <Section>
        <Container className="space-y-12">
          <Block title="Spacing rhythm (12 / 16 / 24 / 32)">
            <div className="space-y-3">
              {spacingRhythm.map((s) => (
                <div key={s.token} className="flex items-center gap-4">
                  <span className="font-mono text-xs text-steel w-28">
                    {s.token}
                  </span>
                  <div className={`${s.cls} h-3 bg-rust rounded`} />
                </div>
              ))}
            </div>
          </Block>

          <Block title="Card shadow">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <Eyebrow>Card</Eyebrow>
                <H3 className="mt-2">Default</H3>
                <Body className="mt-2">
                  Low, warm shadow tinted toward rust to feel grounded against
                  the cream background.
                </Body>
              </Card>
              <div className="rounded-xl bg-cream border border-neutral-200 p-6 md:p-8">
                <Eyebrow>Compare</Eyebrow>
                <H3 className="mt-2">No shadow</H3>
                <Body className="mt-2">
                  Same surface without the <code className="font-mono text-sm">shadow-card</code> token.
                </Body>
              </div>
            </div>
          </Block>
        </Container>
      </Section>

      {/* COMPONENTS */}
      <Section className="bg-neutral-50 border-y border-neutral-200">
        <Container className="space-y-12">
          <Block title="Button — variants">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Schedule service</Button>
              <Button variant="secondary">Get an estimate</Button>
              <Button variant="ghost">Learn more</Button>
            </div>
          </Block>

          <Block title="Button — sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Block>

          <Block title="Button — states">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Block>

          <Block title="PhoneLink">
            <div className="flex flex-wrap gap-4">
              <PhoneLink phone="(201) 555-0142" />
              <PhoneLink phone="(201) 555-0142" label="Tap to call" />
            </div>
          </Block>
        </Container>
      </Section>

      {/* LAYOUT */}
      <Section>
        <Container className="space-y-12">
          <Block title="Container & Section">
            <div className="rounded-lg border border-dashed border-steel-300 p-4">
              <Eyebrow>Container width = max-w-6xl</Eyebrow>
              <Body className="mt-2">
                This wrapper centers content and applies consistent horizontal
                padding (px-6 / md:px-8). Sections add vertical rhythm via the{" "}
                <code className="font-mono text-sm">spacing</code> prop (sm /
                md / lg).
              </Body>
            </div>
          </Block>
        </Container>
      </Section>
    </main>
  );
}
