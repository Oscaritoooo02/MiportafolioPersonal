import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import FunFacts from './components/FunFacts.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <FunFacts />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
