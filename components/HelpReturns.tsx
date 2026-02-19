import React from "react";

const ReturnsComplaints = () => {
    return (
        <section className="w-full bg-[#f5f5f5] py-28 px-4 flex flex-col items-center">

            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-500">
                    Returns & <br /> Complaints
                </h2>
                <p className="mt-4 text-gray-400 font-medium">
                    Our Resolution Process
                </p>
            </div>

            {/* Steps Container */}
            <div className="relative w-full max-w-3xl flex flex-col items-center gap-16">

                {/* Step 1 */}
                <div className="relative w-full flex justify-end">
                    <div
                        className="bg-[#efe4d6] text-[#b36b00] px-8 py-4 rounded-full shadow-sm rotate-[-6deg] text-sm md:text-base font-semibold"
                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                    >
                        <span className="mr-3 font-bold">1</span>
                        Report the issue within the stated timeframe after delivery.
                    </div>

                    {/* Right Dotted Line */}
                    <div className="absolute right-8 top-14 h-20 border-r-2 border-dashed border-gray-300">
                        <div className="absolute -bottom-2 right-[-6px] w-3 h-3 bg-gray-300 rotate-45"></div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative w-full flex justify-start">
                    <div
                        className="bg-[#efe4d6] text-[#b36b00] px-8 py-4 rounded-full shadow-sm rotate-[4deg] text-sm md:text-base font-semibold"
                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                    >
                        <span className="mr-3 font-bold">2</span>
                        Provide order details and a brief description of the concern.
                    </div>

                    {/* Left Dotted Line */}
                    <div className="absolute left-8 top-14 h-20 border-l-2 border-dashed border-gray-300">
                        <div className="absolute -bottom-2 left-[-6px] w-3 h-3 bg-gray-300 rotate-45"></div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="w-full flex justify-end">
                    <div
                        className="bg-[#efe4d6] text-[#b36b00] px-8 py-4 rounded-full shadow-sm rotate-[-4deg] text-sm md:text-base font-semibold"
                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                    >
                        <span className="mr-3 font-bold">3</span>
                        Our team will review and respond with a resolution.
                    </div>
                </div>
            </div>

            {/* Bottom Info Box */}
            <div className="mt-20 bg-[#d9efe4] rounded-3xl px-8 py-10 max-w-2xl text-center">
                <p
                    className="text-[#1f7a5a] text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    Please note: Due to the nature of agricultural and food products,
                    returns may be subject to quality verification and policy guidelines.
                </p>

                <div className="mt-6 inline-block bg-white text-[#1f7a5a] text-xs md:text-sm px-6 py-2 rounded-full shadow-sm">
                    <p style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                        Our priority is fair, transparent, and timely resolution.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReturnsComplaints;
