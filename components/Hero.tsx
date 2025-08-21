"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-40">
            <motion.h1
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-purple-400 bg-clip-text">
                Your AI Memory, Forever
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.3 }}
                className="mt-6 max-w-3xl text-lg text-gray-400">
                Memory web helps you store, recall, and connect your thoughts like never before!
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.6 }}
                className="mt-8">
                <Link href="/signup" className="px-4 py-2 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-500/20 transition">
                    Get Started
                </Link>
            </motion.div>
        </section>
    )
}