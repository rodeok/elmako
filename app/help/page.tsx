import FooterSection from "@/components/FooterSection";
import HelpCta from "@/components/HelpCta";
import HelpReturns from "@/components/HelpReturns";
import HelpSupport from "@/components/HelpSupport";
import FaqsShop from "@/components/FaqsShop";
export default function HelpPage() {
    return (
        <main className="min-h-screen">
            <HelpCta />
            <HelpReturns />
            <HelpSupport />
            <FaqsShop />
            <FooterSection />
        </main>
    );
}
