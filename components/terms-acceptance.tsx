"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertTriangle } from "lucide-react"
import { useState } from "react"

interface TermsAcceptanceProps {
  onAccept: () => void
  onDecline: () => void
}

export function TermsAcceptance({ onAccept, onDecline }: TermsAcceptanceProps) {
  const [isAccepted, setIsAccepted] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-transparent backdrop-blur-sm border-gray-500">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/20 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Terms and Conditions</h1>
              <p className="text-gray-400">Please read and accept the following terms to continue</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-400 mb-4">Important Notice</h2>
              <p className="text-gray-300 mb-4">
                By using this live TV streaming service, you acknowledge and agree to the following:
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>You confirm that you have valid subscriptions or legal access rights for all TV channels and content available on this platform.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>You understand that this service is provided as a convenience tool and does not grant any broadcasting rights or licenses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>You assume full responsibility for ensuring your access to any content complies with local laws and broadcasting regulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>In case of any legal issues, copyright claims, or disputes arising from your use of this service, you accept full responsibility and liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>This platform and its operators disclaim any liability for copyright infringement or unauthorized access to content.</span>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 mb-8">
              <Checkbox
                id="terms-checkbox"
                checked={isAccepted}
                onCheckedChange={(checked) => setIsAccepted(checked as boolean)}
                className="border-gray-500 data-[state=checked]:bg-white data-[state=checked]:border-white mt-1"
              />
              <label htmlFor="terms-checkbox" className="text-gray-300 text-sm leading-relaxed cursor-pointer">
                I have read, understood, and agree to these terms and conditions. I confirm that I have legal access to all content I will view through this service and accept full responsibility for my usage.
              </label>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={onDecline}
                variant="ghost"
                className="flex-1 border-2 border-gray-500 text-gray-300 hover:bg-gray-500/20 transition-all duration-300"
              >
                Decline
              </Button>
              <Button
                onClick={onAccept}
                disabled={!isAccepted}
                className="flex-1 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Accept & Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}