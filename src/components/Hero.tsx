import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const words = ['elegant', 'scalable', 'modern', 'responsive', 'secure']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-8"
      style={{ paddingTop: '128px', paddingBottom: '128px' }}
    >
      {/* Grid Texture */}
      <div className="absolute inset-0 grid-texture" />

      {/* Gold Glow */}
      <div className="gold-glow" style={{ top: '20%', left: '10%' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono-custom text-xs text-muted">
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          {/* Headline with Animated Word */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            I build <span className="text-gold">/</span>{' '}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5 }}
                  className="headline-gradient inline-block"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            web products<span className="text-gold">.</span>
          </motion.h1>

          {/* Intro Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted max-w-2xl"
          >
            I'm <span className="text-text font-medium">Sundara Vignesh E</span>, a Full Stack MERN
            Developer from Chennai with 6 months of professional experience building scalable web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="bg-gold hover:bg-gold-hover text-bg px-8 py-3 rounded font-medium inline-flex items-center gap-2 transition-all"
            >
              View my work
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="border border-border hover:border-gold px-8 py-3 rounded font-medium inline-flex items-center gap-2 transition-all hover:bg-hover-bg"
            >
              <Mail size={18} />
              Get in touch
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 pt-8"
          >
            <MapPin size={14} className="text-gold" />
            <span className="font-mono-custom text-xs text-muted">
              CHENNAI, TAMIL NADU — WORKING WORLDWIDE
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
