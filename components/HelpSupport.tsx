import React from "react";
import Image from "next/image";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

const HelpSupport = () => {
    return (
        <section className="bg-[#f5f5f5] py-20 px-4 md:px-8 flex flex-col items-center">
            {/* Main Card */}
            <div className="w-full max-w-[1200px] bg-white rounded-[3rem] p-6 md:p-12 shadow-sm flex flex-col lg:flex-row gap-12 items-center">

                {/* Left Side - Image with Overlay */}
                <div className="relative w-full lg:w-1/2 h-[500px] rounded-[2.5rem] overflow-hidden">
                    <Image
                        src="/images/person.png" // Placeholder image
                        alt="Support Team"
                        fill
                        className="object-cover"
                    />
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-10 left-8 md:left-12 z-10 max-w-sm">
                        <h2 className={`${gestyRatio.className} text-5xl md:text-6xl font-bold text-white mb-4 leading-tight`}>
                            Support <br /> Contact
                        </h2>
                        <p className="text-white/90 text-sm md:text-base font-medium" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            For sales, bulk orders, or distribution inquiries, please visit our Contact or Distribution Application pages.
                        </p>
                    </div>
                </div>

                {/* Right Side - Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <p className="text-gray-500 font-bold text-lg md:text-xl leading-relaxed max-w-lg" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                        Need Further Assistance?, Our support team is available to help with orders, partnership, and general inquiries.
                    </p>

                    <div className="flex flex-col gap-4 w-full max-w-md">
                        {/* Email Pill */}
                        <div className="bg-[#eff9f0] px-6 py-4 rounded-xl">
                            <p className="text-[#1f7a5a] font-bold text-base md:text-lg" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                                Email: support@elmako.com
                            </p>
                        </div>

                        {/* Phone Pill */}
                        <div className="bg-[#eff9f0] px-6 py-4 rounded-xl">
                            <p className="text-[#1f7a5a] font-bold text-base md:text-lg" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                                Phone: +234 XXX XXX XXXX
                            </p>
                        </div>

                        {/* Hours Pill */}
                        <div className="bg-[#eff9f0] px-6 py-4 rounded-xl">
                            <p className="text-[#1f7a5a] font-bold text-base md:text-lg" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                                Business Hours: Monday – Friday, 9:00 AM – 5:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpSupport;
