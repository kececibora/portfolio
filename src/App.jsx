import { LanguageProvider } from './i18n/LanguageContext'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
