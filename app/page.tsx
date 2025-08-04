"use client"

import { useState } from "react"
import { Background } from "@/components/background"
import { Preloader } from "@/components/preloader"
import { Footer } from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"
import { TermsAcceptance } from "@/components/terms-acceptance"
import { StreamTVMain } from "@/components/streamtv-main"

type AppState = "language" | "terms" | "main"

export default function Home() {
  const [appState, setAppState] = useState<AppState>("language")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en")

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setAppState("terms")
  }

  const handleTermsAccept = () => {
    setAppState("main")
  }

  const handleTermsDecline = () => {
    setAppState("language")
  }

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <Background />
      <div className="relative z-10">
        {appState === "language" && (
          <LanguageSelector onLanguageSelect={handleLanguageSelect} />
        )}
        {appState === "terms" && (
          <TermsAcceptance 
            onAccept={handleTermsAccept}
            onDecline={handleTermsDecline}
          />
        )}
        {appState === "main" && (
          <>
            <StreamTVMain language={selectedLanguage} />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}
