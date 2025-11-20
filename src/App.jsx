import Hero from './components/Hero'
import Services from './components/Services'
import Configurator from './components/Configurator'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-slate-900" />
            <span className="font-semibold tracking-tight">Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#leistungen" className="hover:text-slate-900">Leistungen</a>
            <a href="#konfigurator" className="hover:text-slate-900">Konfigurator</a>
            <a href="#referenzen" className="hover:text-slate-900">Referenzen</a>
            <a href="#kontakt" className="hover:text-slate-900">Kontakt</a>
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2">Anfrage</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="leistungen"><Services /></div>
        <Configurator />
        <About />
        <div id="referenzen"><Portfolio /></div>
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
