import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const gestyRatio = localFont({
    src: "../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf",
    display: "swap",
});

export default function VisionMissionSection() {
    return (
        <section className="w-full overflow-x-hidden bg-[#f7f7f7] py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12 overflow-x-hidden">

                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:block space-y-12">
                    <div className="flex flex-col items-end text-right">
                        <h2 className={`${gestyRatio.className} text-4xl md:text-5xl text-gray-600 mb-4`}>
                            Our <span className="text-green-500">Vision</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            To be a leading provider of high-quality, sustainable, and innovative
                            agricultural, fishery, and poultry products enriching communities and
                            promoting environmental stewardship.
                        </p>
                    </div>

                    <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
                        <Image
                            src="/images/vision-farm.png"
                            alt="Our Vision"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
                        <h3 className={`${gestyRatio.className} text-3xl md:text-4xl text-gray-600 mb-8`}>
                            Our <span className="text-green-500">3Ps</span> Mission
                        </h3>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <div className="flex items-center gap-4 bg-[#fff6eb] px-6 py-3 rounded-2xl">
                                <div>
                                    <p className="font-semibold text-orange-800 text-sm">People</p>
                                    <p className="text-xs text-orange-600">
                                        Communities, Employees, Partners
                                    </p>
                                </div>
                                <span className="text-2xl">👥</span>
                            </div>

                            <div className="flex items-center gap-4 bg-[#f0fdf4] px-6 py-3 rounded-2xl">
                                <div>
                                    <p className="font-semibold text-green-800 text-sm">Product</p>
                                    <p className="text-xs text-green-600">
                                        Quality, Nutrition, Ethics
                                    </p>
                                </div>
                                <span className="text-2xl">🌱</span>
                            </div>

                            <div className="flex items-center gap-4 bg-[#ecfccb] px-6 py-3 rounded-2xl">
                                <div>
                                    <p className="font-semibold text-lime-800 text-sm">Planet</p>
                                    <p className="text-xs text-lime-600">
                                        Sustainability, Environment
                                    </p>
                                </div>
                                <span className="text-2xl">🌍</span>
                            </div>
                        </div>

                        <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden relative">
                            <Image
                                src="/images/mission-farm.png"
                                alt="Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ================= MOBILE LAYOUT ================= */}
                <div className="md:hidden flex flex-col gap-12 text-center overflow-hidden">

                    {/* 1. Rooted in Responsibility */}
                    <div className="flex flex-col items-center gap-6">
                        {/* <h2 className={`${gestyRatio.className} text-4xl sm:text-5xl text-gray-500 leading-tight max-w-[12ch] mx-auto`}>
                            Rooted in Responsibility.
                        </h2> */}
                        <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden relative shadow-lg">
                            <Image
                                src="/images/vision-farm.png" // Placeholder for root image
                                alt="Rooted in Responsibility"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay if needed to match dark vibes of example, though example looks brightish/techy */}
                        </div>
                    </div>

                    {/* 2. Driven by Innovation */}
                    <div className="flex flex-col items-center gap-6">
                        <h2 className={`${gestyRatio.className} text-4xl sm:text-5xl text-gray-500 leading-tight max-w-[10ch] mx-auto`}>
                            Driven by Innovation.
                        </h2>


                    </div>

                    <div className="flex flex-col items-center mt-8 mb-12">
                        <h2 className={`${gestyRatio.className} text-5xl text-gray-500 mb-4`}>
                            Our <span className="text-green-500">Vision</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                            To be a leading provider of high-quality, sustainable, and innovative agricultural,
                            fishery, and poultry products enriching communities and promoting environmental stewardship.
                        </p>
                    </div>

                    <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden relative shadow-lg">
                        <Image
                            src="/images/vision-farm.png"
                            alt="Agricultural Technology"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-start text-left w-full mt-8">
                        <h2 className={`${gestyRatio.className} text-5xl text-gray-500 mb-8`}>
                            Our <span className="text-green-500">3Ps</span> <br />
                            Mission
                        </h2>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="bg-[#fff6eb] rounded-3xl p-6">
                                <span className="text-3xl">👥</span>
                                <h3 className="text-[#9a3412] font-bold text-lg mt-2">People</h3>
                                <p className="text-[#c2410c] text-sm">
                                    Communities, Employees, Partners
                                </p>
                            </div>

                            <div className="bg-[#f0fdf4] rounded-3xl p-6">
                                <span className="text-3xl">🌱</span>
                                <h3 className="text-[#166534] font-bold text-lg mt-2">Product</h3>
                                <p className="text-[#15803d] text-sm">
                                    Quality, Nutrition, Ethics
                                </p>
                            </div>

                            <div className="bg-[#ecfccb] rounded-3xl p-6">
                                <span className="text-3xl">🌍</span>
                                <h3 className="text-[#3f6212] font-bold text-lg mt-2">Planet</h3>
                                <p className="text-[#4d7c0f] text-sm">
                                    Sustainability, Environment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden relative shadow-lg mt-8">
                        <Image
                            src="/images/mission-farm.png"
                            alt="Sustainable Farming"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
