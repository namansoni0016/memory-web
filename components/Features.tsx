"use client";

import { LuBrainCircuit } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
    {
        icon: <LuBrainCircuit className="w-8 h-8 text-purple-400" />,
        title: "AI-Powered Recall",
        desc: "Ask anything, and memory web finds it instantly"
    },
    {
        icon: <FaSearch className="w-8 h-8 text-purple-400" />,
        title: "Smart Search",
        desc: "Smart search across notes with context"
    },
    {
        icon: <FaLink className="w-8 h-8 text-purple-400" />,
        title: "Connected Thoguhts",
        desc: "Automatically link related ideas to build your knowledge graph"
    }
]

export default function Features() {
    return (
        <section className="py-10 max-w-6xl mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center text-purple-400 mb-16">
                Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
                {features.map((f, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
                        {f.icon}
                        <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                        <p className="mt-2 text-gray-300">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}