import Image from "next/image";
import React from "react";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

const HelpCta = () => {
    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 pt-40 pb-16 md:px-8 lg:px-16 flex flex-col items-center bg-[#f7f7f7]">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className={`${gestyRatio.className} text-4xl lg:text-5xl font-bold text-[#6B7280]`}>
                    How it <span className="text-[#00A651]">Works</span>
                </h2>
                <p
                    className="mt-2 text-lg font-medium text-gray-800"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    From Farm to You
                </p>
            </div>

            {/* Grid Container */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

                {/* Center Image Overlay */}
                <div className="absolute left-1/2 bottom-0 -translate-x-[30%] z-10 hidden md:block pointer-events-none">
                    <div className="relative w-32 h-72 lg:w-40 lg:h-96">
                        <Image
                            src="/images/tree.png"
                            alt="Process Tree"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Card 1: Production */}
                <div className="relative p-8 rounded-3xl bg-[#8BC53F] h-64 flex flex-col justify-center border-2 border-dashed border-[#a3d65e]/50">
                    <span
                        className="text-6xl font-black text-white/90 absolute top-4 left-6"
                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                    >
                        1
                    </span>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Production</h3>
                        <p className="text-white text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Crops, fish, and poultry are grown responsibly on our farms.
                        </p>
                    </div>
                </div>

                {/* Card 2: Processing */}
                <div className="relative p-8 rounded-3xl bg-[#C6EAD8] h-64 flex flex-col justify-center border-2 border-dashed border-[#8bc53f]/30">
                    <span className="text-6xl font-black text-[#1a4a35] absolute top-4 left-6" style={{ fontFamily: '"Mona Sans", sans-serif' }}>2</span>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-[#2d6a4f] mb-2" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Processing</h3>
                        <p className="text-[#40916c] text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Products are processed under controlled, hygienic conditions.
                        </p>
                    </div>
                </div>

                {/* Card 3: Ordering */}
                <div className="relative p-8 rounded-3xl bg-[#F0F7D4] h-64 flex flex-col justify-center border-2 border-dashed border-[#8bc53f]/30">
                    <span className="text-6xl font-black text-[#3f4d1a] absolute top-4 left-6" style={{ fontFamily: '"Mona Sans", sans-serif' }}>3</span>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-[#5c6b2e] mb-2" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Ordering</h3>
                        <p className="text-[#73853b] text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Customers place orders online or through approved sales channels.
                        </p>
                    </div>
                </div>

                {/* Card 4: Delivery */}
                <div className="relative p-8 rounded-3xl bg-[#10B981] h-64 flex flex-col justify-center border-2 border-dashed border-[#34d399]/50">
                    <span className="text-6xl font-black text-white/90 absolute top-4 left-6" style={{ fontFamily: '"Mona Sans", sans-serif' }}>4</span>
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: '"Mona Sans", sans-serif' }}>Delivery</h3>
                        <p className="text-white text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Orders are packaged and delivered according to quality standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="mt-24 text-center text-gray-500 text-sm max-w-lg relative z-20">
                <p style={{ fontFamily: '"Mona Sans", sans-serif' }}>We manage the entire process to ensure freshness, safety, and reliability.</p>
            </div>
        </section>
    );
};

export default HelpCta;
