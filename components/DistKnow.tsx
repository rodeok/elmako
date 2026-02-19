"use client";
import React from "react";
import localFont from 'next/font/local';
import Link from 'next/link';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function DistKnow() {
    return (
        <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16">

                {/* Heading */}
                <h2 className={`${gestyRatio.className} text-5xl md:text-7xl text-[#f97316] text-center`}>
                    What you need to Know
                </h2>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {/* Card 1 */}
                    <div className="border-2 border-dashed border-[#22c55e] rounded-[3rem] p-8 md:p-12">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Elmako Farm and Food Processing Ltd partners with qualified distributors, wholesalers, and bulk buyers to deliver fresh, nutritious, and ethically produced food products to communities at scale.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-dashed border-[#22c55e] rounded-[3rem] p-8 md:p-12">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            If you have the capacity to distribute quality food products and share our commitment to sustainability, we’d like to work with you.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg justify-center mt-4">
                    <Link
                        href="/about"
                        className="flex-1 bg-[#dcfce7] text-[#166534] py-4 rounded-xl font-bold text-center hover:bg-[#bbf7d0] transition-colors"
                        style={{ fontFamily: 'Mona Sans, sans-serif' }}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="flex-1 bg-[#22c55e] text-white py-4 rounded-xl font-bold text-center hover:bg-[#16a34a] transition-colors"
                        style={{ fontFamily: 'Mona Sans, sans-serif' }}
                    >
                        Contact Us
                    </Link>
                </div>

            </div>
        </section>
    );
}
