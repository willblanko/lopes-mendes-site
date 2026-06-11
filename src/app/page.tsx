import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SobreSection } from "@/components/home/SobreSection";
import { AreasSection } from "@/components/home/AreasSection";
import { StatsSection } from "@/components/home/StatsSection";
import { EquipeSection } from "@/components/home/EquipeSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SobreSection />
        <AreasSection />
        <StatsSection />
        <EquipeSection />
        <ManifestoSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
