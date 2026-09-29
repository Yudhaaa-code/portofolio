import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import { DarkGradientBg } from './components/ui/elegant-dark-pattern'
import { PdfModalProvider } from './context/PdfModalContext'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <PdfModalProvider>
        <DarkGradientBg className="App">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </DarkGradientBg>
      </PdfModalProvider>
    </LanguageProvider>
  )
}

export default App
