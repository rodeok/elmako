import Image from "next/image";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function Hero() {
    return (
        <main className="relative min-h-screen flex items-center justify-center pt-32 pb-12">
            {/* Background Image */}
            <Image
                src="/images/hero.jpg"
                alt="Farm"
                fill
                priority
                className="object-cover rounded-3xl"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl px-6 flex flex-col items-center">
                {/* Small Tag */}
                <div className="inline-block bg-white text-gray-800 text-sm font-medium px-6 py-2 rounded-full mb-6 max-w-min whitespace-nowrap">
                    Fresh
                </div>

                {/* Heading */}
                <h1
                    className={`${gestyRatio.className} text-6xl md:text-[112px] md:leading-[131.5px] tracking-[-0.51px] font-normal text-center mb-6`}
                    style={{ fontStyle: 'normal' }}
                >
                    From Farm to <br /> Future.
                </h1>

                {/* Description */}
                <p
                    className="text-xl md:text-1xl text-gray-200 mb-10 max-w-2xl mx-auto"
                    style={{
                        fontFamily: '"Mona Sans", sans-serif',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '19px', // Approximating Headline Small
                        lineHeight: '25px', // Approximating Headline Small
                        letterSpacing: '0px' // Approximating Headline Small
                    }}
                >
                    Fresh, nutritious farm and food products grown responsibly supporting
                    communities, protecting the environment, and setting new agricultural
                    standards.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 w-full sm:w-auto px-4 sm:px-0">
                    <button className="bg-[#22c55e] hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition w-full sm:w-auto">
                        Contact Us
                    </button>

                    <button className="bg-[#e6f8ef] text-[#22c55e] font-semibold px-8 py-3 rounded-lg hover:bg-[#d1fae5] transition w-full sm:w-auto">
                        About Us
                    </button>
                </div>

                <p className="text-sm underline cursor-pointer hover:text-green-300 transition-colors">
                    Learn About Our Farms →
                </p>
            </div>
        </main>
    );
}
