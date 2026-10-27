const Marquee = () => {
  const technologies = [
    'REACT.JS',
    'NODE.JS',
    'MONGODB',
    'EXPRESS.JS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'NEXT.JS',
    'TAILWIND CSS',
    'REST APIs',
    'JWT AUTH',
    'HTML5',
    'CSS3',
    'GIT',
    'POSTMAN',
  ]

  // Duplicate for seamless loop
  const allTech = [...technologies, ...technologies]

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'var(--card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex whitespace-nowrap animate-marquee py-4">
        {allTech.map((tech, index) => (
          <div key={index} className="inline-flex items-center px-6">
            <span className="font-mono-custom text-xs text-muted">{tech}</span>
            <span className="text-gold mx-6">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Marquee
