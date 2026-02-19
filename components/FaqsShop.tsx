"use client";
import React, { useState } from "react";
import Image from "next/image";
import localFont from 'next/font/local';
import Link from 'next/link';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

const categories = [
    {
        title: "Ordering",
        isOpen: false, // Set to false so user sees other sections easily
        variant: "light",
        questions: [
            {
                q: "How do I place an order?",
                a: "You can place an order directly through our Shop page for available products. For bulk or wholesale purchases, please apply through our Distribution or Contact Sales channels."
            },
            {
                q: "Is there a minimum order quantity?",
                a: "Minimum order quantities may apply depending on the product type and order category (retail or bulk). These details are displayed during checkout or discussed during bulk inquiries."
            },
            {
                q: "Can I place recurring or scheduled orders?",
                a: "Yes. Recurring supply arrangements are available for approved bulk buyers and distributors."
            }
        ]
    },
    {
        title: "Delivery",
        isOpen: true, // Auto-open this one as requested in the image (it shows open)
        variant: "light",
        questions: [
            {
                q: "Where do you deliver to?",
                a: "We deliver to approved locations within our operational regions. Delivery coverage may vary based on product type and quantity."
            },
            {
                q: "How long does delivery take?",
                a: "Delivery timelines depend on product availability and location. Estimated delivery times are communicated after order confirmation."
            },
            {
                q: "How are products handled during delivery?",
                a: "All products are handled and transported under appropriate conditions to maintain freshness, safety, and quality."
            }
        ]
    },
    {
        title: "Payments",
        isOpen: true, // Make it open as well since the image shows multiple open
        variant: "white",
        questions: [
            {
                q: "What payment methods are accepted?",
                a: "We accept approved digital and bank-based payment options. Payment details are provided during checkout or invoicing for bulk orders."
            },
            {
                q: "Is payment required upfront?",
                a: "Retail orders require payment before delivery. Bulk and distributor orders may follow agreed payment terms."
            },
            {
                q: "Is my payment information secure?",
                a: "Yes. All payments are processed using secure systems that protect your information."
            }
        ]
    },
    {
        title: "Product Quality",
        isOpen: true,
        variant: "solid",
        questions: [
            {
                q: "How do you ensure product quality?",
                a: "Our products are sourced directly from our farms and processed under strict quality and hygiene standards."
            },
            {
                q: "Are your products sustainably produced?",
                a: "Yes. Sustainability, ethical practices, and environmental responsibility are central to how we operate."
            },
            {
                q: "What if I receive a product with quality issues?",
                a: "Please report any concerns immediately through our support channels so we can resolve them promptly."
            }
        ]
    }
];

export default function FaqsShop() {
    // Allow multiple open sections as per the image showing all sections expanded
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                {/* Left Column - Heading & Illustration */}
                <div className="flex flex-col relative h-full min-h-[400px]">
                    <div className="mb-12">
                        <p className="text-sm font-medium text-gray-500 mb-4" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            What you would like to know
                        </p>
                        <h2 className={`${gestyRatio.className} text-5xl md:text-7xl text-[#1a1a1a] leading-tight`}>
                            Frequently<br />Asked<br />
                            <span className="text-[#22c55e]">Questions</span>
                        </h2>
                    </div>

                    {/* Illustration */}
                    <div className="mt-auto relative w-full h-[300px] md:h-[400px]">
                        <Image
                            src="/images/image2.png"
                            alt="FAQ Illustration"
                            fill
                            className="object-contain object-bottom md:object-left-bottom"
                        />
                    </div>
                </div>

                {/* Right Column - Accordion & Contact */}
                <div className="flex flex-col gap-6">
                    {/* Categories Accordion */}
                    <div className="bg-white rounded-[2rem] shadow-sm p-2 md:p-6 space-y-4">
                        {categories.map((category, index) => (
                            <div key={index} className="border-b last:border-0 border-gray-100 pb-4 last:pb-0">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between text-left py-4 px-2 hover:bg-gray-50 rounded-xl transition-colors"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800"
                                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                                    >
                                        {category.title}
                                    </h3>
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-transform duration-300 ${openIndices.includes(index) ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Expanded Content (Questions List) */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndices.includes(index) ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="flex flex-col gap-4">
                                        {category.questions.map((q, qIndex) => {
                                            // Determine styles based on variant
                                            let containerClass = "bg-[#e8fbe8]"; // default light green
                                            let questionClass = "text-[#1a4a35]";
                                            let answerClass = "text-[#3f6251]";
                                            let iconClass = "bg-white text-gray-400";

                                            if (category.variant === "white") {
                                                containerClass = "bg-white border border-gray-100 shadow-sm";
                                                questionClass = "text-[#22c55e]";
                                                answerClass = "text-gray-600";
                                                iconClass = "bg-gray-50 text-gray-400";
                                            } else if (category.variant === "solid") {
                                                containerClass = "bg-[#8cc63f]"; // Solid lime green
                                                questionClass = "text-white";
                                                answerClass = "text-white/90";
                                                iconClass = "bg-white text-[#8cc63f]";
                                            }

                                            return (
                                                <div key={qIndex} className={`${containerClass} rounded-xl p-6 transition-colors`}>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h4 className={`font-bold text-lg pr-4 ${questionClass}`} style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                                                            {q.q}
                                                        </h4>
                                                        <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${iconClass}`}>▲</span>
                                                    </div>
                                                    <p className={`text-sm leading-relaxed ${answerClass}`} style={{ fontFamily: 'Mona Sans, sans-serif' }}>
                                                        {q.a}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <div className="bg-white rounded-[2rem] shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                                Still aren’t satisfied yet ?
                            </h3>
                        </div>
                        <Link
                            href="/contact"
                            className="z-10 px-8 py-3 bg-[#22c55e] text-white rounded-lg font-bold hover:bg-[#16a34a] transition-colors whitespace-nowrap"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Decorative Image (Outside Contact Box) */}
                    <div className="self-end relative w-32 h-32 md:w-48 md:h-48 -mt-12 md:-mt-16 mr-4 pointer-events-none z-20">
                        <Image
                            src="/images/image1.png"
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
