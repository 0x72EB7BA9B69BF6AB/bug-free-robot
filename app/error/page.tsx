"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import { Background } from "@/components/background"
import { Preloader } from "@/components/preloader"

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <Background />
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-transparent backdrop-blur-sm border-gray-500">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
                <h2 className="text-2xl font-semibold text-white mb-6">Something went wrong</h2>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We encountered an unexpected error while processing your request. This might be a temporary issue with our streaming service.
                </p>

                <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Possible causes:</h3>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Network connectivity issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Temporary server maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Invalid channel or stream request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span>Subscription verification failed</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.location.reload()}
                    className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                  <Button
                    onClick={() => router.push("/")}
                    variant="ghost"
                    className="border-2 border-gray-500 text-gray-300 hover:bg-gray-500/20 transition-all duration-300"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-600">
                  <p className="text-sm text-gray-500">
                    Error Code: <span className="font-mono">STREAM_ERROR_001</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    If this problem persists, please contact support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}