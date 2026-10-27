const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="px-8 py-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono-custom text-xs text-muted">
          SV<span className="text-gold">.</span>DEV — © {year} SUNDARA VIGNESH E
        </div>
        <div className="font-mono-custom text-xs text-muted">
          +91-8015440059 · CHENNAI, TAMIL NADU
        </div>
      </div>
    </footer>
  )
}

export default Footer
