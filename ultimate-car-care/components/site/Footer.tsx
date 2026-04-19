import { Container, Eyebrow } from "@/components/ui";

const SHOP_PHONE = "201-747-8484";
const TOWING_PHONE = "201-747-8485";
const FLEET_PHONE = "201-747-8486";

const phones = [
  { label: "Shop", number: SHOP_PHONE },
  { label: "24 / 7 Towing", number: TOWING_PHONE },
  { label: "Fleet & commercial", number: FLEET_PHONE },
];

function tel(n: string) {
  return `tel:${n.replace(/\D/g, "")}`;
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-16 md:py-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {phones.map((p) => (
            <div key={p.label} className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
                {p.label}
              </div>
              <a
                href={tel(p.number)}
                className="block font-mono text-2xl md:text-3xl font-medium tracking-wide hover:text-rust transition-colors"
              >
                {p.number}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-cream/15">
          <div className="space-y-3">
            <Eyebrow className="text-cream/60">Ultimate Car Care</Eyebrow>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              Independent auto repair in Fair Lawn, NJ. Family-run since 1993.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
              Visit
            </div>
            <p className="font-body text-sm text-cream/85 leading-relaxed">
              12-34 River Road
              <br />
              Fair Lawn, NJ 07410
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60">
              Hours
            </div>
            <p className="font-body text-sm text-cream/85 leading-relaxed">
              Mon – Fri · 7:30a – 6p
              <br />
              Sat · 8a – 4p
              <br />
              Sun · Closed (towing 24/7)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-cream/15">
          <p className="font-mono text-xs text-cream/50">
            © {new Date().getFullYear()} Ultimate Car Care · Fair Lawn, NJ
          </p>
          <p className="font-mono text-xs text-cream/50">
            Se habla español
          </p>
        </div>
      </Container>
    </footer>
  );
}
