"use client";

import React, { useState } from "react";
import Image from "next/image";
import localFont from 'next/font/local';

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function ShopContact() {
    const [formData, setFormData] = useState({ email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">

                {/* Left Column - Contact Form */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className={`${gestyRatio.className} text-4xl md:text-5xl text-gray-800 mb-2`}>
                        Contact <span className="text-gray-500">Us</span>
                    </h2>
                    <p
                        className="text-gray-500 text-sm md:text-base mb-10 font-medium"
                        style={{ fontFamily: '"Mona Sans", sans-serif' }}
                    >
                        “We reply faster than fresh produce spoils”
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                            className="w-full p-4 border border-gray-200 rounded-3xl outline-none focus:border-green-500 transition-colors placeholder-black"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Type your message here"
                            rows={8}
                            className="w-full p-4 border border-gray-200 rounded-3xl outline-none focus:border-green-500 transition-colors resize-none placeholder-black"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-[#22c55e] text-white font-bold rounded-lg hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ fontFamily: '"Mona Sans", sans-serif' }}
                        >
                            {status === 'loading' ? 'Sending...' : 'Contact Us'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 font-medium text-center">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 font-medium text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>

                {/* Right Column - Image & Map */}
                <div className="w-full md:w-1/2 flex flex-col gap-8">

                    {/* Support Person Image */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-lg bg-gray-100">
                        <Image
                            src="/images/partner.jpg" // Using partner.jpg as placeholder for support person
                            alt="Support Team"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Map Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-700" style={{ fontFamily: '"Mona Sans", sans-serif' }}>
                            Map Location
                        </h3>

                        {/* Map Visual (Placeholder) */}
                        <div className="relative w-full h-[200px] rounded-[2rem] overflow-hidden shadow-md bg-gray-200">
                            {/* Attempting to simulate a map look if no specific map image exists */}
                            <div className="absolute inset-0 bg-neutral-800 opacity-80" />
                            {/* Or use local.jpg as abstract map background if wanted, but gray is safer for placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-400 font-medium opacity-50">Map View</span>
                            </div>
                            {/* Overlay Pattern could go here */}
                            <Image
                                src="/images/local.jpg" // Using local.jpg as a texture/map placeholder for now
                                alt="Map Location"
                                fill
                                className="object-cover opacity-60 mix-blend-overlay"
                            />
                        </div>

                        {/* Contact Details Pills */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 bg-[#65a34e] text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                                <span className="text-sm">📍</span>
                                6391 Elgin St. Celina, Delaware 10299
                            </div>
                            <div className="flex items-center gap-2 bg-[#65a34e] text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                                <span className="text-sm">✉️</span>
                                debbie.baker@example.com
                            </div>
                            <div className="flex items-center gap-2 bg-[#65a34e] text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                                <span className="text-sm">📞</span>
                                (252) 555-0126
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
