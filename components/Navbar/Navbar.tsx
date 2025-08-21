"use client";

import { motion } from "framer-motion";
import { LuBrain } from "react-icons/lu";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.6, ease: "easeOut"}}
            className="sticky top-0 z-50 flex items-center justify-between px-8 py-4">
            <Link href="/" className="flex items-center space-x-2">
                <LuBrain className="h-6 w-6 text-purple-400" />
                <span className="text-lg font-bold tracking-wide">Memory Web</span>
            </Link>
            <div className="flex">
                <Link href="/login" className="px-4 py-2 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-500/20 transition">
                    Login
                </Link>
            </div>
        </motion.nav>
    )
}