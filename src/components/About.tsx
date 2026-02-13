import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="apropos" className="py-24 md:py-32 lg:py-40 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            &Agrave; propos
          </h2>
          <p className="text-xl text-slate-300">
            Depuis 20 ans, je traduis le complexe en simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-slate-300 text-lg leading-relaxed"
        >
          <p>
            R&eacute;dactrice en chef.<br />
            Analyste.<br />
            Cheffe de projets en relations publiques.
          </p>

          <p>
            Organisatrice de conf&eacute;rences et de forums internationaux&nbsp;:<br />
            industrie, sant&eacute;, &eacute;nergie, &eacute;conomie, num&eacute;risation.
          </p>

          <p>
            Des sujets lourds.<br />
            Des lecteurs d&eacute;bord&eacute;s.
          </p>

          <p>
            Du travail avec des documents que personne ne voulait lire —<br />
            jusqu'&agrave; ce que je les r&eacute;&eacute;crive.
          </p>

          <p>
            J'ai compris une chose&nbsp;:<br />
            si votre message ne passe pas en quelques minutes,<br />
            il ne passe pas du tout.
          </p>

          <p>
            Aujourd'hui, je fais exactement la m&ecirc;me chose —<br />
            mais non seulement pour les humains,<br />
            aussi pour les machines.
          </p>

          <p className="text-cyan-400 font-semibold text-xl">
            Je ne suis pas d&eacute;veloppeuse.<br />
            Je suis traductrice.
          </p>

          <p className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium text-xl">
            Je traduis votre expertise dans un langage que les LLM respectent.
          </p>

          <p>
            Sans appels.<br />
            Sans rencontres.<br />
            Tout se fait par &eacute;crit.
          </p>

          <p>
            Je travaille en fran&ccedil;ais, en anglais et en ukrainien.
          </p>

          <p>
            Et oui — j'aime profond&eacute;ment ce que je fais.
          </p>

          <p>
            Depuis plus de 7 ans, j'&eacute;tudie la num&eacute;risation<br />
            et l'impact de l'intelligence artificielle sur les jeunes g&eacute;n&eacute;rations.
          </p>

          <p className="text-slate-400 italic">
            Quel monde sommes-nous en train de transmettre aujourd'hui &agrave; nos enfants&nbsp;?
          </p>

          <p>
            J'ai trois filles.
          </p>

          <p>
            Et je souhaite sinc&egrave;rement que nos enfants soient capables<br />
            de vivre heureux dans un monde qui change &agrave; une vitesse fulgurante.
          </p>

          <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 text-slate-400 italic">
            <p>
              Un jour, un cheikh a dit&nbsp;:<br />
              &laquo;&nbsp;Mon grand-p&egrave;re se d&eacute;pla&ccedil;ait &agrave; dos de chameau,<br />
              mon p&egrave;re conduisait des voitures,<br />
              je voyage en avion<br />
              et mes petits-enfants, tr&egrave;s probablement,<br />
              se d&eacute;placeront de nouveau &agrave; dos de chameau.&nbsp;&raquo;
            </p>
          </blockquote>

          <p>
            Selon vous, avons-nous aujourd'hui des strat&eacute;gies sens&eacute;es<br />
            pour prot&eacute;ger nos enfants et nos petits-enfants<br />
            des cons&eacute;quences catastrophiques<br />
            de tout ce qui se passe actuellement<br />
            sur notre magnifique plan&egrave;te&nbsp;?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
