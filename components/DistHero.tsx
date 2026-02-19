"use client";
import React from "react";
import Image from "next/image";
import localFont from 'next/font/local';
import Link from 'next/link';
import { FaSeedling, FaArrowRight } from "react-icons/fa6";

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

const features = [
    {
        title: "Who Should Apply",
        description: "This distribution program is open to wholesalers, retailers, bulk buyers, food suppliers, and institutional purchasers with the capacity to handle consistent volume, logistics, and regional distribution. If you serve customers at scale and value quality, reliability, and ethical sourcing, Elmako is built for you.",
        bg: "bg-[#e2f1d2]" // Light lime/yellowish green
    },
    {
        title: "Benefits of Partnership",
        description: "As an Elmako distributor, you gain access to fresh, high-quality agricultural and processed food products, competitive wholesale pricing, reliable supply, and a direct relationship with a trusted producer. Beyond products, you benefit from brand credibility, long-term collaboration, and a partner committed to sustainable food systems.",
        bg: "bg-[#b1eecf]" // Minty green
    },
    {
        title: "Expectations",
        description: "Distributors are expected to operate legally, maintain proper storage and handling standards, meet agreed order volumes, and uphold Elmako’s quality, ethical, and brand standards. We value professionalism, transparency, and a shared commitment to delivering safe, nutritious food to market.",
        bg: "bg-[#fff7ed]" // Light cream/orange
    }
];

export default function DistHero() {
    return (
        <section className="w-full bg-[#fcfcfc] pt-32 pb-12 md:pt-40 md:pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-block bg-[#eef3db] text-[#4d5e0d] px-6 py-2 rounded-full text-sm font-bold tracking-wide" style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                            Become an Elmako Distributor
                        </div>

                        {/* Heading */}
                        <h1 className={`${gestyRatio.className} text-6xl md:text-8xl leading-tight text-gray-600`}>
                            Let’s <span className="inline-flex items-center justify-center bg-[#bbf7d0] text-[#22c55e] px-8 rounded-[4rem] relative top-2">
                                Grow
                                <FaSeedling className="w-8 h-8 md:w-12 md:h-12 ml-2 text-[#b45309]" /> {/* Using brownish icon color to match pot */}
                            </span>
                            <br />
                            <span className="text-[#f97316]">Together.</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed" style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                            Grow with a trusted agricultural and food processing brand.
                        </p>

                        {/* Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-8 py-4 rounded-full font-bold hover:bg-[#16a34a] transition-colors"
                            style={{ fontFamily: 'Mona Sans, sans-serif' }}
                        >
                            Join Us Now
                            <FaArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-xl">
                        <Image
                            src="/images/dist.jpg" // Placeholder, user can swap
                            alt="Elmako Distributor Growth"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Features Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className={`${feature.bg} rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full`}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
