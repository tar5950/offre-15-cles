import ChatWidget from "@/components/ChatWidget";
import logo from "@/assets/pedagogie_noir.svg";
import { Star, CheckCircle, ArrowRight, ChevronDown, ShieldCheck, Clock, Gift, Users, BookOpen, Award, Video, MessageCircle, AlertCircle, Zap, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const CTA_URL = "https://samirratrari.podia.com/15-cles-offre-speciale-60/buy";
const PRIX_BARRE = 592;
const PRIX_PRECEDENT = 296;
const PRIX_OFFRE = 236;
const PRIX_MENSUALITE = 118;

const handleCTAClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", {
      value: PRIX_OFFRE,
      currency: "EUR",
      content_name: "Les 15 Clés — Dernière Chance",
    });
  }
  window.open(CTA_URL, "_blank");
};

function getDeadline(): Date {
  if (typeof window === "undefined") return new Date(Date.now() + 48 * 3600 * 1000);
  const stored = sessionStorage.getItem("offre_deadline_v2");
  if (stored) return new Date(parseInt(stored));
  const d = Date.now() + 48 * 3600 * 1000;
  sessionStorage.setItem("offre_deadline_v2", String(d));
  return new Date(d);
}

function useCountdown() {
  const [deadline] = useState(getDeadline);
  const [remaining, setRemaining] = useState(() => Math.max(0, deadline.getTime() - Date.now()));
  useEffect(() => {
    const t = setInterval(() => setRemaining(Math.max(0, deadline.getTime() - Date.now())), 1000);
    return () => clearInterval(t);
  }, [deadline]);
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { h, m, s, expired: remaining === 0 };
}

const CLES = [
  { num: 1, titre: "Les constats", desc: "Identifier les défis courants de l'écriture pour savoir exactement où agir.", duration: "8 min 58 s" },
  { num: 2, titre: "Quand et par quoi commencer", desc: "Les premières étapes à suivre — la progression qui change tout.", duration: "9 min 19 s" },
  { num: 3, titre: "La latéralisation", desc: "Identifier et soutenir la dominance manuelle de l'enfant.", duration: "6 min 26 s" },
  { num: 4, titre: "Les réflexes archaïques", desc: "Comprendre leur lien direct avec le blocage du geste graphique.", duration: "4 min 45 s" },
  { num: 5, titre: "La posture", desc: "Les meilleures pratiques pour écrire sans fatigue ni douleur.", duration: "4 min" },
  { num: 6, titre: "Prérequis pour une écriture indolore", desc: "Les bases nécessaires avant d'aborder le geste scripteur.", duration: "19 min 11 s" },
  { num: 7, titre: "La tenue de crayon", desc: "Une prise en main correcte, confortable et durable.", duration: "10 min 46 s" },
  { num: 8, titre: "L'inclinaison du support", desc: "Comment l'angle du cahier facilite ou bloque l'écriture.", duration: "3 min 16 s" },
  { num: 9, titre: "Le déplacement de l'avant-bras", desc: "Le mouvement clé pour une écriture fluide et non fatigante.", duration: "4 min 47 s" },
  { num: 10, titre: "Le tracé des lettres", desc: "Perfectionner le geste pour plus de lisibilité et de régularité.", duration: "3 min 47 s" },
  { num: 11, titre: "Les formes de base", desc: "Le processus de formation des lettres — ce qui précède tout le reste.", duration: "4 min 25 s" },
  { num: 12, titre: "Quelques règles d'écriture", desc: "Des règles simples pour une écriture lisible et cohérente.", duration: "10 min 43 s" },
  { num: 13, titre: "Partir du geste", desc: "Utiliser le mouvement naturel du corps comme point de départ.", duration: "6 min 12 s" },
  { num: 14, titre: "Les supports", desc: "Choisir les bons supports selon l'âge et le profil de l'enfant.", duration: "13 min 58 s" },
  { num: 15, titre: "Les outils scripteurs", desc: "Sélectionner les outils les plus adaptés — un choix qui fait toute la différence.", duration: "19 min 14 s" },
];

