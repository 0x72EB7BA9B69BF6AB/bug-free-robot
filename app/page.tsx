"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { Button } from "@/components/ui/button"
import TypeWriter from "@/components/type-writer"

const blink = {
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0 },
}

export default function Home() {
  const router = useRouter()
  const targetRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [showLanguageSelection, setShowLanguageSelection] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [showTerms, setShowTerms] = useState(false)

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

  useEffect(() => {
    // Show language selection after preloader
    const timer = setTimeout(() => {
      setShowLanguageSelection(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setShowTerms(true)
  }

  const handleAcceptTerms = () => {
    // Store language preference
    localStorage.setItem("selectedLanguage", selectedLanguage || "en")
    // Redirect to main streaming interface (for now, just show success)
    alert("Welcome to Harmony TV! Streaming interface will be available soon.")
  }

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

  const languages = [
    { code: "en", name: "English", available: true },
    { code: "fr", name: "Français", available: true },
    { code: "es", name: "Español", available: false },
    { code: "de", name: "Deutsch", available: false },
    { code: "it", name: "Italiano", available: false },
    { code: "pt", name: "Português", available: false },
  ]

  return (
    <div ref={targetRef} className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
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
        {showLanguageSelection && !showTerms && (
          <motion.section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center max-w-[90%] sm:max-w-3xl mx-auto space-y-6 sm:space-y-8"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex flex-wrap items-center justify-center gap-2"
              >
                <span className="bg-white text-black px-2">Harmony</span>
                <span className="flex items-center">
                  <TypeWriter text="TV" delay={150} />
                  <span className="w-[2px] h-[1em] bg-white animate-[blink_1s_ease-in-out_infinite]" />
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4"
              >
                Welcome to Harmony TV - Your Gateway to Live Television Streaming
              </motion.p>
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">Select Your Language</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {languages.map((language) => (
                    <Button
                      key={language.code}
                      size="lg"
                      disabled={!language.available}
                      className={`w-full py-4 px-6 text-base font-medium transition-all duration-300 ${
                        language.available
                          ? "border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                          : "border-2 border-gray-600 text-gray-600 bg-transparent cursor-not-allowed"
                      }`}
                      onClick={() => language.available && handleLanguageSelect(language.code)}
                    >
                      {language.name}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Only English and French are currently available
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {showTerms && (
          <motion.section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center max-w-[90%] sm:max-w-4xl mx-auto space-y-6 sm:space-y-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Terms of Service
              </h1>
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-600 rounded-lg p-6 sm:p-8 text-left space-y-4">
                <h2 className="text-xl font-semibold">Important Notice</h2>
                <p className="text-gray-300 leading-relaxed">
                  By using Harmony TV, you acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>You have valid subscriptions for all television channels available on this platform</li>
                  <li>You are solely responsible for ensuring your access rights to the content</li>
                  <li>In case of any legal issues or disputes, the responsibility lies entirely with you</li>
                  <li>Harmony TV serves as a streaming platform and does not provide content licenses</li>
                  <li>You must comply with all applicable copyright and broadcasting laws in your jurisdiction</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  By clicking "I Accept", you confirm that you understand and agree to these terms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent px-8 py-4"
                  onClick={handleAcceptTerms}
                >
                  I Accept
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto border-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white transition-all duration-300 bg-transparent px-8 py-4"
                  onClick={() => setShowTerms(false)}
                >
                  Go Back
                </Button>
              </div>
            </motion.div>
          </motion.section>
        )}

        <Footer />
      </div>
    </div>
  )
}
