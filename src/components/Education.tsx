import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section
      className="relative px-8"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
          <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Education
          </h2>
          <span className="font-mono-custom text-sm text-muted">
            <span className="text-gold">/</span> 05
          </span>
        </div>

        {/* Education Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-6 py-6"
        >
          {/* Date */}
          <div className="md:col-span-3">
            <span className="font-mono-custom text-sm text-gold">2021 — MAY 2026</span>
          </div>

          {/* Degree & College */}
          <div className="md:col-span-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <GraduationCap className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-1">
                  B.E. Computer Science Engineering
                </h3>
                <p className="text-muted">KLN College of Engineering, Sivagangai</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gold font-mono-custom text-xs">CGPA</span>
                <span className="text-2xl font-heading font-bold">7.8 / 10</span>
              </div>
              <p className="text-muted">
                Bachelor of Engineering in Computer Science with focus on web technologies, 
                algorithms, and software engineering principles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