const TEMOIGNAGES = [
  { nom: "Céline Chao", role: "Orthophoniste", texte: "Tu devrais vraiment intervenir dans les centres de formation de tous les paramédicaux et enseignants. Franchement, c'est d'utilité publique tout ce que tu nous as transmis." },
  { nom: "Lila Otexier", role: "Professeure d'économie", texte: "C'est un contenu à la fois théorique mais très pratique. On repart vraiment avec plein d'outils clés en main." },
  { nom: "Laura", role: "Orthophoniste", texte: "En appliquant les conseils et la progression donnés par Samirra, en l'espace de 3-4 mois, ma fille est passée d'une écriture d'enfant de maternelle difficile à une écriture fluide." },
  { nom: "Marina", role: "Enseignante", texte: "Un enfant pouvait rééduquer son écriture à tout âge. Cette formation m'a ouvert les yeux sur ce qui est encore possible." },
];

const FAQ_PARENTS = [
  { q: "Pourquoi ce prix est-il différent de ce que j'ai vu avant ?", a: `Vous avez reçu notre offre à ${PRIX_PRECEDENT}€ — vous ne l'avez pas saisie à temps. Ce lien est votre dernière chance d'accéder à la formation à ${PRIX_OFFRE}€ (en 2 fois sans frais), soit 60% de réduction sur le tarif normal de ${PRIX_BARRE}€. Passé 48h, cette offre disparaît définitivement.` },
  { q: "La formation est-elle adaptée à mon enfant ?", a: "Oui. La méthode fonctionne pour tous les âges, tous les niveaux, y compris les profils atypiques, les enfants gauchers et les grandes difficultés. Samirra a accompagné +5 500 enfants." },
  { q: "Combien de temps par jour ?", a: "10 minutes par jour suffisent. Les 15 modules sont accessibles à votre rythme, 24h/24, 7j/7. L'accès est à vie." },
  { q: "Quelle est la garantie exactement ?", a: "14 jours. Vous regardez les clés 1 et 2. Si après ça vous estimez que la formation ne vous convient pas, Samirra vous rembourse intégralement — sans condition, sans question." },
  { q: "Qu'est-ce que je reçois exactement ?", a: "15 modules vidéo (5h de formation), un e-notebook interactif, un QCM après chaque clé, un groupe WhatsApp d'accompagnement, 2 bonus experts (réflexes archaïques + gauchers), et les compléments d'expertes (orthophonistes, orthopédagogue). Accès à vie." },
  { q: "C'est quoi le paiement en 2 fois sans frais ?", a: `Vous réglez 2 fois ${PRIX_MENSUALITE}€, sans frais de dossier, sans intérêts. Total : ${PRIX_OFFRE}€. C'est automatique lors du paiement.` },
];

const FAQ_PROS = [
  { q: "Pourquoi ce prix est-il différent de ce que j'ai vu avant ?", a: `Vous avez reçu notre offre à ${PRIX_PRECEDENT}€ — vous ne l'avez pas saisie à temps. Ce lien est votre dernière chance d'accéder à la formation à ${PRIX_OFFRE}€ (en 2 fois sans frais), soit 60% de réduction sur le tarif normal de ${PRIX_BARRE}€. Passé 48h, cette offre disparaît définitivement.` },
  { q: "Cette formation convient-elle à ma pratique professionnelle ?", a: "Oui. Elle est pensée pour les orthophonistes, enseignants, ergothérapeutes, psychomotriciens et graphothérapeutes. Les techniques sont immédiatement applicables dès votre prochaine séance." },
  { q: "Y a-t-il une attestation de formation ?", a: "Oui, une attestation de fin de formation est incluse. Pour l'obtenir : visionner chaque vidéo, valider le QCM de chaque module, et remplir le questionnaire de satisfaction final." },
  { q: "Quelle est la garantie exactement ?", a: "14 jours. Vous regardez les clés 1 et 2. Si après ça vous estimez que la formation ne vous convient pas, remboursement intégral — sans condition, sans question." },
  { q: "Qu'est-ce que je reçois exactement ?", a: "15 modules vidéo (5h de formation), un e-notebook interactif, un QCM après chaque clé, une attestation de fin de formation, un groupe WhatsApp d'accompagnement, 2 bonus experts (réflexes archaïques + gauchers), et les compléments d'expertes (Léa Helias Petraroli, Laura-Marie, Rajae Akrad). Accès à vie." },
  { q: "C'est quoi le paiement en 2 fois sans frais ?", a: `Vous réglez 2 fois ${PRIX_MENSUALITE}€, sans frais de dossier, sans intérêts. Total : ${PRIX_OFFRE}€. C'est automatique lors du paiement.` },
];

