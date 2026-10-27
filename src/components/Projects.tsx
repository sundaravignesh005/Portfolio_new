import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'FaithRoot Capital',
      category: 'Financial Services Website',
      description:
        'Professional financial services platform with clean design, service offerings, and client-focused content for capital management and investment solutions.',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      link: 'https://www.faithrootcapital.com/',
    },
    {
      number: '02',
      title: 'SalesTrackLive',
      category: 'Salesperson Tracking System',
      description:
        'End-to-end salesperson tracking system with JWT authentication, RBAC for admin/salesperson roles, location tracking, attendance and visit management.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
      link: 'https://www.salestracklive.com/',
    },
    {
      number: '03',
      title: 'ECMAS Global',
      category: 'E-commerce Website',
      description:
        'Responsive Next.js e-commerce platform with product catalogue, combo offers for herbal/wellness products, and separate business plan pages.',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      link: 'https://emasglobal.in/Home',
    },
    {
      number: '04',
      title: 'JCE Memorial',
      category: 'Carehome Management Platform',
      description:
        'Responsive carehome management platform with reusable Next.js components, integrated frontend modules with REST APIs.',
      technologies: ['Next.js', 'React', 'REST API'],
      link: 'https://jcememorial.com/',
    },
  ]

  return (
    <section
      id="work"
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
            Selected Work
          </h2>
          <span className="font-mono-custom text-sm text-muted">
            <span className="text-gold">/</span> 02
          </span>
        </div>

        {/* Projects Grid */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-border hover:bg-hover-bg transition-all cursor-pointer"
              style={{ borderTop: index === 0 ? '1px solid var(--border)' : 'none' }}
            >
              <div className="grid grid-cols-12 gap-6 p-8 items-center">
                {/* Number */}
                <div className="col-span-1">
                  <span className="font-mono-custom text-sm text-muted">{project.number}</span>
                </div>

                {/* Title & Category */}
                <div className="col-span-11 md:col-span-3">
                  <h3 className="font-heading text-2xl font-bold mb-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono-custom text-xs text-muted">{project.category}</span>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-4 text-muted">{project.description}</div>

                {/* Tech & Button */}
                <div className="col-span-12 md:col-span-4 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-custom text-xs px-3 py-1 border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="w-10 h-10 border border-border group-hover:border-gold rounded flex items-center justify-center flex-shrink-0 transition-all"
                  >
                    <ArrowUpRight
                      size={18}
                      className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
