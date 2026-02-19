import React from "react";
import Image from "next/image";
import localFont from 'next/font/local';
import Link from 'next/link';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function HeroSell() {
    return (
        <section className="w-full bg-[#f7f7f7] pt-32 pb-16 md:pt-40 md:pb-16 px-6 md:px-12 space-y-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Top Card - Fresh Food */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group">
                    <Image
                        src="/images/crop.jpg"
                        alt="Fresh Food"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-10 max-w-2xl">
                        <h2 className={`${gestyRatio.className} text-4xl md:text-6xl text-white mb-8 leading-tight drop-shadow-lg`}>
                            Fresh Food. Straight<br />From the Source.
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/about"
                                className="px-8 py-3 bg-[#e8f5e9] text-[#1b4d3e] rounded-full font-semibold hover:bg-white transition-colors duration-300"
                                style={{ fontFamily: '"Mona Sans", sans-serif' }}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-[#22c55e] text-white rounded-full font-semibold hover:bg-[#16a34a] transition-colors duration-300"
                                style={{ fontFamily: '"Mona Sans", sans-serif' }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Card - Bulk Buying */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group">
                    <Image
                        src="/images/supply.jpg" // Using supply.jpg as a placeholder for market/bulk
                        alt="Bulk Buying"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay - darker for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-10 max-w-2xl">
                        <h2 className={`${gestyRatio.className} text-4xl md:text-6xl text-white mb-2 leading-tight drop-shadow-lg`}>
                            Buying in bulk or for<br />resale?
                        </h2>
                        <p
                            className="text-gray-200 text-lg md:text-xl mb-8 font-medium drop-shadow-md"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        >
                            For wholesalers, retailers, and bulk buyers
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-[#22c55e] text-white rounded-full font-semibold hover:bg-[#16a34a] transition-colors duration-300"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
