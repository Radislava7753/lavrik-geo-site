import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          Le Klondike num&eacute;rique &mdash;<br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            et vous n'y &ecirc;tes m&ecirc;me pas?
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12"
        >
          <p className="font-semibold text-white text-2xl">
            En 2026, l'IA est un avantage comp&eacute;titif.<br />
            En 2027, c'est la norme.
          </p>

          <p>
            Chaque mois, 200 millions de personnes posent des questions &agrave; ChatGPT.<br />
            Parmi elles — vos futurs clients.
          </p>

          <p>
            Ils ne cherchent pas votre nom.<br />
            Ils cherchent une solution.
          </p>

          <p>
            L'IA leur donne une liste.<br />
            Cinq noms.
          </p>

          <p className="font-semibold text-white text-2xl">
            Le v&ocirc;tre n'y est pas.
          </p>

          <p className="text-cyan-400 font-medium">
            Pas parce que vous &ecirc;tes mauvais.<br />
            Parce que l'IA ne vous conna&icirc;t pas encore.
          </p>

          <p>
            Ceux qui plantent leur drapeau maintenant seront recommand&eacute;s pendant des ann&eacute;es.<br />
            Les autres devront payer pour rattraper.
          </p>

          <p>
            La carte s&eacute;mantique de votre march&eacute; se dessine en ce moment.<br />
            Avec ou sans vous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#services" className="btn-primary text-lg px-8 py-4">
            Voir les services
          </a>
          <a href="#apropos" className="btn-secondary text-lg px-8 py-4">
            &Agrave; propos
          </a>
        </motion.div>

        {/* Audience segmentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-8 text-left"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 p-6 hover:border-cyan-500/50 transition-colors duration-300">
            <h3 className="font-heading text-xl font-semibold mb-4 text-cyan-400">
              POUR QUI C'EST FAIT
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>&#10003; Entreprises dont les clients viennent d'internet chaque jour</li>
              <li>&#10003; &Eacute;quipes r&eacute;duites, focalis&eacute;es sur le produit, pas sur le marketing</li>
              <li>&#10003; Ceux qui veulent comprendre avant de payer une agence</li>
              <li>&#10003; Dirigeants qui pr&eacute;f&egrave;rent lire un rapport plut&ocirc;t qu'&eacute;couter un pitch</li>
            </ul>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 p-6 hover:border-red-500/50 transition-colors duration-300">
            <h3 className="font-heading text-xl font-semibold mb-4 text-red-400">
              CE N'EST PAS POUR VOUS SI&hellip;
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>&#10007; Vos clients habitent le quartier voisin et vous trouvent sur Google Maps</li>
              <li>&#10007; Vous avez une &eacute;quipe d'analystes et de data engineers</li>
              <li>&#10007; Vous ne pr&eacute;voyez pas de croissance &agrave; long terme</li>
              <li>&#10007; Vous n'avez pas de concurrents (f&eacute;licitations, c'est rare)</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
