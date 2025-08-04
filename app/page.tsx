"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Background } from "@/components/background"
import { Preloader } from "@/components/preloader"
import TypeWriter from "@/components/type-writer"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <Background />
      
      <div className="relative z-10">
        <motion.section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-[90%] sm:max-w-4xl mx-auto space-y-6 sm:space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap items-center justify-center gap-2"
            >
              <span className="bg-white text-black px-3 sm:px-4">Design</span>
              <span className="flex items-center">
                <TypeWriter text=" Preserved" delay={150} />
                <span className="w-[2px] h-[1em] bg-white animate-[blink_1s_ease-in-out_infinite]" />
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-4"
            >
              Original design elements successfully preserved. Ready for your new vision.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-gray-500 text-sm sm:text-base mt-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Animated grid • Preloader • Framer Motion • Complete UI system</span>
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
