"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

const blink = {
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0 },
}

export default function ErrorPage() {
  const router = useRouter()
  const targetRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const gridX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })
  const gridY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set(((e.clientX - centerX) / centerX) * 20)
      mouseY.set(((e.clientY - centerY) / centerY) * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

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
    <div ref={targetRef} className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <motion.div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          className="absolute inset-0"
          style={{
            "@keyframes blink": blink,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)",
            x: gridX,
            y: gridY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10">
        <motion.section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-[90%] sm:max-w-3xl mx-auto space-y-6 sm:space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Oops! Something went wrong
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            >
              We're experiencing technical difficulties. This could be due to:
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-600 rounded-lg p-6 sm:p-8 text-left space-y-3 max-w-2xl mx-auto"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Network connectivity issues</li>
                <li>Server maintenance in progress</li>
                <li>Invalid subscription or access rights</li>
                <li>Geographic content restrictions</li>
                <li>Temporary service unavailability</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent px-8 py-4"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto border-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white transition-all duration-300 bg-transparent px-8 py-4"
                onClick={() => router.push("/")}
              >
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 mt-8"
            >
              If the problem persists, please contact our support team.
            </motion.p>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  )
}