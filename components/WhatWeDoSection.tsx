"use client";

import SectionTabs from "./SectionTabs";
import ServiceCard from "./ServiceCard";
import { useState, useRef, useEffect } from "react";

const services = [
    {
        title: "Poultry Farming",
        description: "Ethical, healthy poultry raised responsibly.",
        image: "/images/poultry.jpg",
    },
    {
        title: "Crop Farming",
        description: "Sustainable cultivation of fresh agricultural produce.",
        image: "/images/crop.jpg",
    },
    {
        title: "Food Processing",
        description: "Clean, modern processing for safety and freshness.",
        image: "/images/processing.jpg",
    },
    {
        title: "Aquaculture",
        description: "Advanced fish farming for quality protein supply.",
        image: "/images/fish.jpg",
    },
];

export default function WhatWeDoSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    const scrollToSlide = (index: number) => {
        if (scrollContainerRef.current) {
            const width = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollTo({
                left: width * index,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-gray-100 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionTabs />

                {/* Mobile Carousel / Desktop Grid */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible no-scrollbar"
                >
                    {services.map((service, index) => (
                        <div key={index} className="min-w-[85%] snap-center md:min-w-0">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        </div>
                    ))}
                </div>

                {/* Dots Indicator (Mobile Only) */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? "bg-green-600" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
