import { motion } from 'framer-motion'
import { Mail, ArrowUp, Github, Linkedin, Download } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-8"
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Grid Texture */}
      <div className="absolute inset-0 grid-texture" />

      {/* Gold Glow */}
      <div className="gold-glow" style={{ bottom: '20%', right: '10%' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Label */}
          <span className="font-mono-custom text-xs text-muted">
            <span className="text-gold">/</span> 06 — LET'S TALK
          </span>

          {/* Headline */}
          <h2
            className="font-heading font-bold mx-auto"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '1.1',
              maxWidth: '900px',
            }}
          >
            Have a role or an idea in mind<span className="text-gold">?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Currently working at Korkai Technologies, I'm open to new opportunities and exciting projects.
            Let's collaborate and build something exceptional together.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:drvignesh005@gmail.com"
              className="bg-gold hover:bg-gold-hover text-bg px-8 py-3 rounded font-medium inline-flex items-center gap-2 transition-all"
            >
              <Mail size={18} />
              drvignesh005@gmail.com
            </a>
            
            <a
              href="/Sundara_Vignesh_E_Resume.pdf"
              download
              className="border border-gold text-gold hover:bg-gold hover:text-bg px-8 py-3 rounded font-medium inline-flex items-center gap-2 transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
            
            <a
              href="#home"
              className="border border-border hover:border-gold px-8 py-3 rounded font-medium inline-flex items-center gap-2 transition-all hover:bg-hover-bg"
            >
              <ArrowUp size={18} />
              Back to top
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/sundaravignesh005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-border hover:border-gold rounded flex items-center justify-center transition-all hover:bg-hover-bg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sundara-vignesh-e-1v5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-border hover:border-gold rounded flex items-center justify-center transition-all hover:bg-hover-bg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
