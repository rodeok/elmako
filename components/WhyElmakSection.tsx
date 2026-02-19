import localFont from 'next/font/local';
import Image from "next/image";
import FeatureBadge from "./FeatureBadge";

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function WhyElmakSection() {
    return (
        <section className="bg-gray-100 py-28 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative">
                {/* Heading */}
                <h2 className={`${gestyRatio.className} text-4xl md:text-5xl font-normal text-gray-700 mb-4`}>
                    Why <span className="text-green-600">Elmako</span>?
                </h2>

                {/* Subheading */}
                <p
                    className="text-gray-500 text-lg mb-8"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    It’s Not Just Farming, But Purpose-
                    <br />
                    Driven Agriculture.
                </p>

                {/* CTA */}
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition mb-20">
                    Contact Us
                </button>

                {/* Image Container */}
                <div className="relative w-full max-w-2xl mx-auto">
                    {/* Main Image */}
                    <div className="relative h-[620px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/why.jpg"
                            alt="Why Elmako"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* LEFT SIDE BADGES (DESKTOP) */}

                    <FeatureBadge
                        title="Fresh & Nutritious Products"
                        icon="/images/fresh.jpg"
                        className="absolute -left-44 top-16 hidden lg:flex"
                    />

                    <FeatureBadge
                        title="Local Economy Empowerment"
                        icon="/images/local.jpg"
                        className="absolute -left-44 bottom-28 hidden lg:flex"
                    />

                    {/* RIGHT SIDE BADGES (DESKTOP) */}

                    <FeatureBadge
                        title="Ethical & Sustainable Practices"
                        icon="/images/ethical.jpg"
                        className="absolute -right-44 top-24 hidden lg:flex"
                    />

                    <FeatureBadge
                        title="Environmentally Responsible"
                        icon="/images/eco.jpg"
                        className="absolute -right-44 bottom-24 hidden lg:flex"
                    />

                    {/* BOTTOM CENTER WIDE BADGE (DESKTOP) */}

                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-lg hidden lg:block">
                        <FeatureBadge
                            title="Reliable Supply & Distribution"
                            icon="/images/supply.jpg"
                            variant="wide"
                        />
                    </div>

                    {/* MOBILE BADGES STACK */}
                    <div className="flex flex-col gap-4 mt-8 lg:hidden">
                        {/* 1. Reliable Supply & Distribution (Light Green) */}
                        <div className="flex items-center gap-4 bg-[#e6f8ef] shadow-sm rounded-full px-4 py-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/supply.jpg" alt="Reliable Supply" fill className="object-cover" />
                            </div>
                            <p className="text-[#009b4d] font-bold text-sm text-left leading-tight">
                                Reliable Supply & Distribution
                            </p>
                        </div>

                        {/* 2. Fresh & Nutritious Products (White, Icon Right) */}
                        <div className="flex items-center justify-between gap-4 bg-white shadow-sm rounded-full px-4 py-3">
                            <p className="text-[#009b4d] font-bold text-sm text-right leading-tight flex-1">
                                Fresh & Nutritious Products
                            </p>
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/fresh.jpg" alt="Fresh Products" fill className="object-cover" />
                            </div>
                        </div>

                        {/* 3. Ethical & Sustainable Practices (White, Icon Left) */}
                        <div className="flex items-center gap-4 bg-white shadow-sm rounded-full px-4 py-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/ethical.jpg" alt="Ethical Practices" fill className="object-cover" />
                            </div>
                            <p className="text-[#009b4d] font-bold text-sm text-left leading-tight">
                                Ethical & Sustainable Practices
                            </p>
                        </div>

                        {/* 4. Local Economy Empowerment (White, Icon Right) */}
                        <div className="flex items-center justify-between gap-4 bg-white shadow-sm rounded-full px-4 py-3">
                            <p className="text-[#009b4d] font-bold text-sm text-right leading-tight flex-1">
                                Local Economy Empowerment
                            </p>
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/local.jpg" alt="Local Economy" fill className="object-cover" />
                            </div>
                        </div>

                        {/* 5. Environmentally Responsible (Light Blue? Image shows light blueish, defaulting to pale cyan/white for now, maybe use white to match others unless specified) */}
                        <div className="flex items-center gap-4 bg-[#e0f7fa] shadow-sm rounded-full px-4 py-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <Image src="/images/eco.jpg" alt="Environmentally Responsible" fill className="object-cover" />
                            </div>
                            <p className="text-[#009b4d] font-bold text-sm text-left leading-tight">
                                Environmentally Responsible
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
