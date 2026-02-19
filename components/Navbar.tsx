"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SELLS/SHOP", href: "/shop" },
  { name: "DISTRIBUTION APPLICATION", href: "/distribution" },
  { name: "HELP", href: "/help" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center">
      <div className="w-[95%] mt-6 bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col lg:flex-row items-center justify-between relative">
        <div className="w-full lg:w-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Elmako Farm Logo"
                width={180}
                height={60}
                className="object-contain h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-green-600 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative ${pathname === link.href
                ? "text-green-600"
                : "text-gray-600 hover:text-green-600"
                }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-green-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/help"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-2 rounded-full transition"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="w-full flex flex-col items-center gap-6 mt-6 pb-4 lg:hidden border-t pt-6">
            <nav className="flex flex-col items-center gap-6 text-sm font-medium w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative w-full text-center py-2 ${pathname === link.href
                    ? "text-green-600 font-bold bg-green-50 rounded-lg"
                    : "text-gray-600 hover:text-green-600"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/help"
              onClick={() => setIsMenuOpen(false)}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition w-full text-center"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
