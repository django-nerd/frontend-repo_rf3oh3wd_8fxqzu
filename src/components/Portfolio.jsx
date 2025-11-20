import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Bäckerei Huber',
    image: 'https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Physiotherapie Nord',
    image: 'https://images.unsplash.com/photo-1562663648-008ed8b13f61?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCJUMzJUE0Y2tlcmVpJTIwSHViZXJ8ZW58MHwwfHx8MTc2MzY0OTcyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Autohaus West',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Café Morgenlicht',
    image: 'https://images.unsplash.com/photo-1693013751189-8ae51b21351e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXRvaGF1cyUyMFdlc3R8ZW58MHwwfHx8MTc2MzY0OTcyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Portfolio() {
  return (
    <section className="relative py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Referenzen"
          title="Ausgewählte Projekte"
          subtitle="Ein klarer Stil, konsequent umgesetzt – für Marken, die sich abheben wollen."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-slate-900">{p.title}</h4>
                <p className="text-sm text-slate-600">Website & Optimierung</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
