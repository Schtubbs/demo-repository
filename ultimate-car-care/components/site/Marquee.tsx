import Image from "next/image";
import { Container } from "@/components/ui";

export function Marquee() {
  return (
    <section aria-label="Shop photo" className="py-8 md:py-12">
      <Container className="px-0 md:px-8">
        <figure className="space-y-3">
          <div className="relative aspect-[21/9] w-full overflow-hidden md:rounded-lg bg-neutral-300 shadow-card">
            <Image
              src="https://images.pexels.com/photos/3807811/pexels-photo-3807811.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Mechanic working underneath a vehicle on a lift"
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-6 md:px-0 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
            On the lift · Diagnostics & repair
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
