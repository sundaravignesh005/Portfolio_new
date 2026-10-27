import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    { value: '7+', label: 'years' },
    { value: '40+', label: 'shipped' },
    { value: '2M', label: 'req/day' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-200">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-light mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
