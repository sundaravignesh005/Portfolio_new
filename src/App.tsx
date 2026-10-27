import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
