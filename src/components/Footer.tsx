export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/LOGO.png" alt="Lavrik GEO" className="h-8 w-auto" />
              <span className="font-heading text-lg font-bold text-white">Lavrik GEO</span>
            </div>
            <p className="text-sm text-slate-500">
              AI Visibility &amp; GEO Strategy pour entreprises B2B.
              Devenez visible l&agrave; o&ugrave; vos clients cherchent des r&eacute;ponses.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#apropos" className="hover:text-cyan-400 transition-colors">&Agrave; propos</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:ai-analytics@n8nmaster1.site" className="hover:text-cyan-400 transition-colors">
                  ai-analytics@n8nmaster1.site
                </a>
              </li>
              <li>
                <a href="https://wa.me/14383945812" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  +1 438 394 5812 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lavrikgeo" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="text-slate-500">Chicoutimi, Qu&eacute;bec, Canada</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
          <p>&copy; {year} Lavrik GEO. Tous droits r&eacute;serv&eacute;s. | Halyna Lavrik</p>
        </div>
      </div>
    </footer>
  )
}