function pad(n: number) { return String(n).padStart(2, "0"); }

function StickyCountdown({ h, m, s, expired }: { h: number; m: number; s: number; expired: boolean }) {
  if (expired) return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold shadow-lg">
      ⏰ Cette offre est expirée. Contactez-nous pour vérifier la disponibilité.
    </div>
  );
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] text-white py-2 px-4 shadow-lg">
      <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 text-sm">
        <Clock className="w-4 h-4 text-[#E8892B] shrink-0" />
        <span className="font-medium">Dernière chance — offre expire dans :</span>
        <span className="font-mono font-bold text-[#E8892B] text-base tracking-wider">
          {pad(h)}h {pad(m)}m {pad(s)}s
        </span>
        <span className="text-gray-400 hidden sm:inline">· après ça, c'est fini.</span>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#E8892B] transition-transform shrink-0 ml-2 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{a}</div>}
    </div>
  );
}

const PAYMENT_SVGS = (
  <div className="flex items-center justify-center gap-2 flex-wrap mt-2">
    <svg viewBox="0 0 60 38" className="h-6 w-auto rounded shadow-sm" aria-label="Visa">
      <rect width="60" height="38" rx="5" fill="#1A1F71"/>
      <text x="30" y="26" textAnchor="middle" fill="#F7B600" fontSize="18" fontWeight="bold" fontFamily="Arial,sans-serif" letterSpacing="1" fontStyle="italic">VISA</text>
    </svg>
    <svg viewBox="0 0 60 38" className="h-6 w-auto rounded shadow-sm" aria-label="Mastercard">
      <rect width="60" height="38" rx="5" fill="white" stroke="#e5e7eb"/>
      <circle cx="24" cy="19" r="12" fill="#EB001B"/>
      <circle cx="36" cy="19" r="12" fill="#F79E1B"/>
      <path d="M30 9.5a12 12 0 0 1 0 19A12 12 0 0 1 30 9.5z" fill="#FF5F00"/>
    </svg>
    <svg viewBox="0 0 60 38" className="h-6 w-auto rounded shadow-sm" aria-label="CB">
      <rect width="60" height="38" rx="5" fill="#0066B2"/>
      <text x="30" y="25" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" fontFamily="Arial,sans-serif" letterSpacing="2">CB</text>
    </svg>
    <svg viewBox="0 0 60 38" className="h-6 w-auto rounded shadow-sm" aria-label="Amex">
      <rect width="60" height="38" rx="5" fill="#016FD0"/>
      <text x="30" y="22" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="Arial,sans-serif">AMERICAN</text>
      <text x="30" y="31" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="Arial,sans-serif">EXPRESS</text>
    </svg>
    <svg viewBox="0 0 60 38" className="h-6 w-auto rounded shadow-sm" aria-label="Stripe">
      <rect width="60" height="38" rx="5" fill="#635BFF"/>
      <text x="30" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial,sans-serif">stripe</text>
    </svg>
  </div>
);

function PaymentBadges() {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xs text-gray-500 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Paiement 100% sécurisé · SSL 256 bits
      </p>
      {PAYMENT_SVGS}
    </div>
  );
}

function PaymentBadgesLight() {
  return (
    <div className="flex flex-col items-center gap-1 opacity-90">
      <p className="text-xs text-white/70 flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Paiement sécurisé · SSL 256 bits · Accès immédiat
      </p>
      {PAYMENT_SVGS}
    </div>
  );
}

// ─── REASONS FEEDBACK ─────────────────────────────────────────────────────────
const EXIT_REASONS = [
  { id: "price", label: "Le prix est trop élevé pour moi", icon: "💰" },
  { id: "unsure", label: "Je ne suis pas sûr(e) que ça marche pour nous", icon: "🤔" },
  { id: "time", label: "Je n'ai pas le temps maintenant", icon: "⏰" },
  { id: "think", label: "Je veux réfléchir encore un peu", icon: "💭" },
  { id: "other", label: "Autre raison", icon: "💬" },
];

const FEEDBACK_ENDPOINT = "http://204.168.143.240:8080/feedback";

