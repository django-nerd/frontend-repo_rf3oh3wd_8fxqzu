import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 shadow-sm"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-600 text-base sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
