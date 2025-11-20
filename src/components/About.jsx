import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="relative py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Über uns"
          title="Warm, professionell, transparent"
          subtitle="Wir sind ein fokussiertes Studio für moderne, schnelle und wirkungsvolle Webauftritte."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]"
            >
              <img src={`https://images.unsplash.com/photo-15${i}0?auto=format&fit=crop&w=600&q=80`} alt="Team" className="h-44 w-full object-cover rounded-xl" />
              <h4 className="mt-4 font-semibold text-slate-900">Teammitglied {i}</h4>
              <p className="text-sm text-slate-600">UX / UI Design</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700 leading-relaxed">
          "Wir glauben an ruhige, hochwertige Gestaltung und klare Prozesse. Unser Ziel sind Websites, die Vertrauen schaffen und Ergebnisse liefern."
        </div>
      </div>
    </section>
  )
}