function ExitIntentPopup({ onClose, persona }: { onClose: () => void; persona: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = async () => {
    if (!selected) return;
    try {
      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason: selected,
          email: email || "inconnu",
          persona,
          source: "exit_intent_offre",
          url: window.location.href,
          ts: new Date().toISOString(),
        }),
        mode: "no-cors",
      });
    } catch (_) {}
    setSent(true);
    setTimeout(onClose, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
        {!sent ? (
          <>
            <div className="bg-[#1B2B4B] text-white px-6 py-5">
              <p className="text-xs uppercase tracking-widest text-[#E8892B] font-semibold mb-1">Une question rapide</p>
              <h3 className="text-lg font-bold leading-snug">Qu'est-ce qui vous a freiné aujourd'hui ?</h3>
              <p className="text-sm text-white/60 mt-1">Sélectionnez votre réponse ci-dessous — 10 secondes.</p>
            </div>
            <div className="px-6 py-4 flex flex-col gap-2.5">
              {EXIT_REASONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelected(r.id)}
                  className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    selected === r.id
                      ? "border-[#E8892B] bg-orange-50 text-[#C97420]"
                      : "border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <span className="text-xl">{r.icon}</span>
                  {r.label}
                </button>
              ))}

              {selected === "price" && (
                <div className="mt-1 p-3 bg-green-50 rounded-xl border border-green-200 text-sm text-green-800">
                  💡 Saviez-vous que vous pouvez payer en <strong>2 fois 118€ sans frais</strong> ?
                </div>
              )}

              <input
                type="email"
                placeholder="Votre email (facultatif, pour vous recontacter)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm w-full focus:outline-none focus:border-[#E8892B]"
              />

              <div className="flex gap-2 mt-1">
                <button
                  onClick={handleSend}
                  disabled={!selected}
                  className="flex-1 py-3 bg-[#E8892B] text-white rounded-xl font-semibold text-sm disabled:opacity-40 hover:bg-[#C97420] transition-colors"
                >
                  Envoyer mon retour
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-3 text-gray-400 hover:text-gray-600 text-sm"
                >
                  Fermer
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="px-6 py-10 text-center">
            <div className="text-4xl mb-3">🙏</div>
            <h3 className="text-lg font-bold text-[#1B2B4B] mb-2">Merci pour votre retour !</h3>
            <p className="text-sm text-gray-500">Votre avis nous aide à améliorer notre offre pour mieux vous accompagner.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function useExitIntent(): [boolean, () => void] {
  const [show, setShow] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("exit_intent_shown");
    if (alreadySeen) return;

    // Desktop: mouse leaves viewport toward top
    const onMouseOut = (e: MouseEvent) => {
      if (fired.current) return;
      if (e.clientY <= 5 && e.relatedTarget === null) {
        fired.current = true;
        sessionStorage.setItem("exit_intent_shown", "1");
        setShow(true);
      }
    };

    // Mobile: 45s inactivity timer
    const timer = setTimeout(() => {
      if (fired.current) return;
      fired.current = true;
      sessionStorage.setItem("exit_intent_shown", "1");
      setShow(true);
    }, 45000);

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(timer);
    };
  }, []);

  return [show, () => setShow(false)];
}

