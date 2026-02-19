"use client";

export default function SectionTabs() {
    return (
        <div className="flex flex-col items-center gap-6 mb-14">
            {/* Top Two Pills */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 bg-[#d9e6df] text-green-700 px-8 py-4 rounded-full text-2xl font-semibold shadow-sm">
                    What We Grow.
                    <span className="bg-white p-2 rounded-full text-lg">
                        🌱
                    </span>
                </div>

                <div className="flex items-center gap-3 bg-[#f3e2b7] text-yellow-600 px-8 py-4 rounded-full text-2xl font-semibold shadow-sm">
                    What We Process.
                    <span className="bg-white p-2 rounded-full text-lg">
                        🛒
                    </span>
                </div>
            </div>

            {/* Bottom Center Pill */}
            <div className="flex items-center gap-3 bg-green-600 text-white px-10 py-4 rounded-full text-2xl font-semibold shadow-md">
                What We Deliver.
                <span className="bg-white text-green-600 p-2 rounded-full text-lg">
                    🚜
                </span>
            </div>
        </div>
    );
}
