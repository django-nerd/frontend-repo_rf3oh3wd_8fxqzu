export default function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <h4 className="text-slate-900 font-semibold">Studio</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-slate-900">Über uns</a></li>
              <li><a href="#" className="hover:text-slate-900">Karriere</a></li>
              <li><a href="#" className="hover:text-slate-900">Presse</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Leistungen</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-slate-900">Websites</a></li>
              <li><a href="#" className="hover:text-slate-900">Shopify</a></li>
              <li><a href="#" className="hover:text-slate-900">Optimierung</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Ressourcen</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Kontakt</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#kontakt" className="hover:text-slate-900">Anfrage stellen</a></li>
              <li><a href="mailto:hallo@studio.de" className="hover:text-slate-900">hallo@studio.de</a></li>
              <li><span>+49 123 456789</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Studio. Alle Rechte vorbehalten.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-slate-900">Impressum</a>
            <a href="#" className="hover:text-slate-900">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
