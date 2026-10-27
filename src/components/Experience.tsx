import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      dates: 'JUNE 2026 — PRESENT (7 MONTHS)',
      role: 'Jr. Full Stack Developer',
      company: 'Korkai Technologies, Madurai',
      description: 'Developed secure RESTful APIs with JWT & RBAC, built CRUD modules with Redux',
    },
    {
      dates: 'JULY 2025 — FEB 2026 (8 MONTHS)',
      role: 'Full Stack Developer Intern',
      company: 'Abserve Tech Pvt Ltd',
      description: 'Built responsive UIs with React.js, worked on Node.js backend services with MongoDB',
    },
  ]

  return (
    <section
      id="experience"
      className="relative px-8"
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
          <h2 className="font-heading font-bold" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Experience
          </h2>
          <span className="font-mono-custom text-sm text-muted">
            <span className="text-gold">/</span> 04
          </span>
        </div>

        {/* Experience Table */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-12 gap-6 py-8"
              style={{
                borderTop: index !== 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              {/* Dates */}
              <div className="md:col-span-3">
                <span className="font-mono-custom text-sm text-gold">{exp.dates}</span>
              </div>

              {/* Role & Company */}
              <div className="md:col-span-4">
                <h3 className="font-heading text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-muted">{exp.company}</p>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-muted">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
