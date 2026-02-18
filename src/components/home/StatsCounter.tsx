"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Users, Building2, Stethoscope, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
    {
        id: 1,
        label: "Healthcare Professionals",
        value: 50,
        suffix: "+",
        icon: Users,
    },
    {
        id: 2,
        label: "Healthcare Facilities",
        value: 10,
        suffix: "+",
        icon: Building2,
    },
    {
        id: 3,
        label: "Doctors",
        value: 20,
        suffix: "+",
        icon: Stethoscope,
    },
    {
        id: 4,
        label: "Market Response",
        value: 75,
        suffix: "%",
        icon: TrendingUp,
    },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString() + suffix;
            }
        });
        return unsubscribe;
    }, [springValue, suffix]);

    return <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-cream" />;
}

export default function StatsCounter() {
    return (
        <section className="py-20 bg-maroon-dark relative overflow-hidden">
            {/* Background texture/grain if needed, keeping it clean for now */}

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                                <stat.icon className="w-8 h-8 text-cream" />
                            </div>

                            <div className="mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>

                            <p className="text-cream/70 text-sm font-sans uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
