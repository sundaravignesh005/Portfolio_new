import { motion } from 'framer-motion'
import { Code2, Database, Server, Layers, Zap, GitBranch } from 'lucide-react'

const Stack = () => {
  const skills = [
    {
      icon: Code2,
      name: 'Frontend Development',
      note: 'React.js, Next.js, HTML5, CSS3, Tailwind CSS, TanStack Query, Responsive Design',
    },
    {
      icon: Server,
      name: 'Backend Development',
      note: 'Node.js, Express.js, RESTful APIs, Middleware, CRUD Operations, API Integration',
    },
    {
      icon: Database,
      name: 'Database Management',
      note: 'MongoDB, Mongoose, Supabase, Database Schema Design, CRUD Operations',
    },
    {
      icon: Layers,
      name: 'Authentication & State',
      note: 'JWT, RBAC (Role-Based Access Control), Redux, Context API State Management',
    },
    {
      icon: Zap,
      name: 'AI & Development Tools',
      note: 'LLMs, RAG, Vector Databases, Embeddings, Cursor, Claude, Kiro, VS Code',
    },
    {
      icon: GitBranch,
      name: 'Deployment & APIs',
      note: 'Git, GitHub, Postman, Swagger, Vercel, Render, Stripe API, Razorpay API',
    },
  ]

  return (
    <section
      id="stack"
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
            My Stack
          </h2>
          <span className="font-mono-custom text-sm text-muted">
            <span className="text-gold">/</span> 03
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 hover:bg-hover-bg transition-all"
              style={{ backgroundColor: 'var(--bg)' }}
            >
              <skill.icon size={32} className="text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted">{skill.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
