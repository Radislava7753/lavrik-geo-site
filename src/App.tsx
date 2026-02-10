import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Expertise from './components/Expertise'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
