import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

const features = {
  pages: [
    { label: 'Onepager', price: 900 },
    { label: 'Bis 5 Seiten', price: 1600 },
    { label: 'Bis 10 Seiten', price: 2600 },
  ],
  ecommerce: [
    { label: 'Kein Shop', price: 0 },
    { label: 'Shopify Basic', price: 1200 },
    { label: 'Shopify Advanced', price: 2400 },
  ],
  performance: [
    { label: 'Standard-Optimierung', price: 0 },
    { label: 'PageSpeed & SEO Boost', price: 600 },
  ],
  support: [
    { label: 'Ohne Wartung', price: 0 },
    { label: 'Monatliche Betreuung', price: 250 },
  ],
}

export default function Configurator() {
  const [selection, setSelection] = useState({
    pages: features.pages[1],
    ecommerce: features.ecommerce[0],
    performance: features.performance[0],
    support: features.support[0],
  })

  const monthly = useMemo(() => selection.support.price, [selection])
  const oneTime = useMemo(() => selection.pages.price + selection.ecommerce.price + selection.performance.price, [selection])

  return (
    <section id="konfigurator" className="relative py-24 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Konfigurator"
          title="Stellen Sie Ihr Projekt zusammen"
          subtitle="Wählen Sie Funktionsumfang und Betreuung – der Preis aktualisiert sich live."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Panel title="Seitenumfang">
              <div className="grid sm:grid-cols-3 gap-3">
                {features.pages.map((o) => (
                  <OptionCard key={o.label} active={selection.pages.label === o.label} onClick={() => setSelection(prev => ({ ...prev, pages: o }))}>
                    {o.label}
                    <span className="text-slate-500 block text-sm">+{o.price}€</span>
                  </OptionCard>
                ))}
              </div>
            </Panel>

            <Panel title="E‑Commerce">
              <div className="grid sm:grid-cols-3 gap-3">
                {features.ecommerce.map((o) => (
                  <OptionCard key={o.label} active={selection.ecommerce.label === o.label} onClick={() => setSelection(prev => ({ ...prev, ecommerce: o }))}>
                    {o.label}
                    <span className="text-slate-500 block text-sm">+{o.price}€</span>
                  </OptionCard>
                ))}
              </div>
            </Panel>

            <Panel title="Performance & SEO">
              <div className="grid sm:grid-cols-2 gap-3">
                {features.performance.map((o) => (
                  <OptionCard key={o.label} active={selection.performance.label === o.label} onClick={() => setSelection(prev => ({ ...prev, performance: o }))}>
                    {o.label}
                    <span className="text-slate-500 block text-sm">+{o.price}€</span>
                  </OptionCard>
                ))}
              </div>
            </Panel>

            <Panel title="Support">
              <div className="grid sm:grid-cols-2 gap-3">
                {features.support.map((o) => (
                  <OptionCard key={o.label} active={selection.support.label === o.label} onClick={() => setSelection(prev => ({ ...prev, support: o }))}>
                    {o.label}
                    <span className="text-slate-500 block text-sm">{o.price > 0 ? `+${o.price}€/Monat` : '–'}</span>
                  </OptionCard>
                ))}
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-5">
            <PriceCard oneTime={oneTime} monthly={monthly} selection={selection} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Panel({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]">
      <h4 className="text-sm font-semibold text-slate-900 mb-4">{title}</h4>
      {children}
    </div>
  )
}

function OptionCard({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left transition-all ${
        active
          ? 'border-slate-900 bg-slate-900 text-white shadow-[0_10px_30px_-15px_rgba(2,6,23,0.4)]'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      {children}
    </button>
  )
}

function PriceCard({ oneTime, monthly, selection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="sticky top-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_-18px_rgba(2,6,23,0.2)]"
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Preisübersicht</h4>
          <p className="text-slate-500 text-sm">Konfiguration in Echtzeit</p>
        </div>
        <div className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-medium">Unverbindlich</div>
      </div>

      <div className="mt-6 space-y-3 text-sm">
        <LineItem label={selection.pages.label} price={selection.pages.price} />
        <LineItem label={selection.ecommerce.label} price={selection.ecommerce.price} />
        <LineItem label={selection.performance.label} price={selection.performance.price} />
        <div className="h-px bg-slate-200 my-4" />
        <LineItem label="Einmalig" price={oneTime} bold />
        <LineItem label="Monatlich" price={monthly} bold />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2.5 text-sm font-medium">Angebot erhalten</a>
        <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 px-4 py-2.5 text-sm font-medium">Beratung buchen</a>
      </div>

      <p className="mt-3 text-xs text-slate-500">Alle Preise netto, abhängig von Anforderungen. Detailliertes Angebot nach einem kurzen Gespräch.</p>
    </motion.div>
  )
}

function LineItem({ label, price, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-slate-600 ${bold ? 'font-semibold text-slate-900' : ''}`}>{label}</span>
      <span className={`tabular-nums ${bold ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>{price}€</span>
    </div>
  )
}
