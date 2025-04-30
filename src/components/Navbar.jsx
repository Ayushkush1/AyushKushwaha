'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav 
            className="fixed top-0 w-full z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative">
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-orange-50/30" />

                {/* Content */}
                <div className="relative container mx-auto px-36 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-orange-600">
                            Ayush
                        </Link>
                        
                        <div className="flex gap-8">
                            {["About", "Projects", "Experience", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-gray-600 hover:text-orange-600 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}