import localFont from 'next/font/local';
import SidebarMenu from "./SidebarMenu";
import NewsletterCard from "./NewsletterCard";

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function FooterSection() {
    return (
        <section className="bg-[#061c14] pt-20 pb-0 overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl w-full mx-auto px-6 mb-20">
                {/* Top Content */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch bg-[#26331a] p-4 md:p-8 rounded-[2.5rem]">
                    <SidebarMenu />
                    <NewsletterCard />
                </div>
            </div>

            {/* Huge Text */}
            <h1 className={`${gestyRatio.className} text-[23vw] leading-[0.8] text-[#d6dbc6] text-center w-full`}>
                Elmako
            </h1>

            {/* Bottom Credit */}
            <div className="w-full bg-[#061c14] pb-4">
                <p className={`${gestyRatio.className} text-xs text-gray-400 text-center`}>
                    Build by I.C.E
                </p>
            </div>
        </section>
    );
}
