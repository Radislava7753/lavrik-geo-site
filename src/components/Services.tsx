import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'AUDIT DE VISIBILIT\u00c9 LLM',
    price: '190$',
    card: 'Audit 48 h: d\u00e9couvrez si l\u2019IA vous recommande \u00e0 vos clients\u2026 ou si vous \u00eates compl\u00e8tement ignor\u00e9.',
    trigger:
      'Aujourd\u2019hui, vos clients et partenaires demandent \u00e0 ChatGPT qui choisir dans votre secteur. Si votre nom n\u2019appara\u00eet pas dans la r\u00e9ponse, ce sont des contrats qui partent chez vos concurrents sans que vous le sachiez.',
    accordionTitle:
      '\u00abChatGPT vous mentionne\u2026 ou vous \u00eates invisible? On le teste en 48 h, avec une r\u00e9ponse claire, sans d\u00e9tour.\u00bb',
    accordionIntro:
      'En 48 heures, je teste votre pr\u00e9sence dans ChatGPT, Claude, Perplexity et Gemini sur 12 sc\u00e9narios r\u00e9els de votre march\u00e9. Je pose les questions que vos clients posent vraiment, puis je mesure pr\u00e9cis\u00e9ment o\u00f9 vous \u00eates cit\u00e9\u2026 et o\u00f9 vous disparaissez.',
    deliverables: [
      'Tests sur de vraies requ\u00eates (aucune question g\u00e9n\u00e9rique)',
      'R\u00e9sultats chiffr\u00e9s et lisibles: mentionn\u00e9\u2026 ou non',
      'Diagnostic LLM: qui vous oublie, et pourquoi',
      '3 quick wins imm\u00e9diats (actions simples, sans gros chantier)',
      'Feuille de route 30 jours avec un ordre clair de priorit\u00e9s',
    ],
    format: 'Format: PDF net, z\u00e9ro jargon, conclusions visibles en un coup d\u2019\u0153il.',
    delivery: 'Livraison: 2-3 jours apr\u00e8s la commande.',
  },
  {
    id: 2,
    title: 'ANALYSE CONCURRENTIELLE LLM',
    price: '990$',
    card: 'On d\u00e9cortique pourquoi l\u2019IA recommande vos concurrents \u2014 et comment reprendre votre place dans la r\u00e9ponse.',
    trigger:
      'Ce n\u2019est pas de la \u201cchance\u201d: c\u2019est l\u2019architecture de leur pr\u00e9sence en ligne. Tant que vous ne comprenez pas leur m\u00e9canisme de citations, vous jouez \u00e0 l\u2019aveugle pendant qu\u2019eux verrouillent les recommandations d\u2019IA.',
    accordionTitle:
      '\u00abPourquoi ChatGPT recommande vos concurrents et pas vous? On diss\u00e8que leur strat\u00e9gie\u2026 puis on vous montre comment les rattraper.\u00bb',
    accordionIntro:
      'Je compare votre visibilit\u00e9 dans les IA avec celle de vos 3 concurrents principaux, requ\u00eate par requ\u00eate. J\u2019identifie les sources qui les alimentent (pages, avis, m\u00e9dias, plateformes) et les angles de contenu qui d\u00e9clenchent leurs mentions.',
    deliverables: [
      'Comparatif direct vs 3 concurrents (c\u00f4te \u00e0 c\u00f4te)',
      'O\u00f9 l\u2019IA les \u201cprend\u201d: sources, plateformes, preuves concr\u00e8tes',
      'Les contenus qui gagnent des citations (structure, angle, format)',
      'Plan d\u2019action prioris\u00e9: 5 actions, dans l\u2019ordre, avec la logique derri\u00e8re',
    ],
    format: 'Format: rapport de 15\u201320 pages, tableaux et visuels comparatifs.',
    delivery: 'D\u00e9lai: 5\u20137 jours apr\u00e8s signature.',
    note: 'Mon: analyse strat\u00e9gique uniquement (pas d\u2019ex\u00e9cution op\u00e9rationnelle).',
  },
  {
    id: 3,
    title: 'STRAT\u00c9GIE GEO DIY',
    price: '2 900$',
    card: 'Un plan d\u2019ex\u00e9cution interne, semaine par semaine pendant 60 jours \u2014 z\u00e9ro improvisation, z\u00e9ro contenu \u201cau hasard\u201d.',
    trigger:
      'Vous avez une \u00e9quipe et vous voulez garder l\u2019ex\u00e9cution \u00e0 l\u2019interne. Sans feuille de route pr\u00e9cise, vous allez publier \u201cun peu de tout\u201d \u2014 et l\u2019IA va continuer \u00e0 vous ignorer dans les r\u00e9ponses importantes.',
    accordionTitle:
      '\u00abPlan complet \u00e0 ex\u00e9cuter \u00e0 l\u2019interne. 60 jours. Pas de surprises: vous savez exactement quoi faire, quand et pourquoi.\u00bb',
    accordionIntro:
      'Je vous livre une roadmap GEO/LLM compl\u00e8te, structur\u00e9e par semaines, avec des gabarits pr\u00eats \u00e0 copier-coller. Vous suivez le plan, et je corrige par \u00e9crit aux checkpoints pour \u00e9viter la d\u00e9rive et les efforts inutiles.',
    deliverables: [
      'Roadmap 60 jours (semaine par semaine)',
      'Templates: articles, FAQ, t\u00e9moignages, comparatifs, publications sociales',
      'Checklists: quoi publier, o\u00f9, pourquoi (et quoi mesurer)',
      '4 points de suivi \u00e9crit (S2/S4/S6/S8) + 1 appel de lancement de 30 minutes',
    ],
    format: 'Format: roadmap visuelle + gabarits \u00e9ditables + feedback \u00e9crit.',
    delivery: 'Livraison: 5\u20137 jours, puis accompagnement sur 14 jours.',
  },
  {
    id: 4,
    title: 'FULL-SERVICE',
    price: '9 500 \u00e0 12 500$',
    card: 'On s\u2019occupe de tout: contenu, impl\u00e9mentation, diffusion, mesure \u2014 vous gardez uniquement les d\u00e9cisions strat\u00e9giques.',
    trigger:
      'Vous n\u2019avez pas le temps (ni l\u2019\u00e9quipe) pour ex\u00e9cuter. Pour une mont\u00e9e visible, il faut une production continue + une structure lisible par l\u2019IA, pas seulement \u201crefaire le site\u201d.',
    accordionTitle:
      '\u00abOn fait tout: contenu, impl\u00e9mentation, mesure. Vous regardez les r\u00e9sultats monter, sans stress op\u00e9rationnel.\u00bb',
    accordionIntro:
      'Je travaille int\u00e9gr\u00e9 \u00e0 distance pendant 90 jours: pages cl\u00e9s, structure IA, Schema, contenus, diffusion cibl\u00e9e, et tests mensuels sur 4 LLM. On d\u00e9finit un objectif mesurable au d\u00e9marrage, puis on it\u00e8re si n\u00e9cessaire.',
    deliverables: [
      'Refonte des pages cl\u00e9s (structure + Schema + lisibilit\u00e9 IA)',
      'Production + diffusion: blog, FAQ, t\u00e9moignages, publications, preuves',
      'Mesure mensuelle: tests LLM + comparaison au baseline + it\u00e9rations',
      'Pilotage KPI: % de mentions, rang vs concurrents, signaux IA, analytics',
    ],
    extra: '2\u20133 appels/mois + rapports \u00e9crits + support email/Slack',
    format: 'Contrat: 90 jours. R\u00e9sultats visibles souvent autour de J+45.',
    delivery: 'Co\u00fbt: 9 500 (1 march\u00e9) \u00e0 12 500 (3+ march\u00e9s / complexit\u00e9).',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, index) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-800">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-bold text-white">{s.title}</h3>
                  <span className="text-4xl md:text-5xl font-bold text-cyan-400 whitespace-nowrap ml-4">{s.price}</span>
                </div>
                <p className="text-slate-400 text-sm">{s.card}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-slate-300 mb-6 leading-relaxed">{s.trigger}</p>

                <details>
                  <summary className="font-semibold text-slate-200">
                    {s.accordionTitle}
                  </summary>
                  <div className="py-4 px-6 text-slate-300">
                    <p className="mb-4 leading-relaxed">{s.accordionIntro}</p>

                    <h4 className="font-semibold text-white mb-2">Vous recevez:</h4>
                    <ul className="space-y-2 mb-4">
                      {s.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-2">&#8226;</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {s.extra && (
                      <p className="text-sm text-slate-400 mb-2">{s.extra}</p>
                    )}

                    <p className="text-sm text-slate-400">
                      {s.format}
                    </p>
                    <p className="text-sm text-slate-400">
                      {s.delivery}
                    </p>
                    {s.note && (
                      <p className="text-sm text-slate-500 italic mt-2">{s.note}</p>
                    )}
                  </div>
                </details>

                <a href="#contact" className="btn-primary w-full block mt-4">
                  Me contacter
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
