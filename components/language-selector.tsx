"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode)
  }

  const handleContinue = () => {
    if (selectedLanguage) {
      onLanguageSelect(selectedLanguage)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-transparent backdrop-blur-sm border-gray-500">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Select Language</h1>
              <p className="text-gray-400">Choose your preferred language to continue</p>
            </div>
            
            <div className="space-y-3 mb-8">
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 flex items-center gap-3 ${
                    selectedLanguage === language.code
                      ? "border-white bg-white/10"
                      : "border-gray-500 hover:border-gray-400"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="text-white font-medium">{language.name}</span>
                </motion.button>
              ))}
            </div>

            <Button
              onClick={handleContinue}
              disabled={!selectedLanguage}
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}