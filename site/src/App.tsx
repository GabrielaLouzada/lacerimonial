import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Service from './components/service/Service'


function App() {

  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
