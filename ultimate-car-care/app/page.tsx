import {
  Footer,
  Hero,
  LocationHours,
  Marquee,
  Nav,
  Reviews,
  Services,
  Trust,
} from "@/components/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Trust />
        <Reviews />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
