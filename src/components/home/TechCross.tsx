"use client";

import React, { useEffect, useState, useMemo } from "react";

export default function TechCross() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Reduced ring configs for better performance
    const ringConfigs = useMemo(() => [
        { size: 320, color: "border-terracotta/60", duration: 25, rotateX: 70, rotateY: 20 },
        { size: 380, color: "border-sage/60", duration: 30, rotateX: -50, rotateY: 40 },
    ], []);

    // Reduced particle count for better performance
    const particles = useMemo(() => {
        return Array.from({ length: 4 }).map((_, i) => ({
            tx: (Math.random() - 0.5) * 400,
            ty: (Math.random() - 0.5) * 400,
            duration: 5 + Math.random() * 4,
            delay: i * 0.4
        }));
    }, []);

    if (!isMounted) return null;

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center preserve-3d">

                {/* Subtle glow - opacity-only animation for performance */}
                <div
                    className="absolute inset-0 bg-gradient-radial from-maroon/20 to-transparent blur-xl"
                    style={{
                        animation: 'ambient-pulse 5s ease-in-out infinite',
                        willChange: 'opacity',
                    }}
                />

                {/* Orbiting Rings - Reduced count */}
                {ringConfigs.map((config, i) => (
                    <Ring key={i} {...config} />
                ))}

                {/* The Solid Cross */}
                <div className="relative z-10">
                    {/* Vertical Bar */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-56 bg-[#F2F0E9] rounded-2xl shadow-dramatic" />

                    {/* Horizontal Bar */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-20 bg-[#F2F0E9] rounded-2xl shadow-dramatic" />
                </div>

                {/* Floating Particles - Reduced count */}
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-maroon/60 rounded-full blur-[0.5px] animate-particle-float"
                        style={{
                            '--tx': `${p.tx}px`,
                            '--ty': `${p.ty}px`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                        } as React.CSSProperties}
                    />
                ))}

            </div>
        </div>
    );
}

function Ring({ size, color, duration, rotateX, rotateY }: {
    size: number;
    color: string;
    duration: number;
    rotateX: number;
    rotateY: number;
}) {
    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
            style={{
                width: size,
                height: size,
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
        >
            <div
                className={`w-full h-full rounded-full border-[1px] ${color}`}
                style={{
                    animation: `ring-rotate ${duration}s linear infinite`,
                }}
            >
                {/* Node on ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/80 rounded-full shadow-glow" />
            </div>
        </div>
    );
}
