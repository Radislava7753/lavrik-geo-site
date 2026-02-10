const services = [
  {
    id: 1,
    title: 'AUDIT DE VISIBILITÉ LLM',
    price: '190$',
    tagline: 'Découvrez si l\'IA vous recommande — ou vous ignore. Résultats en 48 h.',
    description:
      'Je teste votre présence dans ChatGPT, Claude, Perplexity et Gemini sur 12 scénarios réels de votre marché. Je pose les questions que vos clients posent vraiment, puis je mesure où vous êtes cité… et où vous disparaissez.',
    deliverables: [
      'Tests sur de vraies requêtes (aucune question générique)',
      'Résultats chiffrés: mentionné… ou non',
      'Diagnostic LLM: qui vous oublie, et pourquoi',
      '3 quick wins immédiats',
      'Feuille de route 30 jours',
    ],
    delivery: '2-3 jours après la commande.',
  },
  {
    id: 2,
    title: 'ANALYSE CONCURRENTIELLE LLM',
    price: '990$',
    tagline: 'Pourquoi l\'IA recommande vos concurrents et pas vous? On dissèque leur stratégie.',
    description:
      'Je compare votre visibilité dans les IA avec celle de vos 3 concurrents principaux, requête par requête. J\'identifie les sources qui les alimentent et les angles de contenu qui déclenchent leurs mentions.',
    deliverables: [
      'Comparatif direct vs 3 concurrents',
      'Où l\'IA les « prend »: sources, plateformes, preuves',
      'Les contenus qui gagnent des citations',
      'Plan d\'action priorisé: 5 actions dans l\'ordre',
    ],
    delivery: '5–7 jours après signature.',
  },
  {
    id: 3,
    title: 'STRATÉGIE GEO DIY',
    price: '2 900$',
    tagline: 'Plan d\'exécution interne, semaine par semaine pendant 60 jours.',
    description:
      'Une roadmap GEO/LLM complète, structurée par semaines, avec des gabarits prêts à copier-coller. Vous suivez le plan, et je corrige par écrit aux checkpoints.',
    deliverables: [
      'Roadmap 60 jours (semaine par semaine)',
      'Templates: articles, FAQ, témoignages, comparatifs',
      'Checklists: quoi publier, où, pourquoi',
      '4 points de suivi écrit + appel de lancement',
    ],
    delivery: '5–7 jours, puis accompagnement sur 14 jours.',
  },
  {
    id: 4,
    title: 'FULL-SERVICE GEO',
    price: '9 500 – 12 500$',
    tagline: 'On s\'occupe de tout. Vous gardez uniquement les décisions stratégiques.',
    description:
      'Je travaille intégré à distance pendant 90 jours: pages clés, structure IA, Schema, contenus, diffusion ciblée, et tests mensuels sur 4 LLM.',
    deliverables: [
      'Refonte des pages clés (structure + Schema + lisibilité IA)',
      'Production + diffusion: blog, FAQ, témoignages, publications',
      'Mesure mensuelle: tests LLM + comparaison au baseline',
      'Pilotage KPI + support email/Slack continu',
    ],
    delivery: 'Contrat: 90 jours. Résultats visibles vers J+45.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quatre approches pour devenir visible dans l'IA.
            Choisissez selon votre niveau d'autonomie et votre urgence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article
              key={s.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                  <span className="text-3xl font-bold whitespace-nowrap ml-4">{s.price}</span>
                </div>
                <p className="text-primary-100 text-sm">{s.tagline}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{s.description}</p>

                <details>
                  <summary className="font-semibold text-gray-800">
                    Détails et livrables
                  </summary>
                  <div className="py-4 px-6 text-gray-700">
                    <h4 className="font-semibold text-gray-800 mb-2">Vous recevez:</h4>
                    <ul className="space-y-2 mb-4">
                      {s.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-600 mr-2">&#8226;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600">
                      <strong>Livraison:</strong> {s.delivery}
                    </p>
                  </div>
                </details>

                <a href="#contact" className="btn-primary w-full block mt-4">
                  Me contacter
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tous les services incluent une communication 100% écrite (email, Slack)
            avec des livrables clairs et un calendrier précis.
          </p>
        </div>
      </div>
    </section>
  )
}
