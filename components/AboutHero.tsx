import Image from "next/image";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function AboutHero() {
    return (
        <section className="bg-[#f7f7f7] min-h-screen flex items-center justify-center px-6 pb-12 pt-32 md:px-12 md:pb-12 md:pt-40">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-8">
                    <h1 className={`${gestyRatio.className} text-5xl md:text-7xl text-gray-600 leading-[1.1]`}>
                        Rooted in<br />
                        Responsibility.
                    </h1>

                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/root-tech.png"
                            alt="Root Technology"
                            fill
                            className="object-cover"
                        />
                    </div>


                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-8 md:mt-32"> {/* Staggered offset */}
                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/smart-farm.png"
                            alt="Smart Farming"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h2 className={`${gestyRatio.className} text-5xl md:text-7xl text-gray-600 leading-[1.1] text-right`}>
                        Driven by<br />
                        Innovation.
                    </h2>
                </div>
            </div>
        </section>
    );
}
