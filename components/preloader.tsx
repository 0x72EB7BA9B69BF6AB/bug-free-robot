"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4 sm:p-6 lg:p-8"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex items-center gap-1 sm:gap-2"
        >
          <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text px-3 sm:px-4 py-2 rounded-lg border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm">
            Harmony
          </span>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">TV</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
