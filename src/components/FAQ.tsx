const faqs = [
  {
    id: 1,
    question: 'Mon entreprise existe depuis 15 ans. Pourquoi l\'IA ne me connaît pas?',
    answer:
      'L\'IA ne « voit » pas vos années d\'expérience — elle ne voit que votre empreinte numérique. Si vos pages clés, vos preuves (cas, avis, médias) et vos signaux structurés (Schema, FAQ, comparatifs) sont faibles ou mal organisés, ChatGPT va citer les acteurs qui ont mieux nourri le web, même s\'ils sont plus jeunes ou moins compétents. L\'ancienneté compte moins que la clarté et la structure de votre présence digitale.',
  },
  {
    id: 2,
    question: 'Je n\'ai pas de site web moderne. Ça vaut quand même la peine?',
    answer:
      'Oui, parce que les LLM lisent d\'abord ce qui existe, même si le design est daté, mais ils ont besoin de clarté, de structure et de signaux d\'autorité. Un site imparfait mais structuré pour l\'IA et soutenu par quelques bonnes sources externes vaut mieux qu\'un « beau » site vide de contenu stratégique.',
  },
  {
    id: 3,
    question: 'Combien de temps avant que ChatGPT me recommande?',
    answer:
      'En général, il faut compter 4 à 8 semaines pour voir les premiers changements de réponses sur les requêtes ciblées, selon la concurrence et le volume de signaux que l\'on envoie (pages, mentions, avis, listes « best of »). Les cycles d\'actualisation ne sont pas instantanés, mais ils récompensent les signaux clairs et répétés.',
  },
  {
    id: 4,
    question: 'C\'est quoi la différence avec le SEO classique?',
    answer:
      'Le SEO vise surtout Google et la page de résultats; ici, on vise la réponse que donne l\'IA à une question complète (« Quel fournisseur choisir pour…? »). On travaille donc moins sur des mots-clés isolés et plus sur des scénarios, des comparatifs, des FAQ structurées et des preuves que les LLM peuvent facilement intégrer dans leurs réponses.',
  },
  {
    id: 5,
    question: 'Je n\'ai pas d\'équipe marketing. C\'est un problème?',
    answer:
      'Pas nécessairement. Votre enjeu, ce n\'est pas la quantité de posts, mais la précision des signaux envoyés à l\'IA. Avec une bonne feuille de route et quelques ressources internes (ou un partenaire ponctuel), une PME industrielle peut devenir « visible » pour l\'IA sans embaucher un département marketing complet.',
  },
  {
    id: 6,
    question: '190$ — qu\'est-ce que je reçois exactement?',
    answer:
      'Vous recevez un audit très ciblé de votre visibilité dans ChatGPT, Claude, Perplexity et Gemini sur 12 scénarios réels de votre marché, avec un verdict simple: où vous êtes cité, où vous êtes absent, et pourquoi. Le livrable inclut 3 actions rapides à mettre en place et une mini-feuille de route 60-90 jours pour corriger les angles morts.',
  },
  {
    id: 7,
    question: 'Et si l\'audit montre que tout va bien?',
    answer:
      'Alors vous aurez acheté une assurance peu chère: la certitude que vous faites partie du « shortlist » que l\'IA recommande. Dans ce cas, on se concentre sur le raffinement: mieux contrôler comment vous êtes présenté, sur quels cas d\'usage, et comment passer devant vos concurrents dans les comparatifs.',
  },
  {
    id: 8,
    question: 'Vous travaillez avec des entreprises hors tech?',
    answer:
      'Oui, surtout avec des industriels, des fabricants et des entreprises B2B qui n\'ont pas une culture « marketing digital » forte, mais qui dépendent déjà de l\'export et des appels d\'offres. Justement, ces entreprises ont le plus à gagner, parce que leurs concurrents plus « marketés » occupent l\'espace dans les réponses d\'IA.',
  },
  {
    id: 9,
    question: 'Comment ça se passe concrètement? Appels, réunions?',
    answer:
      'On commence par un court appel de cadrage (30-45 min) pour comprendre votre offre, vos marchés et 3-5 concurrents clés. Ensuite, je travaille en asynchrone (tests, analyses, rapport) et on se revoit sur une session de restitution pour valider les priorités et les prochaines étapes avec votre direction.',
  },
  {
    id: 10,
    question: 'Je peux voir un exemple de rapport avant de payer?',
    answer:
      'Oui, je peux partager un extrait anonymisé montrant la structure: scénarios testés, réponses LLM, tableau comparatif, diagnostic et plan d\'action. L\'objectif n\'est pas de faire « beau », mais de vous donner un document que votre direction peut lire en 15 minutes et transformer en décisions concrètes.',
  },
  {
    id: 11,
    question: 'Est-il vrai que 89–90% des décisions B2B impliquent l\'IA générative?',
    answer:
      'Oui. Les études les plus récentes montrent que jusqu\'à 89–90% des acheteurs B2B utilisent au moins une fois l\'IA générative pendant le processus d\'achat: de l\'analyse du marché à la vérification des vendeurs avant le choix final. Ce n\'est plus une exotique, c\'est un nouveau standard en B2B.',
  },
  {
    id: 12,
    question: 'À quelles étapes de l\'entonnoir l\'IA influence-t-elle le plus?',
    answer:
      'Au milieu de l\'entonnoir, pendant la recherche et la comparaison: l\'IA aide à bâtir rapidement une liste de fournisseurs, à analyser des spécifications, à résumer les avantages/inconvénients et à réduire le choix à 3–5 vendeurs. Aux étapes finales, l\'IA est de plus en plus utilisée pour analyser des propositions commerciales et suggérer des pistes de négociation.',
  },
  {
    id: 13,
    question: 'Comment ChatGPT influence-t-il la constitution d\'une liste courte de fournisseurs?',
    answer:
      'Au lieu de parcourir manuellement des dizaines de sites, l\'acheteur pose à ChatGPT une question du type « Meilleures solutions pour [tâche] dans [région] » et obtient une liste déjà structurée. Si votre marque n\'apparaît pas dans ces réponses, vous n\'êtes tout simplement pas dans le radar: ni dans la liste courte, ni dans le CRM du client.',
  },
  {
    id: 14,
    question: 'La recherche IA remplace-t-elle la recherche Google classique en B2B?',
    answer:
      'Selon des études de 2025, pour environ un quart des acheteurs B2B, l\'IA générative est déjà devenue plus importante que la recherche classique pour choisir des vendeurs. Dans le segment tech, plus de la moitié des acheteurs utilisent des chatbots et la recherche IA comme source majeure pour découvrir de nouveaux fournisseurs. Ce changement s\'accélère.',
  },
  {
    id: 15,
    question: 'Qu\'est-ce que l\'IA « lit » sur mon entreprise quand elle construit ses réponses?',
    answer:
      'L\'IA s\'appuie sur un ensemble de signaux: votre site, vos cas et votre documentation, des revues sectorielles, des données sur des plateformes d\'avis, des répertoires, des médias et tout contenu structuré qu\'elle a pu indexer. Les marques fortes, ce ne sont pas seulement des logos, mais un « profil numérique » clair et cohérent que les algorithmes peuvent assembler facilement dans une réponse.',
  },
  {
    id: 16,
    question: 'L\'IA peut-elle recommander des vendeurs « moins bons » mais plus bruyants?',
    answer:
      'Oui, et c\'est le problème central. Les modèles ne mesurent pas votre compétence réelle; ils classent ce qu\'ils ont réussi à lire et à comprendre. Des acteurs très actifs en marketing, mais moyens en qualité, peuvent paraître plus convaincants dans les réponses IA que des entreprises discrètes mais très solides.',
  },
  {
    id: 17,
    question: 'Mon marché est très de niche. L\'IA peut vraiment m\'aider?',
    answer:
      'Justement, plus le marché est de niche, plus une bonne empreinte numérique peut faire la différence quand un acheteur tape une question très spécifique. Dans les marchés étroits, une poignée de contenus bien structurés et quelques sources d\'autorité suffisent pour devenir « la » référence que l\'IA cite.',
  },
  {
    id: 18,
    question: 'Si l\'IA raconte des choses fausses sur mon entreprise, que faire?',
    answer:
      'On commence par cartographier d\'où viennent ces informations (anciens communiqués, agrégateurs, articles, profils). Ensuite, on corrige à la source et on injecte des contenus clairs, à jour et bien structurés, que les LLM peuvent préférer. Le but est de « ré-enseigner » à l\'IA qui vous êtes réellement.',
  },
  {
    id: 19,
    question: 'Qu\'est-ce qui vous différencie d\'une agence SEO classique?',
    answer:
      'Une agence SEO va surtout parler de trafic, de positions et de mots-clés. Ici, l\'indicateur nº1 est différent: « Est-ce que l\'IA me recommande dans les situations où mes clients cherchent un fournisseur comme moi? ». Toute la démarche est construite autour de ces scénarios de décision, pas autour de vanity metrics.',
  },
  {
    id: 20,
    question: 'Quel est le risque si je ne fais rien pendant encore 1-2 ans?',
    answer:
      'Le risque n\'est pas « d\'être mal classé », mais de devenir invisible dans les nouveaux réflexes d\'achat: une partie croissante des décideurs commence par l\'IA et ne vous verra jamais, même si votre produit est meilleur. Vos concurrents qui travaillent déjà leur visibilité LLM verrouillent doucement la place.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Questions fréquentes sur la visibilité dans l'IA et l'optimisation GEO
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.id}>
              <summary className="text-lg">{faq.question}</summary>
              <div className="py-4 px-6 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gray-50 rounded-xl">
          <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
            D'autres questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez-moi directement. Communication 100% écrite, réponse sous 24 heures.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  )
}
