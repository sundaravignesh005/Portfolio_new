const SkillsMarquee = () => {
  const skills = [
    'TypeScript',
    'Distributed systems',
    'Interface design',
    'Postgres',
    'Motion',
    'DX',
  ]

  // Duplicate for seamless loop
  const doubledSkills = [...skills, ...skills]

  return (
    <section className="py-12 border-y border-gray-200 overflow-hidden bg-white">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {doubledSkills.map((skill, index) => (
            <div key={index} className="flex items-center px-4">
              <span className="text-lg font-medium">{skill}</span>
              <span className="mx-4 text-gray-400">✳</span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {doubledSkills.map((skill, index) => (
            <div key={`duplicate-${index}`} className="flex items-center px-4">
              <span className="text-lg font-medium">{skill}</span>
              <span className="mx-4 text-gray-400">✳</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsMarquee
