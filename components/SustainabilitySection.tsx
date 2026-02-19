import Image from "next/image";
import localFont from 'next/font/local';
import TagPill from "./TagPill";

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function SustainabilitySection() {
    return (
        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden min-h-[750px] md:min-h-[500px] shadow-xl">
                    {/* Background Image */}
                    <Image
                        src="/images/sustainability.jpg"
                        alt="Growing Food Without Costing the Earth"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Desktop Content (Hidden on Mobile) */}
                    <div className="hidden md:block absolute bottom-16 left-16 text-white w-full pr-16">
                        <div className="max-w-lg">
                            <h2 className={`${gestyRatio.className} text-4xl md:text-5xl font-bold leading-tight mb-4`}>
                                Growing Food Without
                                <br />
                                Costing the Earth
                            </h2>

                            <p className="text-sm text-gray-200 mb-6">
                                Growing Food Without Costing the Earth
                            </p>
                        </div>

                        {/* Pills */}
                        <div className="flex flex-wrap gap-4">
                            <TagPill text="Environmental stewardship" color="green" />
                            <TagPill text="Sustainable farming" color="dark" />
                            <TagPill text="Employee welfare" color="orange" />
                            <TagPill text="Community support" color="green" />
                        </div>
                    </div>

                    {/* Mobile Content (Visible on Mobile) */}
                    <div className="md:hidden absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                        <div className="mb-8">
                            <h2 className={`${gestyRatio.className} text-4xl font-bold leading-tight mb-2 text-white`}>
                                Growing Food Without Costing <br /> the Earth
                            </h2>
                            <p className="text-sm text-gray-200 font-medium">
                                Growing Food Without Costing the Earth
                            </p>
                        </div>

                        {/* Mobile Stacked Pills */}
                        <div className="flex flex-col gap-3 w-full max-w-sm">
                            {/* Environmental stewardship */}
                            <div className="bg-[#b9e6c9] rounded-full px-5 py-3 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#007f3d]"></span>
                                <span className="text-[#007f3d] font-bold text-sm">Environmental stewardship</span>
                            </div>

                            {/* Sustainable farming */}
                            <div className="bg-[#e0e0e0] rounded-full px-5 py-3 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1a4a35]"></span>
                                <span className="text-[#1a4a35] font-bold text-sm">Sustainable farming</span>
                            </div>

                            {/* Employee welfare */}
                            <div className="bg-[#f9a825] rounded-full px-5 py-3 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                                <span className="text-white font-bold text-sm">Employee welfare</span>
                            </div>

                            {/* Community support */}
                            <div className="bg-[#00c853] rounded-full px-5 py-3 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                                <span className="text-white font-bold text-sm">Community support</span>
                            </div>
                        </div>

                        {/* Bottom Spacer/Padding if needed */}
                        <div className="h-8"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
