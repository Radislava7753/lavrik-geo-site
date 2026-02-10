const faqs = [
  {
    id: 1,
    question: 'Mon entreprise existe depuis 15 ans. Pourquoi l\'IA ne me connaît pas?',
    answer:
      'L\'IA ne « voit » pas vos années d\'expérience — elle ne voit que votre empreinte numérique. Si vos pages clés, vos preuves (cas, avis, médias) et vos signaux structurés (Schema, FAQ, comparatifs) sont faibles ou mal organisés, ChatGPT va citer les acteurs qui ont mieux nourri le web, même s\'ils sont plus jeunes ou moins compétents. L\'ancienneté compte moins que la clarté et la structure de votre présence digitale.',
  },
  {
    id: 2,
    question: 'Est-il vrai que 89–90% des décisions B2B impliquent l\'IA générative?',
    answer:
      'Oui. Les études les plus récentes montrent que jusqu\'à 89–90% des acheteurs B2B utilisent au moins une fois l\'IA générative pendant le processus d\'achat: de l\'analyse du marché à la vérification des vendeurs avant le choix final. Les décideurs utilisent ChatGPT, Perplexity, Claude et Gemini pour comparer des fournisseurs, vérifier leur réputation et préparer des questions de négociation.',
  },
  {
    id: 3,
    question: 'À quelles étapes de l\'entonnoir l\'IA influence-t-elle le plus?',
    answer:
      'Au milieu de l\'entonnoir, pendant la recherche et la comparaison: l\'IA bâtit rapidement une liste de fournisseurs, analyse les spécifications et réduit le choix à 3–5 vendeurs. C\'est à ce stade critique que votre visibilité dans l\'IA détermine si vous faites partie de la shortlist ou si vous n\'êtes jamais considéré.',
  },
  {
    id: 4,
    question: 'Comment ChatGPT influence-t-il la constitution d\'une liste courte de fournisseurs?',
    answer:
      'Au lieu de parcourir manuellement des dizaines de sites, l\'acheteur pose à ChatGPT une question du type « Meilleures solutions pour [tâche] dans [région] » et obtient une liste déjà structurée. Si votre marque n\'apparaît pas dans ces réponses, vous n\'êtes tout simplement pas dans le radar: ni dans la liste courte, ni dans le CRM du client.',
  },
  {
    id: 5,
    question: 'La recherche IA remplace-t-elle la recherche Google classique en B2B?',
    answer:
      'Selon des études de 2025, pour environ un quart des acheteurs B2B, l\'IA générative est déjà devenue plus importante que la recherche classique pour choisir des vendeurs. Dans le segment tech, plus de la moitié des acheteurs utilisent des chatbots et la recherche IA comme source majeure pour découvrir de nouveaux fournisseurs. Ce changement s\'accélère.',
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
