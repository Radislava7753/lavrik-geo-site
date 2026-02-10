export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Vos clients demandent à l'IA<br />
          <span className="text-primary-400">qui choisir dans votre secteur.</span>
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
          <p className="font-semibold text-white text-2xl">
            Votre nom n'apparaît pas.
          </p>

          <p>
            Chaque mois, 200 millions de personnes posent des questions à ChatGPT.
            Parmi elles — vos futurs clients. Ils ne cherchent pas votre nom.
            Ils cherchent une solution. L'IA leur donne une liste. Cinq noms.
          </p>

          <p className="text-primary-300 font-medium">
            Pas parce que vous êtes mauvais.
            Parce que l'IA ne vous connaît pas encore.
          </p>

          <p>
            Ceux qui plantent leur drapeau maintenant seront recommandés pendant des années.
            Les autres devront payer pour rattraper.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services" className="btn-primary text-lg px-8 py-4">
            Voir les services
          </a>
          <a href="#expertise" className="btn-secondary text-lg px-8 py-4">
            Qui sommes-nous
          </a>
        </div>

        {/* Audience segmentation */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-heading text-xl font-semibold mb-4 text-primary-300">
              POUR QUI C'EST FAIT
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li>&#10003; Entreprises dont les clients viennent d'internet chaque jour</li>
              <li>&#10003; Équipes réduites, focalisées sur le produit</li>
              <li>&#10003; Ceux qui veulent comprendre avant de payer une agence</li>
              <li>&#10003; Dirigeants qui préfèrent lire un rapport plutôt qu'écouter un pitch</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-heading text-xl font-semibold mb-4 text-red-300">
              CE N'EST PAS POUR VOUS SI…
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li>&#10007; Vos clients vous trouvent sur Google Maps</li>
              <li>&#10007; Vous avez une équipe d'analystes et de data engineers</li>
              <li>&#10007; Vous ne prévoyez pas de croissance à long terme</li>
              <li>&#10007; Vous n'avez pas de concurrents</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
