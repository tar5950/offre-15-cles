import ChatWidget from "@/components/ChatWidget";
import logo from "@/assets/pedagogie_noir.svg";
import { Star, CheckCircle, ArrowRight, ChevronDown, ShieldCheck, Clock, Gift, Brain, Users, BookOpen, Award, Video, FileText, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const CTA_URL = "https://samirratrari.podia.com/15-cles-offre-speciale-60/buy";
const PRIX_NORMAL = 592;
const PRIX_OFFRE = 236;

const handleCTAClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', { value: PRIX_OFFRE, currency: 'EUR', content_name: 'Les 15 Clés — Offre Spéciale' });
  }
  window.open(CTA_URL, '_blank');
};

// Countdown target: 48h from now, stored in sessionStorage
function getDeadline(): Date {
  if (typeof window === "undefined") return new Date(Date.now() + 48 * 3600 * 1000);
  const stored = sessionStorage.getItem("offre_deadline");
  if (stored) return new Date(parseInt(stored));
  const d = Date.now() + 48 * 3600 * 1000;
  sessionStorage.setItem("offre_deadline", String(d));
  return new Date(d);
}

function useCountdown() {
  const [deadline] = useState(getDeadline);
  const [remaining, setRemaining] = useState(() => Math.max(0, deadline.getTime() - Date.now()));
  useEffect(() => {
    const t = setInterval(() => {
      setRemaining(Math.max(0, deadline.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(t);
  }, [deadline]);
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { h, m, s, expired: remaining === 0 };
}

const CLES = [
  { num: 1, titre: "La posture et la position", desc: "L'assise correcte conditionne tout le reste. Un enfant mal positionné fatigue et force inutilement." },
  { num: 2, titre: "La tenue du stylo", desc: "La vraie tenue libère le geste. Ni trop serrée, ni trop lâche — avec les bons repères sensoriels." },
  { num: 3, titre: "Le relâchement musculaire", desc: "Supprimer la tension dans le bras et la main, c'est la clé pour écrire longtemps sans douleur." },
  { num: 4, titre: "Les exercices graphiques de base", desc: "Avant les lettres, le geste. Ces exercices reconstruisent les fondations du tracé." },
  { num: 5, titre: "Les liaisons et enchainements", desc: "L'écriture cursive n'est pas intuitive. Ces liaisons se travaillent méthodiquement." },
  { num: 6, titre: "La vitesse progressive", desc: "On ne force jamais la vitesse. Elle vient naturellement quand le geste est ancré." },
  { num: 7, titre: "L'inclinaison et la régularité", desc: "Une écriture régulière se construit avec des repères visuels précis et des exercices ciblés." },
  { num: 8, titre: "La gestion de la pression", desc: "Trop ou trop peu de pression ? Les exercices de détente et de contrôle règlent ça." },
  { num: 9, titre: "Le tracé des majuscules", desc: "Les majuscules ont leurs propres règles. Un module dédié pour les aborder sans confusion." },
  { num: 10, titre: "La mémoire motrice", desc: "Le geste doit devenir automatique. C'est la mémoire du corps qu'on entraîne, pas la tête." },
  { num: 11, titre: "Le module gauchers", desc: "Les gauchers ont besoin d'une approche spécifique. Un module entier leur est dédié." },
  { num: 12, titre: "La transition script-cursive", desc: "Le passage au cursif est un cap délicat. Une progression claire pour éviter les régressions." },
  { num: 13, titre: "Les outils adaptés", desc: "Le bon stylo au bon moment change tout. Guide complet pour choisir selon l'âge et le profil." },
  { num: 14, titre: "Le suivi de progression", desc: "Des outils concrets pour mesurer les progrès et ajuster au fil des semaines." },
  { num: 15, titre: "La prévention des rechutes", desc: "Comment maintenir les acquis sur le long terme. Un plan de consolidation pratique." },
];

const TEMOIGNAGES = [
  { nom: "Manssour Samia", texte: "Ma fille a arrêté de pleurer avant les devoirs en 3 semaines. Je n'aurais jamais cru que c'était possible aussi vite.", note: 5 },
  { nom: "Rongvaux Ingrid", texte: "En tant qu'orthophoniste, je recommande cette méthode à mes patients. La progression est logique et bien construite.", note: 5 },
  { nom: "Thomas Benoît", texte: "Mon fils avait honte de son écriture. Maintenant il la montre fièrement à sa maîtresse. Merci Samirra.", note: 5 },
  { nom: "Lefevre Aurélie", texte: "La clé n°11 sur les gauchers m'a sauvé la vie. Personne ne m'avait expliqué ça en 7 ans de suivi scolaire.", note: 5 },
  { nom: "Dubois Claire", texte: "J'ai suivi la formation en parallèle de mon cabinet et j'ai vu des résultats sur mes élèves en quelques séances.", note: 5 },
];

const FAQ = [
  {
    q: "C'est quoi exactement 'Les 15 Clés' ?",
    a: "C'est une formation vidéo complète créée par Samirra Trari, spécialiste en rééducation graphomotrice. Elle comprend 15 modules vidéo (1 par clé), des fiches PDF téléchargeables, des exercices progressifs et un accès illimité. Pensée autant pour les parents que pour les professionnels de l'éducation."
  },
  {
    q: "À quel âge est-ce adapté ?",
    a: "La méthode s'adapte à partir de 5 ans jusqu'au collège. Chaque clé précise les tranches d'âge concernées. Les exercices sont progressifs : on commence là où l'enfant en est, pas là où il devrait être."
  },
  {
    q: "Combien de temps par jour ?",
    a: "10 minutes par jour suffisent. L'efficacité vient de la régularité, pas de l'intensité. La plupart des parents constatent des changements visibles en 2 à 4 semaines."
  },
  {
    q: "Et si ça ne fonctionne pas pour mon enfant ?",
    a: "Ça arrive rarement, mais si après 30 jours vous ne constatez aucune amélioration, Samirra vous rembourse intégralement. Pas de questions posées. C'est écrit dans les conditions."
  },
  {
    q: "Je suis professionnel(le) de l'éducation. C'est utile pour moi ?",
    a: "Oui. La formation est pensée pour les deux publics. Les enseignants, orthophonistes, ergothérapeutes et AESH l'utilisent au quotidien avec leurs élèves/patients. Elle leur donne un protocole clair à appliquer en séance."
  },
  {
    q: "J'ai déjà essayé plein de choses sans résultat. Pourquoi ce serait différent ?",
    a: "Parce que la plupart des approches travaillent les symptômes (écrire plus, refaire les lignes) et non les causes (le geste graphomoteur). Les 15 Clés s'attaquent à la racine du problème. C'est la différence."
  },
  {
    q: "C'est quoi l'offre actuelle ? Est-ce que ce prix va durer ?",
    a: `Le prix normal est ${PRIX_NORMAL}€. L'offre spéciale à ${PRIX_OFFRE}€ est disponible uniquement pendant 48h. Passé ce délai, le tarif normal reprend. Aucune exception.`
  },
  {
    q: "Comment j'accède à la formation après l'achat ?",
    a: "Immédiatement. Dès le paiement confirmé, vous recevez un email avec votre accès Podia (plateforme sécurisée). Vous pouvez démarrer le soir même. L'accès est à vie."
  },
];

function CountdownBlock() {
  const { h, m, s, expired } = useCountdown();
  if (expired) return (
    <div className="bg-red-600 text-white text-center py-3 px-4 font-bold text-lg">
      ⏰ L'offre est expirée. Contactez-nous pour vérifier la disponibilité.
    </div>
  );
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="bg-[#1a1a2e] text-white py-3 px-4 text-center">
      <span className="text-sm font-medium mr-3">⏳ Offre spéciale expire dans :</span>
      <span className="font-mono text-xl font-bold text-[#E8892B]">{pad(h)}h {pad(m)}m {pad(s)}s</span>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#E8892B] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Pixel */}
      <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1419561725602042');fbq('track','PageView');` }} />

      {/* Countdown bar */}
      <CountdownBlock />

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 flex justify-center">
        <img src={logo} alt="Trari Pédagogie" className="h-10" />
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Offre limitée 48h — {PRIX_OFFRE}€ au lieu de {PRIX_NORMAL}€
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Les 15 Clés pour transformer<br />
            <span className="text-[#E8892B]">l'écriture de votre enfant</span><br />
            en 10 minutes par jour
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            La méthode complète de Samirra Trari — spécialiste en rééducation graphomotrice — pour corriger les difficultés d'écriture à la racine. Résultats visibles en 2 à 4 semaines.
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            <span className="ml-2 text-gray-600 font-medium">+500 familles et professionnels</span>
          </div>

          {/* CTA Hero */}
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-3 bg-[#E8892B] hover:bg-[#d47a1e] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            J'accède aux 15 Clés maintenant
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-3 text-sm text-gray-500">
            <span className="line-through">{PRIX_NORMAL}€</span>
            {" "}<strong className="text-[#E8892B] text-base">{PRIX_OFFRE}€</strong>
            {" "}· Accès immédiat · Garantie 30 jours
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Cette formation est pour vous si…</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <Users className="w-5 h-5" />, text: "Votre enfant a du mal à tenir son stylo ou écrit avec douleur" },
              { icon: <Brain className="w-5 h-5" />, text: "Son écriture est illisible, irrégulière ou trop lente" },
              { icon: <BookOpen className="w-5 h-5" />, text: "Les devoirs se terminent en larmes et en découragement" },
              { icon: <Award className="w-5 h-5" />, text: "Vous êtes enseignant(e), orthophoniste ou éducateur" },
              { icon: <Gift className="w-5 h-5" />, text: "Vous cherchez une méthode concrète, pas de la théorie" },
              { icon: <MessageCircle className="w-5 h-5" />, text: "Vous avez déjà essayé sans résultat et voulez comprendre pourquoi" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4">
                <span className="text-[#E8892B] mt-0.5 shrink-0">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 15 Clés */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">Les 15 Clés — Ce que vous allez apprendre</h2>
          <p className="text-center text-gray-500 mb-10">15 modules vidéo + fiches PDF + exercices progressifs</p>
          <div className="grid md:grid-cols-2 gap-4">
            {CLES.map((cle) => (
              <div key={cle.num} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#E8892B] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {cle.num}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{cle.titre}</div>
                  <div className="text-gray-500 text-xs mt-1">{cle.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous recevez */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Ce que vous recevez</h2>
          <div className="space-y-4">
            {[
              { icon: <Video className="w-5 h-5" />, titre: "15 modules vidéo", desc: "Une vidéo par clé — courte, claire, applicable immédiatement." },
              { icon: <FileText className="w-5 h-5" />, titre: "Fiches PDF téléchargeables", desc: "Résumés imprimables pour chaque clé, à garder à portée de main." },
              { icon: <BookOpen className="w-5 h-5" />, titre: "Exercices progressifs", desc: "Organisés par niveau et par profil. On commence là où l'enfant en est." },
              { icon: <Award className="w-5 h-5" />, titre: "Module gauchers inclus", desc: "Un module entier dédié aux spécificités de l'écriture chez les gauchers." },
              { icon: <Clock className="w-5 h-5" />, titre: "Accès à vie", desc: "Vous accédez à la formation pour toujours. Mises à jour incluses." },
              { icon: <ShieldCheck className="w-5 h-5" />, titre: "Garantie 30 jours", desc: "Pas de résultat visible après 30 jours ? Remboursement intégral, sans question." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-amber-50 rounded-xl p-4">
                <span className="text-[#E8892B] mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900">{item.titre}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Ce qu'ils disent</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.note)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 italic mb-3">"{t.texte}"</p>
                <p className="font-semibold text-sm text-gray-900">{t.nom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-14 px-4 bg-[#E8892B]">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Offre spéciale — 48h seulement</h2>
          <p className="mb-6 opacity-90">Après ça, le tarif normal de {PRIX_NORMAL}€ reprend. Aucune exception.</p>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-3 bg-white text-[#E8892B] font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Je prends l'offre à {PRIX_OFFRE}€
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm opacity-80">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Paiement sécurisé</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Accès immédiat</span>
            <span className="flex items-center gap-1"><Gift className="w-4 h-4" /> Garantie 30 jours</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à tout changer en 10 minutes par jour ?
          </h2>
          <p className="text-gray-600 mb-8">
            Rejoignez les +500 familles et professionnels qui ont transformé l'écriture avec les 15 Clés.
          </p>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-3 bg-[#E8892B] hover:bg-[#d47a1e] text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Accéder aux 15 Clés maintenant
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-3 text-gray-500 text-sm">
            <span className="line-through">{PRIX_NORMAL}€</span>
            {" "}<strong className="text-[#E8892B] text-base">{PRIX_OFFRE}€</strong>
            {" "}· Accès immédiat · Garantie 30 jours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-gray-400 text-sm">
        <img src={logo} alt="Trari Pédagogie" className="h-8 mx-auto mb-4 opacity-40" />
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/mentions-legales" className="hover:text-gray-600">Mentions légales</a>
          <a href="/cgv" className="hover:text-gray-600">CGV</a>
          <a href="/politique-de-confidentialite" className="hover:text-gray-600">Confidentialité</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Trari Pédagogie — Samirra Trari</p>
      </footer>

      {/* Nina chatbot */}
      <ChatWidget persona="offre" />
    </div>
  );
}
