import Nav from './components/Nav'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import Hero from './page/Hero'
import About from './page/About'
import Resume from './page/Resume'
import Work from './page/Work'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Scroll down badge — floats between Hero and About */}
        <SectionDivider
          label={<>Scroll<br />down</>}
          href="#about"
        />

        <About />

        <Resume />

        <Work />
      </main>
      <Footer />
    </>
  )
}
