import Image from "next/image";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link"
export default function SidebarMenu() {
    return (
        <div className="w-full lg:w-[280px] flex flex-col justify-between">
            {/* Logo */}
            <div>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="mb-10"
                />

                <ul
                    className="space-y-6 text-sm font-bold text-[#e2e8c0] tracking-wide"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    <li className="hover:text-white cursor-pointer transition-colors"> <Link href="/">HOME</Link></li>
                    <li className="hover:text-white cursor-pointer transition-colors"> <Link href="/about">ABOUT US</Link></li>
                    <li className="hover:text-white cursor-pointer transition-colors"> <Link href="/shop">SELLS/SHOP</Link></li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        <Link href="/distribution">DISTRIBUTION APPLICATION</Link>
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors"> <Link href="/help">HELP</Link></li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        <Link href="">OTHER RESOURCES</Link>
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors"> <Link href="/help">CONTACT</Link></li>
                </ul>
            </div>

            {/* Contact Cards */}
            <div className="mt-12 bg-[#0d1612] rounded-3xl p-6 space-y-4">
                <div className="flex items-start gap-4 text-gray-400 text-xs md:text-sm">
                    <div className="mt-1"><FiMapPin size={16} /></div>
                    <p>6391 Elgin St. Celina, Delaware 10299</p>
                </div>
                <div className="bg-white/10 h-[1px] w-full"></div>
                <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm">
                    <div className="mt-1"><FiMail size={16} /></div>
                    <p>debbie.baker@example.com</p>
                </div>
                <div className="bg-white/10 h-[1px] w-full"></div>
                <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm">
                    <div className="mt-1"><FiPhone size={16} /></div>
                    <p>(252) 555-0126</p>
                </div>
            </div>
        </div>
    );
}
