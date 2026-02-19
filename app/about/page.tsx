import FooterSection from "@/components/FooterSection";
import AboutHero from "@/components/AboutHero";
import VisionMissionSection from "@/components/VisionMission";
import CoreValuesSection from "@/components/CoreValues";

export default function Home() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <VisionMissionSection />
            <CoreValuesSection />
            <FooterSection />
        </main>
    );
}
