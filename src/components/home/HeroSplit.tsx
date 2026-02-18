"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TechCross from "./TechCross";

export default function HeroSplit() {
  // Disabled mouse interaction for better performance

  return (
    <section className="relative min-h-screen bg-cream flex items-center overflow-hidden">
      {/* Vertical text along left edge */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block z-10">
        <p className="vertical-text text-maroon/40 text-sm font-accent uppercase tracking-widest">
          Healthcare Innovation Leader
        </p>
      </div>



      <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-28 lg:pt-24 pb-12 z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE - 60% */}
          <div className="relative z-20 lg:pl-16 text-center lg:text-left">
            {/* Main Headline - Massive Serif */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-charcoal editorial-spacing leading-[0.95] mb-6"
            >
              Shaping<br />
              Tomorrow's<br />
              <span className="relative inline-block text-maroon-dark">
                Healthcare
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-1 left-0 w-full h-2 bg-accent-gradient opacity-30"
                  style={{ originX: 0 }}
                />
              </span>
              <br />
              Today
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-sans text-base sm:text-lg md:text-xl text-charcoal/70 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Empowering healthcare's future through integrated education and innovative technological products
            </motion.p>

            {/* CTAs side-by-side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-center lg:justify-start"
            >
              <Link href="/tech-house">
                <button className="group px-6 py-3 bg-maroon-dark text-cream font-sans font-semibold text-base rounded-full shadow-dramatic hover:shadow-dramatic-lg transition-all duration-400 flex items-center justify-center gap-3 btn-squish">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-6 py-3 bg-transparent border-2 border-maroon-dark text-maroon-dark font-sans font-semibold text-base rounded-full hover:bg-maroon-dark hover:text-cream transition-colors-smooth btn-squish">
                  Connect With Us
                </button>
              </Link>
            </motion.div>


          </div>

          {/* RIGHT SIDE - 40% */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[500px] perspective-1000">




            {/* Large circle that bleeds left */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:-translate-x-10 w-[400px] h-[400px] lg:w-[450px] lg:h-[450px] scale-75 sm:scale-80 lg:scale-100 rounded-full z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full h-full rounded-full bg-accent-gradient shadow-dramatic-lg overflow-hidden"
              >
                {/* Tech Cross */}
                <TechCross />
              </motion.div>
            </div>



            {/* Organic blob shapes - CSS animations for performance */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage/20 rounded-full blur-xl animate-blob-float-1" />
            <div className="absolute bottom-0 left-20 w-40 h-40 bg-terracotta/20 rounded-full blur-xl animate-blob-float-2" />
          </div>
        </div>
      </div>


    </section>
  );
}
