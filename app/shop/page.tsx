import FooterSection from "@/components/FooterSection";
import HeroSell from "@/components/HeroSell";
import ShopContact from "@/components/ShopContact";
import FaqsShop from "@/components/FaqsShop";
export default function ShopPage() {
    return (
        <main className="min-h-screen">
            <HeroSell />
            <ShopContact />
            <FaqsShop />
            <FooterSection />
        </main>
    );
}
