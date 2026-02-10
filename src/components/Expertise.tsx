export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Expertise
          </h2>
          <p className="text-xl text-gray-300">
            20 ans à traduire le complexe en simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio narrative */}
          <div className="space-y-6 text-gray-200">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-primary-300 mb-4">
                Halyna Lavrik
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                AI Visibility &amp; GEO Strategy Specialist
              </p>
            </div>

            <p>
              Rédactrice en chef. Analyste. Cheffe de projets en relations publiques.
              Organisatrice de conférences et de forums internationaux:
              industrie, santé, énergie, économie, numérisation.
            </p>

            <p>
              Des sujets lourds. Des lecteurs débordés. Du travail avec des documents
              que personne ne voulait lire —{' '}
              <span className="text-primary-400 font-semibold">
                jusqu'à ce que je les réécrive.
              </span>
            </p>

            <p className="text-gray-300">
              En 2024, j'ai découvert que l'IA générative changeait fondamentalement
              la façon dont les entreprises B2B sont découvertes et évaluées. Exactement
              comme j'ai passé deux décennies à rendre des contenus techniques accessibles
              aux humains, j'aide maintenant les entreprises à structurer leur présence
              numérique pour qu'elle soit comprise et recommandée par l'IA.
            </p>

            <p className="text-gray-400 italic">
              Pas de promesses marketing. Pas de croissance miraculeuse. Juste une méthode
              claire pour que votre expertise devienne visible là où vos clients cherchent
              des réponses.
            </p>
          </div>

          {/* Right: Credentials & method */}
          <div className="space-y-6">
            {/* Method card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-heading text-lg font-semibold text-primary-300 mb-4">
                La méthode GEO
              </h4>
              <ol className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span><strong>Audit.</strong> On teste votre visibilité dans 4 LLM sur 12 requêtes réelles de votre marché.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span><strong>Diagnostic.</strong> On identifie pourquoi l'IA vous ignore et qui elle recommande à votre place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span><strong>Stratégie.</strong> Plan d'action priorisé: quoi faire, dans quel ordre, avec quels livrables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span><strong>Mesure.</strong> Tests mensuels sur 4 LLM pour suivre la progression.</span>
                </li>
              </ol>
            </div>

            {/* Stat card */}
            <div className="bg-primary-900/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700/30">
              <p className="text-4xl font-bold text-primary-400 mb-2">89–90%</p>
              <p className="text-gray-300">
                des acheteurs B2B utilisent l'IA générative pendant le processus d'achat
                — de l'analyse du marché à la sélection finale du fournisseur.
              </p>
            </div>

            {/* Location card */}
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Basée à</p>
              <p className="text-white font-semibold">Chicoutimi, Québec, Canada</p>
              <p className="text-gray-400 text-sm mt-2">
                70 Pl. des Écorceurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
