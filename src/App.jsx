import { MotionConfig } from 'framer-motion'
import { LanguageProvider, useLang } from './i18n/LanguageContext'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function Portfolio() {
  const { t } = useLang()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.nav.skip}
      </a>
      <Background />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Portfolio />
      </MotionConfig>
    </LanguageProvider>
  )
}
