"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Tv, Globe, Users } from "lucide-react"

interface StreamTVMainProps {
  language: string
}

const content = {
  en: {
    title: "StreamTV.live",
    subtitle: "Watch live television channels from around the world in high quality. Access your favorite shows, news, sports, and entertainment in real-time.",
    startWatching: "Start Watching",
    platformTitle: "Live TV Streaming Platform",
    platformSubtitle: "Experience seamless live television streaming with our advanced platform",
    features: [
      {
        icon: Tv,
        title: "Live Channels",
        description: "Access hundreds of live TV channels from around the world"
      },
      {
        icon: Globe,
        title: "Countries",
        description: "Content from multiple countries and regions worldwide"
      },
      {
        icon: Users,
        title: "Availability",
        description: "24/7 streaming service with reliable uptime"
      }
    ]
  },
  es: {
    title: "StreamTV.live",
    subtitle: "Mira canales de televisión en vivo de todo el mundo en alta calidad. Accede a tus programas, noticias, deportes y entretenimiento favoritos en tiempo real.",
    startWatching: "Comenzar a Ver",
    platformTitle: "Plataforma de Transmisión de TV en Vivo",
    platformSubtitle: "Experimenta la transmisión de televisión en vivo sin interrupciones con nuestra plataforma avanzada",
    features: [
      {
        icon: Tv,
        title: "Canales en Vivo",
        description: "Accede a cientos de canales de TV en vivo de todo el mundo"
      },
      {
        icon: Globe,
        title: "Países",
        description: "Contenido de múltiples países y regiones en todo el mundo"
      },
      {
        icon: Users,
        title: "Disponibilidad",
        description: "Servicio de transmisión 24/7 con tiempo de actividad confiable"
      }
    ]
  },
  fr: {
    title: "StreamTV.live",
    subtitle: "Regardez des chaînes de télévision en direct du monde entier en haute qualité. Accédez à vos émissions, actualités, sports et divertissements préférés en temps réel.",
    startWatching: "Commencer à Regarder",
    platformTitle: "Plateforme de Diffusion TV en Direct",
    platformSubtitle: "Profitez d'une diffusion télévisée en direct fluide avec notre plateforme avancée",
    features: [
      {
        icon: Tv,
        title: "Chaînes en Direct",
        description: "Accédez à des centaines de chaînes TV en direct du monde entier"
      },
      {
        icon: Globe,
        title: "Pays",
        description: "Contenu de plusieurs pays et régions du monde"
      },
      {
        icon: Users,
        title: "Disponibilité",
        description: "Service de diffusion 24h/24 et 7j/7 avec un temps de fonctionnement fiable"
      }
    ]
  },
  de: {
    title: "StreamTV.live",
    subtitle: "Schauen Sie Live-Fernsehkanäle aus der ganzen Welt in hoher Qualität. Greifen Sie auf Ihre Lieblingssendungen, Nachrichten, Sport und Unterhaltung in Echtzeit zu.",
    startWatching: "Streaming Starten",
    platformTitle: "Live-TV-Streaming-Plattform",
    platformSubtitle: "Erleben Sie nahtloses Live-Fernsehstreaming mit unserer fortschrittlichen Plattform",
    features: [
      {
        icon: Tv,
        title: "Live-Kanäle",
        description: "Zugriff auf Hunderte von Live-TV-Kanälen aus der ganzen Welt"
      },
      {
        icon: Globe,
        title: "Länder",
        description: "Inhalte aus mehreren Ländern und Regionen weltweit"
      },
      {
        icon: Users,
        title: "Verfügbarkeit",
        description: "24/7-Streaming-Service mit zuverlässiger Betriebszeit"
      }
    ]
  },
  it: {
    title: "StreamTV.live",
    subtitle: "Guarda i canali televisivi dal vivo da tutto il mondo in alta qualità. Accedi ai tuoi programmi, notizie, sport e intrattenimento preferiti in tempo reale.",
    startWatching: "Inizia a Guardare",
    platformTitle: "Piattaforma di Streaming TV dal Vivo",
    platformSubtitle: "Sperimenta lo streaming televisivo dal vivo senza interruzioni con la nostra piattaforma avanzata",
    features: [
      {
        icon: Tv,
        title: "Canali dal Vivo",
        description: "Accedi a centinaia di canali TV dal vivo da tutto il mondo"
      },
      {
        icon: Globe,
        title: "Paesi",
        description: "Contenuti da più paesi e regioni in tutto il mondo"
      },
      {
        icon: Users,
        title: "Disponibilità",
        description: "Servizio di streaming 24/7 con tempi di attività affidabili"
      }
    ]
  },
  pt: {
    title: "StreamTV.live",
    subtitle: "Assista canais de televisão ao vivo de todo o mundo em alta qualidade. Acesse seus programas, notícias, esportes e entretenimento favoritos em tempo real.",
    startWatching: "Começar a Assistir",
    platformTitle: "Plataforma de Transmissão de TV ao Vivo",
    platformSubtitle: "Experimente transmissão de televisão ao vivo sem interrupções com nossa plataforma avançada",
    features: [
      {
        icon: Tv,
        title: "Canais ao Vivo",
        description: "Acesse centenas de canais de TV ao vivo de todo o mundo"
      },
      {
        icon: Globe,
        title: "Países",
        description: "Conteúdo de vários países e regiões em todo o mundo"
      },
      {
        icon: Users,
        title: "Disponibilidade",
        description: "Serviço de transmissão 24/7 com tempo de atividade confiável"
      }
    ]
  }
}

export function StreamTVMain({ language }: StreamTVMainProps) {
  const t = content[language as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-white text-black px-4 py-2 rounded">{t.title}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              <Play className="mr-2 h-6 w-6" />
              {t.startWatching}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.platformTitle}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.platformSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent backdrop-blur-sm border-gray-500 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}