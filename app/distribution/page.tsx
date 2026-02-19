import DistHero from "@/components/DistHero";
import FaqsShop from "@/components/FaqsShop";
import FooterSection from "@/components/FooterSection";
import DistKnow from "@/components/DistKnow";
export default function DistributionPage() {
    return (
        <main className="min-h-screen">
            <DistHero />
            <DistKnow />
            <FaqsShop />
            <FooterSection />
        </main>
    );
}
