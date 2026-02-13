import { motion } from 'framer-motion'

const faqs = [
  {
    id: 1,
    question: 'Mon entreprise existe depuis 15 ans. Pourquoi l\u2019IA ne me conna\u00eet pas?',
    answer:
      'Parce que l\u2019IA ne \u201cvoit\u201d pas vos ann\u00e9es d\u2019exp\u00e9rience, elle ne voit que votre empreinte num\u00e9rique. Si vos pages cl\u00e9s, vos preuves (cas, avis, m\u00e9dias) et vos signaux structur\u00e9s (Schema, FAQ, comparatifs) sont faibles ou mal organis\u00e9s, ChatGPT va surtout citer les acteurs qui ont mieux \u00abnourri\u00bb le web, m\u00eame s\u2019ils sont plus jeunes ou moins comp\u00e9tents.',
  },
  {
    id: 2,
    question: 'Je n\u2019ai pas de site web moderne. \u00c7a vaut quand m\u00eame la peine?',
    answer:
      'Oui, parce que les LLM lisent d\u2019abord ce qui existe, m\u00eame si le design est dat\u00e9, mais ils ont besoin de clart\u00e9, de structure et de signaux d\u2019autorit\u00e9. Un site imparfait mais structur\u00e9 pour l\u2019IA et soutenu par quelques bonnes sources externes vaut mieux qu\u2019un \u201cbeau\u201d site vide de contenu strat\u00e9gique.',
  },
  {
    id: 3,
    question: 'Combien de temps avant que ChatGPT me recommande?',
    answer:
      'En g\u00e9n\u00e9ral, il faut compter 4 \u00e0 8 semaines pour voir les premiers changements de r\u00e9ponses sur les requ\u00eates cibl\u00e9es, selon la concurrence et le volume de signaux que l\u2019on envoie (pages, mentions, avis, listes \u201cbest of\u201d). Les cycles d\u2019actualisation ne sont pas instantan\u00e9s, mais ils r\u00e9compensent les signaux clairs et r\u00e9p\u00e9t\u00e9s.',
  },
  {
    id: 4,
    question: 'C\u2019est quoi la diff\u00e9rence avec le SEO classique?',
    answer:
      'Le SEO vise surtout Google et la page de r\u00e9sultats; ici, on vise la r\u00e9ponse que donne l\u2019IA \u00e0 une question compl\u00e8te (\u201cQuel fournisseur choisir pour\u2026?\u201d). On travaille donc moins sur des mots-cl\u00e9s isol\u00e9s et plus sur des sc\u00e9narios, des comparatifs, des FAQ structur\u00e9es et des preuves que les LLM peuvent facilement int\u00e9grer dans leurs r\u00e9ponses.',
  },
  {
    id: 5,
    question: 'Je n\u2019ai pas d\u2019\u00e9quipe marketing. C\u2019est un probl\u00e8me?',
    answer:
      'Pas n\u00e9cessairement. Votre enjeu, ce n\u2019est pas la quantit\u00e9 de posts, mais la pr\u00e9cision des signaux envoy\u00e9s \u00e0 l\u2019IA. Avec une bonne feuille de route et quelques ressources internes (ou un partenaire ponctuel), une PME industrielle peut devenir \u201cvisible\u201d pour l\u2019IA sans embaucher un d\u00e9partement marketing complet.',
  },
  {
    id: 6,
    question: '190 \u20ac \u2014 qu\u2019est-ce que je re\u00e7ois exactement?',
    answer:
      'Vous recevez un audit tr\u00e8s cibl\u00e9 de votre visibilit\u00e9 dans ChatGPT, Claude, Perplexity et Gemini sur 12 sc\u00e9narios r\u00e9els de votre march\u00e9, avec un verdict simple: o\u00f9 vous \u00eates cit\u00e9, o\u00f9 vous \u00eates absent, et pourquoi. Le livrable inclut 3 actions rapides \u00e0 mettre en place et une mini-feuille de route 60\u201390 jours pour corriger les angles morts.',
  },
  {
    id: 7,
    question: 'Et si l\u2019audit montre que tout va bien?',
    answer:
      'Alors vous aurez achet\u00e9 une assurance peu ch\u00e8re: la certitude que vous faites partie du \u201cshortlist\u201d que l\u2019IA recommande. Dans ce cas, on se concentre sur le raffinement: mieux contr\u00f4ler comment vous \u00eates pr\u00e9sent\u00e9, sur quels cas d\u2019usage, et comment passer devant vos concurrents dans les comparatifs.',
  },
  {
    id: 8,
    question: 'Vous travaillez avec des entreprises hors tech?',
    answer:
      'Oui, surtout avec des industriels, des fabricants et des entreprises B2B qui n\u2019ont pas une culture \u201cmarketing digital\u201d forte, mais qui d\u00e9pendent d\u00e9j\u00e0 de l\u2019export et des appels d\u2019offres. Justement, ces entreprises ont le plus \u00e0 gagner, parce que leurs concurrents plus \u201cmarket\u00e9s\u201d occupent l\u2019espace dans les r\u00e9ponses d\u2019IA.',
  },
  {
    id: 9,
    question: 'Comment \u00e7a se passe concr\u00e8tement? Appels, r\u00e9unions?',
    answer:
      'On commence par un court appel de cadrage (30\u201345 min) pour comprendre votre offre, vos march\u00e9s et 3\u20135 concurrents cl\u00e9s. Ensuite, je travaille en asynchrone (tests, analyses, rapport) et on se revoit sur une session de restitution pour valider les priorit\u00e9s et les prochaines \u00e9tapes avec votre direction.',
  },
  {
    id: 10,
    question: 'Je peux voir un exemple de rapport avant de payer?',
    answer:
      'Oui, je peux partager un extrait anonymis\u00e9 montrant la structure: sc\u00e9narios test\u00e9s, r\u00e9ponses LLM, tableau comparatif, diagnostic et plan d\u2019action. L\u2019objectif n\u2019est pas de faire \u201cbeau\u201d, mais de vous donner un document que votre direction peut lire en 15 minutes et transformer en d\u00e9cisions concr\u00e8tes.',
  },
  {
    id: 11,
    question: 'Est-ce que tous mes clients utilisent vraiment ChatGPT pour choisir un fournisseur?',
    answer:
      'Pas tous, mais les \u00e9tudes montrent que jusqu\u2019\u00e0 90% des acheteurs B2B utilisent d\u00e9sormais des IA comme ChatGPT \u00e0 un moment de leur processus d\u2019achat, souvent pour b\u00e2tir une premi\u00e8re shortlist de fournisseurs. Si vous n\u2019\u00eates pas cit\u00e9 \u00e0 ce moment-l\u00e0, vous ne serez m\u00eame pas invit\u00e9 \u00e0 la comp\u00e9tition.',
  },
  {
    id: 12,
    question: 'Mon march\u00e9 est tr\u00e8s de niche. L\u2019IA peut vraiment m\u2019aider?',
    answer:
      'Justement, plus le march\u00e9 est de niche, plus une bonne empreinte num\u00e9rique peut faire la diff\u00e9rence quand un acheteur tape une question tr\u00e8s sp\u00e9cifique. Dans les march\u00e9s \u00e9troits, une poign\u00e9e de contenus bien structur\u00e9s et quelques sources d\u2019autorit\u00e9 suffisent pour devenir \u201cla\u201d r\u00e9f\u00e9rence que l\u2019IA cite.',
  },
  {
    id: 13,
    question: 'Si l\u2019IA raconte des choses fausses sur mon entreprise, que faire?',
    answer:
      'On commence par cartographier d\u2019o\u00f9 viennent ces informations (anciens communiqu\u00e9s, agr\u00e9gateurs, articles, profils). Ensuite, on corrige \u00e0 la source et on injecte des contenus clairs, \u00e0 jour et bien structur\u00e9s, que les LLM peuvent pr\u00e9f\u00e9rer. Le but est de \u201cr\u00e9-enseigner\u201d \u00e0 l\u2019IA qui vous \u00eates r\u00e9ellement.',
  },
  {
    id: 14,
    question: 'Est-ce que \u00e7a remplace le SEO et le reste du marketing?',
    answer:
      'Non, \u00e7a les prolonge. Un bon SEO classique am\u00e9liore votre base, mais sans penser \u201cr\u00e9ponses de l\u2019IA\u201d, vous pouvez \u00eatre bien class\u00e9 dans Google et tout de m\u00eame absent des recommandations de ChatGPT. L\u2019optimisation LLM vient au-dessus, comme une couche strat\u00e9gique qui transforme votre pr\u00e9sence web en r\u00e9ponses cit\u00e9es.',
  },
  {
    id: 15,
    question: 'Combien de temps vos recommandations restent valables?',
    answer:
      'Les principes restent valables 12\u201318 mois, mais les signaux doivent \u00eatre nourris r\u00e9guli\u00e8rement. Les mod\u00e8les et leurs sources \u00e9voluent; un suivi trimestriel ou semestriel permet de v\u00e9rifier que vous restez dans les r\u00e9ponses cl\u00e9s et que vos concurrents ne vous ont pas \u201cd\u00e9log\u00e9\u201d.',
  },
  {
    id: 16,
    question: 'Et si je change de march\u00e9 ou lance une nouvelle ligne de produits?',
    answer:
      'Il faudra adapter les sc\u00e9narios et les signaux: nouvelles pages, nouveaux cas d\u2019usage, nouveaux comparatifs. L\u2019avantage, c\u2019est qu\u2019une fois la m\u00e9thode en place, vous pouvez la r\u00e9appliquer sur chaque nouveau segment sans repartir de z\u00e9ro.',
  },
  {
    id: 17,
    question: 'Qu\u2019est-ce qui vous diff\u00e9rencie d\u2019une agence SEO classique?',
    answer:
      'Une agence SEO va surtout parler de trafic, de positions et de mots-cl\u00e9s. Ici, l\u2019indicateur n\u00ba1 est diff\u00e9rent: \u201cEst-ce que l\u2019IA me recommande dans les situations o\u00f9 mes clients cherchent un fournisseur comme moi?\u201d. Toute la d\u00e9marche est construite autour de ces sc\u00e9narios de d\u00e9cision, pas autour de vanity metrics.',
  },
  {
    id: 18,
    question: 'Est-ce que vous signez des NDA / accord de confidentialit\u00e9?',
    answer:
      'Oui, pour les analyses concurrentielles et les feuilles de route, la confidentialit\u00e9 est standard. On travaille avec vos donn\u00e9es internes (clients, marges, priorit\u00e9s) pour choisir les batailles o\u00f9 l\u2019IA peut r\u00e9ellement changer votre pipeline, ce n\u2019est pas de l\u2019audit \u201cg\u00e9n\u00e9rique de surface\u201d.',
  },
  {
    id: 19,
    question: 'Quel est le risque si je ne fais rien pendant encore 1\u20132 ans?',
    answer:
      'Le risque n\u2019est pas \u201cd\u2019\u00eatre mal class\u00e9\u201d, mais de devenir invisible dans les nouveaux r\u00e9flexes d\u2019achat: une partie croissante des d\u00e9cideurs commence par l\u2019IA et ne vous verra jamais, m\u00eame si votre produit est meilleur. Vos concurrents qui travaillent d\u00e9j\u00e0 leur visibilit\u00e9 LLM verrouillent doucement la place.',
  },
  {
    id: 20,
    question: 'Est-ce qu\u2019on peut commencer petit, sans engager un gros budget?',
    answer:
      'Oui, l\u2019audit LLM \u00e0 190 \u20ac est justement con\u00e7u comme une entr\u00e9e simple: en 48 h, vous savez si vous \u00eates dans le radar des IA, sur quels sc\u00e9narios, et ce que vous perdez potentiellement aujourd\u2019hui. Ensuite, \u00e0 vous de d\u00e9cider si le manque de visibilit\u00e9 justifie un plan plus ambitieux.',
  },
  {
    id: 21,
    question: 'Comment l\u2019intelligence artificielle a-t-elle chang\u00e9 le comportement de l\u2019acheteur B2B?',
    answer:
      'L\u2019IA a compress\u00e9 et acc\u00e9l\u00e9r\u00e9 tout le parcours d\u2019achat: ce qui prenait auparavant des semaines de recherche et de discussions internes se fait maintenant en quelques heures gr\u00e2ce aux mod\u00e8les g\u00e9n\u00e9ratifs et \u00e0 la recherche IA. Les acheteurs utilisent ChatGPT, Perplexity et d\u2019autres outils pour obtenir tout de suite une liste de vendeurs, des comparaisons et des risques, puis ils arrivent chez le fournisseur avec une opinion d\u00e9j\u00e0 form\u00e9e et une liste courte.',
  },
  {
    id: 22,
    question: 'Est-il vrai que la majorit\u00e9 des d\u00e9cisions B2B sont maintenant prises avec l\u2019aide de l\u2019IA?',
    answer:
      'Oui, les \u00e9tudes les plus r\u00e9centes montrent que jusqu\u2019\u00e0 89\u201390% des acheteurs B2B utilisent au moins une fois l\u2019IA g\u00e9n\u00e9rative pendant le processus d\u2019achat: de l\u2019analyse du march\u00e9 \u00e0 la v\u00e9rification des vendeurs avant le choix final. Ce n\u2019est plus une exotique, c\u2019est un nouveau \u201cstandard de fond\u201d en B2B.',
  },
  {
    id: 23,
    question: '\u00c0 quelles \u00e9tapes de l\u2019entonnoir l\u2019IA influence-t-elle le plus?',
    answer:
      'Le plus fortement au milieu de l\u2019entonnoir, pendant la recherche et la comparaison: l\u2019IA aide \u00e0 b\u00e2tir rapidement une liste de fournisseurs, \u00e0 analyser des sp\u00e9cifications, \u00e0 r\u00e9sumer les avantages/inconv\u00e9nients et \u00e0 r\u00e9duire le choix \u00e0 3\u20135 vendeurs. Aux \u00e9tapes finales, l\u2019IA est de plus en plus utilis\u00e9e pour analyser des propositions commerciales, comparer des conditions et m\u00eame sugg\u00e9rer des pistes de n\u00e9gociation.',
  },
  {
    id: 24,
    question: 'Comment l\u2019usage de ChatGPT influence-t-il la constitution d\u2019une liste courte de fournisseurs?',
    answer:
      'Au lieu de parcourir manuellement des dizaines de sites, l\u2019acheteur pose \u00e0 ChatGPT une question du type \u201cMeilleures solutions pour [t\u00e2che] dans [r\u00e9gion/segment]\u201d et obtient une liste d\u00e9j\u00e0 structur\u00e9e. Si votre marque n\u2019appara\u00eet pas dans ces r\u00e9ponses, vous n\u2019\u00eates tout simplement pas dans le radar: ni dans la liste courte, ni dans le CRM du client.',
  },
  {
    id: 25,
    question: 'L\u2019IA acc\u00e9l\u00e8re-t-elle le cycle de vente ou le rend-elle plus complexe?',
    answer:
      'En moyenne, elle l\u2019acc\u00e9l\u00e8re. La recherche IA et l\u2019analytique r\u00e9duisent le temps de collecte d\u2019information et d\u2019\u00e9valuation initiale des vendeurs; le comit\u00e9 d\u2019achat passe plus vite \u00e0 une liste courte et aux discussions finales. En m\u00eame temps, la densit\u00e9 d\u2019information augmente: l\u2019acheteur arrive mieux pr\u00e9par\u00e9 et pose des questions plus difficiles.',
  },
  {
    id: 26,
    question: 'Comment l\u2019IA influence-t-elle la confiance envers les vendeurs en B2B?',
    answer:
      'L\u2019IA renforce et complique la confiance \u00e0 la fois. D\u2019un c\u00f4t\u00e9, les revues et comparaisons IA aident \u00e0 trouver rapidement des sources et des avis; de l\u2019autre, il y a un \u201c\u00e9cart de confiance\u201d si ce que l\u2019IA affiche ne correspond pas \u00e0 ce que dit le vendeur. Les entreprises qui g\u00e8rent leur empreinte num\u00e9rique de fa\u00e7on transparente gagnent dans cette nouvelle \u00e9cologie de confiance.',
  },
  {
    id: 27,
    question: '\u00c0 quel point la recherche IA (AI Overviews, ChatGPT) remplace-t-elle la recherche Google classique en B2B?',
    answer:
      'Selon des \u00e9tudes de 2025, pour environ un quart des acheteurs B2B, l\u2019IA g\u00e9n\u00e9rative est d\u00e9j\u00e0 devenue plus importante que la recherche classique pour choisir des vendeurs, et dans le segment tech, plus de la moiti\u00e9 des acheteurs utilisent des chatbots et la recherche IA comme une source majeure pour d\u00e9couvrir de nouveaux fournisseurs.',
  },
  {
    id: 28,
    question: 'Qu\u2019est-ce que l\u2019IA \u201clit\u201d sur mon entreprise quand elle construit ses r\u00e9ponses?',
    answer:
      'L\u2019IA s\u2019appuie sur un ensemble de signaux: votre site, vos cas et votre documentation, des revues sectorielles, des donn\u00e9es sur des plateformes d\u2019avis, des r\u00e9pertoires, des m\u00e9dias et tout contenu structur\u00e9 qu\u2019elle a pu indexer. Les marques fortes, ce ne sont pas seulement des logos, mais un \u201cprofil num\u00e9rique\u201d clair et coh\u00e9rent que les algorithmes peuvent assembler facilement dans une r\u00e9ponse.',
  },
  {
    id: 29,
    question: 'L\u2019IA peut-elle recommander des vendeurs objectivement \u201cmoins bons\u201d, mais simplement plus bruyants?',
    answer:
      'Oui, et c\u2019est le probl\u00e8me central. Les mod\u00e8les ne mesurent pas votre comp\u00e9tence r\u00e9elle; ils classent ce qu\u2019ils ont r\u00e9ussi \u00e0 lire et \u00e0 comprendre. Donc, des acteurs tr\u00e8s actifs en marketing, mais moyens en qualit\u00e9, peuvent para\u00eetre plus convaincants dans les r\u00e9ponses IA que des entreprises discr\u00e8tes, mais tr\u00e8s solides.',
  },
  {
    id: 30,
    question: 'Comment l\u2019IA change-t-elle le travail des ventes et du pre-sales?',
    answer:
      'L\u2019IA enl\u00e8ve la routine: elle aide \u00e0 pr\u00e9parer des courriels personnalis\u00e9s, des pitch decks, des comparatifs concurrents et \u00e0 adapter l\u2019argumentaire selon les r\u00f4les du comit\u00e9 d\u2019achat. R\u00e9sultat: les vendeurs passent moins de temps sur le \u201cbrouillon\u201d et plus sur les conversations de qualit\u00e9 et la fermeture.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <details key={faq.id}>
              <summary className="text-lg">{faq.question}</summary>
              <div className="py-4 px-6 text-slate-300 text-base leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800"
        >
          <h3 className="font-heading text-2xl font-semibold text-white mb-4">
            D'autres questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Contactez-moi directement. Communication 100% &eacute;crite, r&eacute;ponse sous 24 heures.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}
