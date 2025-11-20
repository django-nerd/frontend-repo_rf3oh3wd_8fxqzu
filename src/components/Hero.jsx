import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 shadow-sm">
                  Premium Webstudio
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
                  Moderne Websites, die lokale Unternehmen sichtbar machen.
                </h1>
                <p className="mt-6 text-slate-600 text-lg">
                  Wir gestalten klare, schnelle und konvertierende Webauftritte – mit Fokus auf Markenwirkung, Performance und messbare Ergebnisse.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#konfigurator" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                    Projekt konfigurieren
                  </a>
                  <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                    Beratung anfragen
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" />
                    <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" />
                    <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" />
                  </div>
                  <p>Über 120+ lokale Marken vertrauen uns</p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 min-h-[420px] md:min-h-[520px] lg:min-h-[620px]">
              <div className="relative rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(2,6,23,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
                <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -z-0 inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.06),transparent_60%)]" />
      </div>
    </section>
  )
}
