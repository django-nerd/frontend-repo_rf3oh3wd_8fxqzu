import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Gauge } from 'lucide-react'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: Globe,
    title: 'Website-Erstellung',
    description: 'Hochwertige, schnelle Websites mit klarem Design, perfekter Typografie und messbarer Conversion.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify-Shops',
    description: 'Conversion-starke Stores mit sauberer UX, performanten Themes und skalierbaren Integrationen.',
  },
  {
    icon: Gauge,
    title: 'Website-Optimierung',
    description: 'PageSpeed, SEO, Funnels und UX – wir holen das Maximum aus bestehenden Seiten heraus.',
  },
]

export default function Services() {
  return (
    <section className="relative py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Leistungen"
          title="Strukturiert wie ein Tech-Produkt"
          subtitle="Klar definierte Pakete, moderne Umsetzung und transparente Prozesse."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(2,6,23,0.2)] transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{s.description}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <button className="mt-4 text-sm font-medium text-slate-900 inline-flex items-center gap-2">
                Mehr erfahren
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
