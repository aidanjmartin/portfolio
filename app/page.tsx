import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { FocusAreas } from "@/components/focus-areas";
import { Credentials } from "@/components/credentials";
import { Awards } from "@/components/awards";
import { Experience } from "@/components/experience";
import { Research } from "@/components/research";
import { Hackathons } from "@/components/hackathons";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Graph paper background */}
      <div className="bg-grid" aria-hidden="true" />

      <Hero />
      <Navigation />

      <main className="relative z-[1]">
        <About />
        <FocusAreas />
        <Credentials />
        <Awards />
        <Experience />
        <Research />
        <Hackathons />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
