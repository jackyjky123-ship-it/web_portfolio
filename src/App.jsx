import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Work from './components/Work'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
        <Work />
      </main>
      <Footer />
    </>
  )
}
