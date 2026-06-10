import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QuemSomosSection } from "@/components/QuemSomosSection";
import { NossoTimeSection } from "@/components/NossoTimeSection";
import { AreasSection } from "@/components/AreasSection";
import { NewsSection } from "@/components/NewsSection";
import { ContatoSection } from "@/components/ContatoSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <QuemSomosSection />
        <NossoTimeSection />
        <AreasSection />
        <NewsSection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
