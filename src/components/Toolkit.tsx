import { motion } from 'framer-motion'

const Toolkit = () => {
  const categories = [
    {
      number: '01',
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'WebGL'],
    },
    {
      number: '02',
      title: 'Backend',
      skills: ['Node', 'Go', 'Python', 'GraphQL', 'tRPC', 'REST'],
    },
    {
      number: '03',
      title: 'Data',
      skills: ['Postgres', 'Redis', 'ClickHouse', 'Kafka', 'Prisma'],
    },
    {
      number: '04',
      title: 'Infra',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light mb-4"
      >
        The toolkit
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-sm text-gray-400">{category.number}</span>
              <h3 className="text-xl font-medium">{category.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {category.skills.join(' / ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Toolkit
