import localFont from 'next/font/local';
import Image from "next/image";

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function NewsletterCard() {
    return (
        <div className="flex-1 bg-[#4b5c2c] rounded-3xl p-8 md:p-12 relative flex flex-col justify-between">
            <div className="w-full">
                {/* Illustration */}
                <div className="mb-6 relative w-48 h-40">
                    <Image
                        src="/images/newsletter-illustration.png"
                        alt="Newsletter"
                        fill
                        className="object-contain object-left"
                    />
                </div>

                {/* Text */}
                <h2 className={`${gestyRatio.className} text-4xl md:text-5xl font-bold text-white leading-tight mb-2`}>
                    Fresh
                    <br />
                    updates
                    <br />
                    from the <span className="text-green-500">farm</span>
                </h2>

                <p
                    className="text-white text-sm font-bold mt-4 mb-6"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    Sign Up for our Newsletter
                </p>

                {/* Input */}
                <div className="w-full bg-[#5d6e3e] rounded-2xl p-2 border border-[#6f8249]">
                    <div className="bg-[#5d6e3e] px-4 py-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-transparent outline-none text-white placeholder-gray-300 text-sm font-medium"
                        />
                    </div>

                    <button className="w-full bg-[#00c853] hover:bg-green-600 text-white font-bold text-sm py-4 rounded-xl transition mt-2">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