export default function Index() {
  const [searchParams] = useSearchParams();
  const prenom = searchParams.get("prenom") || "";
  const enfant = searchParams.get("enfant") || "";
  const persona = searchParams.get("persona") || "parent"; // "parent" | "pro"
  const isPro = persona === "pro";
  const { h, m, s, expired } = useCountdown();
  const [showExitIntent, closeExitIntent] = useExitIntent();

  const prenomDisplay = prenom ? `, ${prenom}` : "";
  const enfantDisplay = enfant || "votre enfant";

  return (
    <div className="min-h-screen bg-white font-sans pt-10">
      {/* Pixel */}
      <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1419561725602042');fbq('track','PageView');` }} />

      {/* Sticky countdown */}
      <StickyCountdown h={h} m={m} s={s} expired={expired} />

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 flex justify-center">
        <img src={logo} alt="Trari Pédagogie" className="h-10" />
      </header>

      {/* URGENCE CONTEXT — Pourquoi ils sont là */}
      <section className="bg-amber-50 border-b border-amber-200 py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-amber-900 text-base mb-1">
                {prenom ? `${prenom}, vous` : "Vous"} avez reçu notre offre à {PRIX_PRECEDENT}€. Vous ne l'avez pas saisie.
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                Ce lien est votre <strong>dernière chance</strong> d'accéder aux 15 Clés à <strong>{PRIX_OFFRE}€ en 2 fois sans frais</strong> — soit {PRIX_BARRE - PRIX_OFFRE}€ d'économie par rapport au tarif normal.
                Passé 48h, cette offre disparaît. Elle ne sera pas reconduite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-5 animate-pulse">
            <Clock className="w-4 h-4" />
            {expired ? "Offre expirée" : `Il vous reste ${pad(h)}h ${pad(m)}m ${pad(s)}s`}
          </div>

          {isPro ? (
            <>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {prenom ? `${prenom}, vous` : "Vous"} savez qu'il vous manque quelque chose.<br />
                <span className="text-[#E8892B]">Voici exactement ce que c'est.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-3 max-w-2xl mx-auto">
                +1 500 professionnels (orthophonistes, enseignants, ergothérapeutes) ont transformé leur pratique avec les 15 Clés. 5h de formation terrain, applicables dès votre prochaine séance.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {enfant !== "" ? `${enfant} mérite` : "Votre enfant mérite"} mieux que des exercices qui ne changent rien.<br />
                <span className="text-[#E8892B]">Voici la dernière chance.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-3 max-w-2xl mx-auto">
                +5 500 enfants accompagnés. Une méthode de terrain en 15 clés, 10 min par jour, résultats visibles en quelques semaines.
              </p>
            </>
          )}

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            <span className="ml-2 text-gray-500 text-sm">+5 500 enfants · +1 500 professionnels</span>
          </div>

          {/* Prix hero */}
          <div className="inline-block bg-white border-2 border-[#E8892B] rounded-2xl px-8 py-5 mb-6 shadow-md">
            <div className="text-gray-400 text-sm mb-1">Offre normale</div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="line-through text-gray-400 text-xl">{PRIX_BARRE}€</span>
              <span className="line-through text-gray-500 text-2xl font-semibold">{PRIX_PRECEDENT}€</span>
              <span className="text-[#E8892B] text-4xl font-extrabold">{PRIX_OFFRE}€</span>
            </div>
            <div className="text-sm text-gray-500">ou <strong>2 × {PRIX_MENSUALITE}€</strong> sans frais</div>
            <div className="mt-3 text-xs text-gray-400">Accès immédiat · Accès à vie · Satisfait ou remboursé 14 jours</div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button onClick={handleCTAClick} className="inline-flex items-center gap-3 bg-[#E8892B] hover:bg-[#d47a1e] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              Je saisis cette dernière chance
              <ArrowRight className="w-5 h-5" />
            </button>
            <PaymentBadges />
          </div>
        </div>
      </section>

      {/* Ce que vous ratez si vous ne prenez pas */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {isPro ? "Chaque semaine sans les bons outils…" : "Chaque semaine qui passe sans agir…"}
          </h2>
          <div className="space-y-3">
            {isPro ? [
              "…c'est une séance de plus où vous cherchez quoi faire avec cet enfant.",
              "…c'est un enfant qui compense, fatigue et perd confiance.",
              "…c'est un blocage que vous n'arrivez pas à lever faute d'approche structurée.",
              "…c'est du temps perdu sur des solutions qui ne s'attaquent pas aux vraies causes.",
            ] : [
              `…c'est une semaine de plus où ${enfantDisplay} souffre face aux devoirs.`,
              `…c'est une semaine de plus où ${enfantDisplay} perd confiance.`,
              "…c'est un geste qui s'ancre encore plus profondément dans le mauvais sens.",
              "…c'est une opportunité à 236€ que vous n'aurez plus.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                <span className="text-gray-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 15 clés */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Les 15 Clés — le programme complet</h2>
          <p className="text-center text-gray-500 mb-8 text-sm">5h de formation · 15 modules vidéo · E-notebook interactif</p>
          <div className="grid md:grid-cols-2 gap-3">
            {CLES.map((c) => (
              <div key={c.num} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-[#E8892B] text-white font-bold text-xs flex items-center justify-center shrink-0">{c.num}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">{c.titre}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{c.desc}</div>
                </div>
                <span className="shrink-0 text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full self-start">{c.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclus dans la formation */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Ce qui est inclus</h2>
          <div className="space-y-3">
            {[
              { icon: <Video className="w-5 h-5" />, t: "15 modules vidéo", d: "5 heures de formation terrain — pas de théorie creuse." },
              { icon: <BookOpen className="w-5 h-5" />, t: "E-notebook interactif", d: "Votre carnet de formation numérique, clé par clé." },
              { icon: <CheckCircle className="w-5 h-5" />, t: "QCM après chaque clé", d: "Pour valider et ancrer chaque apprentissage." },
              { icon: <Users className="w-5 h-5" />, t: "Groupe WhatsApp d'accompagnement", d: "Suivi direct avec Samirra et la communauté." },
              ...(isPro ? [{ icon: <Award className="w-5 h-5" />, t: "Attestation de fin de formation", d: "Délivrée après validation de tous les modules et QCM." }] : []),
              { icon: <Gift className="w-5 h-5" />, t: "BONUS : Réflexe archaïque (valeur 47€)", d: "Vidéo 18 min. Identifier et dépasser ce réflexe qui bloque l'écriture." },
              { icon: <Gift className="w-5 h-5" />, t: "BONUS : Spécificités des gauchers (valeur 27€)", d: "Vidéo 13 min. Adapter la méthode aux enfants gauchers." },
              { icon: <MessageCircle className="w-5 h-5" />, t: "Compléments d'expertes", d: "Léa Helias Petraroli (orthophoniste), Laura-Marie (orthophoniste), Rajae Akrad (orthopédagogue)." },
              { icon: <Clock className="w-5 h-5" />, t: "Accès à vie", d: "24h/24, 7j/7. Mises à jour incluses." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4">
                <span className="text-[#E8892B] mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.t}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Ce qu'ils en disent</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 text-sm italic mb-3">"{t.texte}"</p>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.nom}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantie */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Garantie satisfait ou remboursé — 14 jours</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Regardez la Clé 1 et la Clé 2. Si après ça vous estimez que la formation ne vous convient pas, Samirra vous rembourse intégralement — sans condition, sans question posée. <strong>Votre seul risque, c'est de rater cette offre.</strong>
          </p>
          <p className="text-xs text-gray-400 mt-3 italic">— Samirra Trari, Graphopédagogue</p>
        </div>
      </section>

      {/* CTA milieu page */}
      <section className="py-12 px-4 bg-[#E8892B]">
        <div className="max-w-2xl mx-auto text-center text-white">
          <Zap className="w-8 h-8 mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl font-bold mb-1">Dernière chance — 48h seulement</h2>
          <p className="mb-2 opacity-90 text-sm">{pad(h)}h {pad(m)}m {pad(s)}s restants. Après ça, le tarif revient à {PRIX_BARRE}€.</p>
          <p className="mb-6 opacity-90 font-semibold text-lg">{PRIX_OFFRE}€ ou 2 × {PRIX_MENSUALITE}€ sans frais</p>
          <button onClick={handleCTAClick} className="inline-flex items-center gap-3 bg-white text-[#E8892B] font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            Je saisis cette dernière chance
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-4"><PaymentBadgesLight /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Vos questions</h2>
          <div className="space-y-3">
            {(isPro ? FAQ_PROS : FAQ_PARENTS).map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <Target className="w-10 h-10 text-[#E8892B] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isPro ? "Vous savez exactement quoi faire avec chacun de vos élèves." : `${enfantDisplay} peut progresser. Vous avez les clés.`}
          </h2>
          <p className="text-gray-500 text-sm mb-6">+5 500 enfants accompagnés · +1 500 professionnels formés · 5h de formation terrain</p>
          <button onClick={handleCTAClick} className="inline-flex items-center gap-3 bg-[#E8892B] hover:bg-[#d47a1e] text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 mb-3">
            Je saisis cette dernière chance — {PRIX_OFFRE}€
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-400 text-xs">
            <span className="line-through">{PRIX_BARRE}€</span> → <strong className="text-[#E8892B]">{PRIX_OFFRE}€</strong> ou 2 × {PRIX_MENSUALITE}€ sans frais · Accès immédiat · Garantie 14 jours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-gray-400 text-xs">
        <img src={logo} alt="Trari Pédagogie" className="h-7 mx-auto mb-4 opacity-30" />
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <a href="/conditions-generales-de-vente" className="hover:text-gray-600">CGV</a>
          <a href="/politique-de-confidentialite" className="hover:text-gray-600">Confidentialité</a>
        </div>
        <p>© {new Date().getFullYear()} Samirra Trari — Trari Pédagogie</p>
      </footer>

      <ChatWidget persona={isPro ? "pro" : "parent"} />

      {/* Exit-intent feedback popup */}
      {showExitIntent && <ExitIntentPopup onClose={closeExitIntent} persona={persona} />}
    </div>
  );
}

