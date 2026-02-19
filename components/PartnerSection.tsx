import Image from "next/image";
import localFont from 'next/font/local';
import Link from "next/link"
const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function PartnerSection() {
    return (
        <section className="bg-[#1f4b35] py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2
                    className={`${gestyRatio.className} text-4xl md:text-5xl font-normal text-white leading-tight mb-6`}
                    style={{ fontStyle: 'normal' }}
                >
                    Partner With a Farm That
                    <br />
                    Thinks Long–Term
                </h2>

                {/* Description */}
                <p
                    className="text-gray-200 text-lg max-w-2xl mx-auto mb-10"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    We work with distributors, retailers, and bulk buyers to
                    ensure steady access to high-quality agricultural and food
                    products.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <button className="bg-gray-200 text-green-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-300 transition">
                        Contact Sales
                    </button>

                    <button className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition">
                        <Link href="/distributon">
                            Apply as a Distributor
                        </Link>
                    </button>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                    <Image
                        src="/images/partner.jpg"
                        alt="Farm Partnership"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
