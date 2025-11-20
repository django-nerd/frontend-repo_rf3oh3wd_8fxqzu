import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24 sm:py-28 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={<span className="text-slate-300">Kontakt</span>}
          title={<span className="text-white">Lassen Sie uns sprechen</span>}
          subtitle={<span className="text-slate-300">Kurze Anfrage, klare Empfehlung innerhalb von 24h.</span>}
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.6)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input required className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max Mustermann" />
              </Field>
              <Field label="E-Mail">
                <input type="email" required className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="max@mail.de" />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Projektziel">
                <select className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Neue Website</option>
                  <option>Shopify Shop</option>
                  <option>Optimierung</option>
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Nachricht">
                <textarea rows="4" className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Kurz Ihr Anliegen…" />
              </Field>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium">Senden</button>
              <button className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent text-white px-5 py-3 text-sm font-medium">Beratung buchen</button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
            <h4 className="text-white font-semibold">Warum wir?</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>• Klare Prozesse, feste Ansprechpartner</li>
              <li>• Performance, SEO & Conversion im Fokus</li>
              <li>• Premium-Design mit ruhiger, moderner Ästhetik</li>
            </ul>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <p className="mt-6 text-sm">Oder schreiben Sie uns direkt: <a href="mailto:hallo@studio.de" className="underline decoration-slate-600 hover:text-white">hallo@studio.de</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-300">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
