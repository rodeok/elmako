import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import PartnerSection from "@/components/PartnerSection";
import WhyElmakSection from "@/components/WhyElmakSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FooterSection from "@/components/FooterSection";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDoSection />
      <PartnerSection />
      <WhyElmakSection />
      <SustainabilitySection />
      <FooterSection />
    </main>
  );
}
