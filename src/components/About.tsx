import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { value: '6 Months', label: 'Professional' },
    { value: '4', label: 'Live Projects' },
    { value: '190+', label: 'LeetCode' },
    { value: '7.8', label: 'CGPA' },
  ]

  return (
    <section
      id="about"
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
          <h2
            className="font-heading font-bold"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            About
          </h2>
          <span className="font-mono-custom text-sm text-muted">
            <span className="text-gold">/</span> 01
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              I'm a Full Stack MERN Developer from Chennai with{' '}
              <span className="text-gold font-medium">6 months of professional experience</span>. I build
              responsive, user-friendly web applications with secure JWT authentication, RBAC, Redux state
              management, and seamless API integration. Currently working as a{' '}
              <span className="text-gold font-medium">Jr. Full Stack Developer at Korkai Technologies</span>,
              I've completed my Bachelor's in Computer Science from{' '}
              <span className="text-gold font-medium">KLN College of Engineering</span> with a CGPA of 7.8/10.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="pl-4" style={{ borderLeft: '2px solid var(--gold)' }}>
                <div className="text-3xl font-heading font-bold">{stat.value}</div>
                <div className="text-sm text-muted font-mono-custom">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
