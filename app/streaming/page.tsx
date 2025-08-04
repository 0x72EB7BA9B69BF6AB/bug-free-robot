"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { translations, Language } from "@/lib/translations"

interface Channel {
  id: string
  name: string
  audioLanguages: Language[]
  isLive: boolean
  viewers?: number
}

const channels: Channel[] = [
  {
    id: "ufc-fight-pass",
    name: "UFC Fight Pass",
    audioLanguages: ["en", "fr"],
    isLive: true,
    viewers: 45230
  },
  {
    id: "sports-center",
    name: "Sports Center",
    audioLanguages: ["en", "fr"],
    isLive: true,
    viewers: 12450
  },
  {
    id: "movie-central",
    name: "Movie Central",
    audioLanguages: ["en"],
    isLive: true,
    viewers: 8900
  },
  {
    id: "news-24",
    name: "News 24",
    audioLanguages: ["fr"],
    isLive: true,
    viewers: 15670
  },
  {
    id: "discovery-nature",
    name: "Discovery Nature",
    audioLanguages: ["en", "fr"],
    isLive: true,
    viewers: 7890
  }
]

export default function StreamingPage() {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en")
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null)
  const [chatMessage, setChatMessage] = useState("")

  useEffect(() => {
    // Get language from localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage") as Language
    if (!storedLanguage) {
      // Redirect back to homepage if no language selected
      router.push("/")
      return
    }
    setSelectedLanguage(storedLanguage)
  }, [router])

  const t = translations[selectedLanguage]

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel)
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In a real app, this would send the message to a chat service
      console.log("Sending message:", chatMessage)
      setChatMessage("")
    }
  }

  const getAudioLanguageText = (channel: Channel) => {
    if (channel.audioLanguages.length === 1) {
      return `${t.audioAvailableIn} ${channel.audioLanguages[0] === "en" ? t.english : t.french}`
    } else {
      return `${t.audioAvailableIn} ${t.english} ${t.and} ${t.french}`
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-900 border-b border-gray-700 p-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <span className="bg-white text-black px-2">Harmony</span>
            <span className="ml-1">TV</span>
          </h1>
          <div className="text-sm text-gray-400">
            {t.audioLanguage}: {selectedLanguage === "en" ? t.english : t.french}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Channels List - Left Panel */}
        <motion.aside 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-80 bg-gray-900 border-r border-gray-700 overflow-y-auto"
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-center">{t.channels}</h2>
            <div className="space-y-2">
              {channels.map((channel) => (
                <motion.div
                  key={channel.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedChannel?.id === channel.id
                      ? "bg-white text-black"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => handleChannelSelect(channel)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{channel.name}</h3>
                      <p className="text-xs opacity-70">
                        {getAudioLanguageText(channel)}
                      </p>
                      {channel.viewers && (
                        <p className="text-xs opacity-50">
                          {channel.viewers.toLocaleString()} viewers
                        </p>
                      )}
                    </div>
                    {channel.isLive && (
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Video Player - Center Panel */}
        <motion.main 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex flex-col"
        >
          <div className="flex-1 bg-gray-800 relative">
            {selectedChannel ? (
              <div className="h-full flex flex-col">
                {/* Video Player Area */}
                <div className="flex-1 bg-black flex items-center justify-center relative">
                  {/* Placeholder for video player */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-gray-400">Video player would load here</p>
                  </div>
                  
                  {/* Channel Info Overlay */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 rounded-lg p-3">
                    <h3 className="font-semibold">{selectedChannel.name}</h3>
                    <p className="text-sm text-gray-300">
                      {getAudioLanguageText(selectedChannel)}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-400">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Player Controls */}
                <div className="bg-gray-900 p-4">
                  <div className="text-center">
                    <h2 className="text-lg font-semibold">{t.currentlyWatching}: {selectedChannel.name}</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {getAudioLanguageText(selectedChannel)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto opacity-50">
                    <div className="w-8 h-8 border-2 border-gray-400 rounded"></div>
                  </div>
                  <p className="text-gray-400">{t.noChannelSelected}</p>
                </div>
              </div>
            )}
          </div>
        </motion.main>

        {/* Chat - Right Panel */}
        <motion.aside 
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-80 bg-gray-900 border-l border-gray-700 flex flex-col"
        >
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-center">{t.liveChat}</h2>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Sample chat messages */}
            <div className="bg-gray-800 rounded-lg p-2">
              <span className="text-xs text-blue-400 font-medium">User123</span>
              <p className="text-sm mt-1">Great fight tonight!</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
              <span className="text-xs text-green-400 font-medium">SportsFan</span>
              <p className="text-sm mt-1">The audio quality is perfect</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-2">
              <span className="text-xs text-purple-400 font-medium">ViewerX</span>
              <p className="text-sm mt-1">Love the dual language option!</p>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={t.sendMessage}
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!chatMessage.trim()}
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {t.send}
              </Button>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  )
}