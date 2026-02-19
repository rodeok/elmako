import React from "react";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

function CoreValues() {
    const values = [
        {
            title: "Integrity",
            image: "/images/values-integrity.jpg"
        },
        {
            title: "Sustainability",
            image: "/images/values-sustainability.jpg"
        },
        {
            title: "Quality",
            image: "/images/values-quality.jpg"
        },
        {
            title: "Community",
            image: "/images/values-community.jpg"
        },
        {
            title: "Innovation",
            image: "/images/values-innovation.jpg"
        }
    ];

    return (
        <section className="bg-gray-100 py-20 px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${gestyRatio.className} text-5xl font-bold`}>
                        <span className="text-gray-600">Our Core</span>
                        <br />
                        <span className="text-green-600">Values</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {/* Desktop Layout */}
                    <div className="hidden md:block space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.slice(0, 3).map((value) => (
                                <div
                                    key={value.title}
                                    className="relative h-[140px] rounded-3xl overflow-hidden group"
                                >
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <h3 className="text-white text-2xl font-bold">{value.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {values.slice(3, 5).map((value) => (
                                <div
                                    key={value.title}
                                    className="relative h-[140px] rounded-3xl overflow-hidden group"
                                >
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <h3 className="text-white text-2xl font-bold">{value.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col gap-4">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="relative h-[140px] rounded-[2rem] overflow-hidden group shadow-md"
                            >
                                <img
                                    src={value.image}
                                    alt={value.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-bold">{value.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
