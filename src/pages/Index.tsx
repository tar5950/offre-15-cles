import ChatWidget from "@/components/ChatWidget";
import photoSamirra from "@/assets/photo-samirra.jpg";
import avantApresEric from "@/assets/avant-apres-eric.png";
import avantApresLyla from "@/assets/avant-apres-lyla.png";
import avantApresMarceau from "@/assets/avant-apres-marceau.png";
import avantApresLouka from "@/assets/avant-apres-louka.png";
import logo from "@/assets/pedagogie_noir.svg";
import { Star, CheckCircle, Video, FileText, Award, MessageCircle, Gift, Lock, ArrowRight, ChevronDown, Play, ShieldCheck, X, Heart, BookOpen, Brain, Users, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const CTA_URL = "https://samirratrari.podia.com/15-cles-pour-transformer-l-ecriture-des-enfants-en-10-min-jour-v2-offre-speciale/buy";

const handleCTAClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', { value: 296, currency: 'EUR', content_name: '15 Clés Parents' });
  }
};

const PAIN_HOOKS: Record<string, { h1: (enfant: string) => string; sub: (enfant: string) => string }> = {
  douleur: {
    h1: (e) => `l'écriture de ${e || "ton enfant"} n'a pas à être douloureuse.`,
    sub: (e) => `La douleur en écrivant n'est pas une fatalité. Elle vient d'un geste graphique qui ne s'est pas bien installé. En 10 minutes par jour, ${e || "ton enfant"} peut retrouver un geste fluide et sans effort.`,
  },
  lenteur: {
    h1: (e) => `${e || "Ton enfant"} peut écrire à la vitesse de sa pensée.`,
    sub: (e) => `La lenteur cache souvent un geste qui demande trop d'effort. Les 15 Clés libèrent ce frein en travaillant sur la vraie cause, pas les symptômes.`,
  },
  tenue: {
    h1: (e) => `la tenue du stylo de ${e || "ton enfant"}, ça s'apprend. Et ça change tout.`,
    sub: (e) => `Une mauvaise tenue n'est jamais définitive. Avec les bons exercices, ${e || "ton enfant"} peut retrouver un geste naturel, confortable et durable.`,
  },
  pleurs: {
    h1: (e) => `${e || "Ton enfant"} n'est pas nul. Il lui manque juste les bons gestes.`,
    sub: (e) => `Le découragement vient souvent d'un enfant qui travaille dur sans résultat. Pas d'une incapacité. La méthode s'attaque à la vraie cause, pas à la motivation.`,
  },
  illegible: {
    h1: (e) => `l'écriture de ${e || "ton enfant"} peut devenir claire et lisible.`,
    sub: (e) => `Une écriture illisible n'est pas une question d'intelligence ou de soin. C'est un geste graphique qui s'est mal ancré. Et ça se corrige avec la bonne progression.`,
  },
  gaucher: {
    h1: (e) => `être gaucher est un atout. Avec les bons repères.`,
    sub: (e) => `Les gauchers ont besoin d'une approche différente. La méthode des 15 Clés inclut un module entier dédié pour accompagner ${e || "ton enfant"} sans le forcer et sans l'inhiber.`,
  },
  pression: {
    h1: (e) => `${e || "Ton enfant"} appuie trop fort ? C'est un signal, pas un défaut.`,
    sub: (e) => `Une pression excessive révèle une tension dans le geste graphique. Les 15 Clés travaillent la détente musculaire et le relâchement pour que l'écriture devienne légère.`,
  },
  default: {
    h1: (e) => `les difficultés de ${e || "ton enfant"} ont une solution concrète.`,
    sub: (e) => `D'après tes réponses, la méthode des 15 Clés peut aider ${e || "ton enfant"} à retrouver une écriture fluide, sans douleur, en 10 minutes par jour à la maison.`,
  },
};

const CtaButton = ({ className = "", enfantName = "" }: { className?: string; enfantName?: string }) => (
  <a href={CTA_URL} target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}
    className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110 ${className}`}>
    {enfantName ? `Je transforme l'écriture de ${enfantName}` : "Je transforme l'écriture de mon enfant"}
    <ArrowRight className="h-4 w-4" />
  </a>
);

const ScarcityBadge = () => (
  <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 border border-destructive/20 px-4 py-1.5 text-sm font-medium text-destructive">
    <Clock className="h-4 w-4" />Offre limitée
  </div>
);

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
  </div>
);

const testimonials = [
  { name: "Manssour Samia", text: "Une expérience immersive et structurante. Cette formation a parfaitement répondu à mes attentes en faisant le pont entre théorie et réalité de terrain. C'est un investissement personnel dont je mesure déjà les bénéfices dans l'accompagnement de mes enfants." },
  { name: "Rongvaux Ingrid", text: "Sa clarté, son efficacité, sa structure claire et sa richesse en enseignement. C'était fabuleux, j'ai rarement vu une formation si complète et enrichissante." },
  { name: "Grapin Alexandra", text: "Formation très complète et bien structurée. Les différents thèmes sont abordés de manière claire et cohérente, avec des informations précises et approfondies. Les conseils proposés sont concrets, pertinents et directement applicables." },
  { name: "Balcon Blandine", text: "Les progressions selon l'âge, les outils à privilégier, les interventions des experts. Toutes ces formations devraient être proposées gratuitement par l'éducation nationale !" },
  { name: "Garraud Justine", text: "La formation est claire et bien structurée. La solution e-learning permet de visionner les vidéos quand on veut et quand on peut, et l'échange sur WhatsApp donne de nombreuses pistes supplémentaires. Samirra est toujours disponible et à l'écoute." },
];

const keys = [
  { title: "Les constats", desc: "Comprends les défis courants de l'écriture chez les enfants et apprends à les repérer au quotidien." },
  { title: "Quand et par quoi commencer", desc: "Sais quand intervenir et par quoi commencer pour aider ton enfant efficacement." },
  { title: "La latéralisation", desc: "Comprends l'importance de la latéralisation et comment identifier la main dominante de ton enfant." },
  { title: "Les réflexes archaïques", desc: "Découvre le lien entre les réflexes archaïques et les difficultés d'écriture de ton enfant." },
  { title: "Bonus : réflexe d'agrippement", desc: "Comprends comment le réflexe d'agrippement peut affecter la tenue du crayon et l'écriture." },
  { title: "La posture", desc: "Apprends les bonnes pratiques pour installer une posture d'écriture confortable à la maison." },
  { title: "Les prérequis pour une écriture indolore", desc: "Mets en place les bases pour que ton enfant écrive sans douleur ni fatigue." },
  { title: "La tenue de crayon", desc: "Aide ton enfant à bien tenir son crayon avec les bonnes techniques." },
  { title: "L'inclinaison du support", desc: "Apprends comment incliner le cahier pour faciliter l'écriture de ton enfant." },
  { title: "Le déplacement de l'avant-bras", desc: "Comprends comment le mouvement de l'avant-bras rend l'écriture plus fluide." },
  { title: "Le tracé des lettres", desc: "Accompagne ton enfant pour un tracé des lettres fluide et lisible." },
  { title: "Les formes de base", desc: "Comprends comment les lettres se forment à partir de gestes simples." },
  { title: "Quelques règles d'écriture", desc: "Intègre des règles simples pour améliorer la lisibilité de l'écriture de ton enfant." },
  { title: "Partir du geste", desc: "Utilise le mouvement naturel du corps pour aider ton enfant à écrire avec fluidité." },
  { title: "Les supports", desc: "Choisis les cahiers et supports les plus adaptés selon l'âge de ton enfant." },
  { title: "Les outils scripteurs", desc: "Trouve les crayons et stylos les mieux adaptés pour ton enfant." },
];

const KeyItem = ({ num, title, desc }: { num: number; title: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left rounded-xl border border-border bg-background p-4 md:p-5 transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{num}</span>
        <span className="font-medium text-foreground flex-1">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-[52px]">{desc}</p>}
    </button>
  );
};

const LockedVideoPlayer = ({ videoId, title }: { videoId: string; title: string }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black" style={{ paddingBottom: "56.25%" }}>
      {playing ? (
        <>
          <iframe className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&autoplay=1&showinfo=0&iv_load_policy=3`}
            title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-presentation" />
          <div className="absolute top-0 left-0 right-0 h-16 z-10" />
          <div className="absolute bottom-0 right-0 w-40 h-20 z-10" />
        </>
      ) : (
        <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full z-10 flex items-center justify-center bg-black group cursor-pointer">
          <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent/90 shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  );
};


const FAQ_ITEMS = [
  { q: "Est-ce que je dois être spécialiste pour suivre cette formation ?", a: "Non. La formation a été conçue pour les parents, sans prérequis. Tout est expliqué étape par étape en vidéo." },
  { q: "Combien de temps faut-il consacrer par jour ?", a: "10 minutes par jour suffisent pour faire les exercices avec ton enfant. Les vidéos sont courtes et regardables à ton rythme, quand tu veux." },
  { q: "À partir de quel âge ça fonctionne ?", a: "La méthode est adaptée aux enfants de 4 à 15 ans. Chaque clé précise l'âge recommandé." },
  { q: "Est-ce que ça marche pour les gauchers ?", a: "Oui. La formation inclut un module entier dédié aux gauchers, avec des exercices spécifiques." },
  { q: "Et si la formation ne me convient pas ?", a: "Tu as 14 jours pour découvrir les deux premières clés. Si ce n'est pas ce qu'il te faut, je te rembourse intégralement. Sans question." },
  { q: "Comment est-ce que j'accède à la formation ?", a: "Après ton inscription, tu reçois un accès immédiat par email à la plateforme e-learning. Tu peux commencer dans les minutes qui suivent." },
  { q: "Est-ce que je peux poser des questions si je suis bloquée ?", a: "Oui. Tu rejoins un groupe WhatsApp privé où tu peux échanger avec Samirra et les autres parents formés." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left rounded-xl border border-border bg-background p-5 transition-all hover:shadow-md">
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium text-foreground text-sm md:text-base">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </button>
  );
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const prenom = useMemo(() => searchParams.get("prenom") || "", [searchParams]);
  const enfant = useMemo(() => searchParams.get("enfant") || "", [searchParams]);
  const pain = useMemo(() => searchParams.get("pain") || "default", [searchParams]);
  const hook = PAIN_HOOKS[pain] ?? PAIN_HOOKS.default;

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-hero text-hero-foreground sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 py-3.5 flex items-center justify-between">
          <img src={logo} alt="Trari Pédagogie" className="h-[41px] brightness-0 invert" />
          <p className="text-xs text-hero-foreground/70 hidden sm:block">+5 500 enfants accompagnés &nbsp;•&nbsp; +1 500 professionnels formés</p>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-20 md:py-32 relative">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-success/40 bg-success/10">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6">
            {prenom ? `Bonne nouvelle, ${prenom} :` : "Bonne nouvelle :"}{" "}
            <span className="italic text-accent">{hook.h1(enfant)}</span>
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            {hook.sub(enfant)}
          </p>
          <ScarcityBadge />
          <div className="mt-16 animate-bounce"><ChevronDown className="h-6 w-6 mx-auto text-hero-foreground/40" /></div>
        </div>
      </section>

      {/* Autorité */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="shrink-0">
              <img src={photoSamirra} alt="Samirra Trari, graphopédagogue" className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ta formatrice</p>
              <h2 className="text-3xl md:text-4xl leading-snug mb-6">Une méthode issue de plus de 15 ans d'accompagnement d'enfants</h2>
              <p className="text-base leading-relaxed text-muted-foreground">Depuis plus de 15 ans, j'accompagne des enfants dans leur développement et leur confiance. En graphopédagogie, j'ai développé une méthode structurée et éprouvée pour aider les enfants à retrouver une écriture fluide, lisible et sans douleur.</p>
              <p className="mt-4 text-sm font-medium text-foreground">— Samirra Trari, graphopédagogue</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto md:mx-0 md:ml-auto md:max-w-lg">
            {[{ value: "15+", label: "ans d'expérience" }, { value: "5 500+", label: "enfants accompagnés" }, { value: "1 500+", label: "professionnels formés" }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constat */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Le constat</p>
          <h2 className="text-3xl md:text-4xl mb-4">Pourquoi {enfant || "ton enfant"} rencontre des difficultés d'écriture ?</h2>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto">Très souvent, les difficultés d'écriture ne viennent pas d'un manque d'effort ou de motivation.</p>
          <p className="text-foreground font-medium mb-10">Elles viennent d'un geste graphique qui ne s'est pas installé correctement.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[{ icon: "🪑", label: "Posture" }, { icon: "🤲", label: "Coordination bras-poignet-main" }, { icon: "✏️", label: "Tenue du crayon" }, { icon: "💪", label: "Pression du stylo" }, { icon: "✍️", label: "Organisation du geste graphique" }].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 rounded-xl bg-background p-4 border ${pain === "tenue" && item.label === "Tenue du crayon" ? "border-accent bg-accent/5" : pain === "pression" && item.label === "Pression du stylo" ? "border-accent bg-accent/5" : pain === "posture" && item.label === "Posture" ? "border-accent bg-accent/5" : "border-border"}`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium text-foreground text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Pour qui ?</p>
          <h2 className="text-3xl md:text-4xl mb-10">Cette formation est faite pour toi si…</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { icon: <Heart className="h-6 w-6" />, text: "Ton enfant a du mal à écrire lisiblement ou se plaint de douleurs en écrivant", pains: ["douleur", "pression"] },
              { icon: <BookOpen className="h-6 w-6" />, text: "Tu veux l'aider à la maison avec des exercices simples et efficaces", pains: [] },
              { icon: <Brain className="h-6 w-6" />, text: "Tu cherches à comprendre d'où viennent ses difficultés d'écriture", pains: ["illegible", "lenteur"] },
              { icon: <Users className="h-6 w-6" />, text: "Tu veux être guidée pas à pas par une méthode éprouvée sur des milliers d'enfants", pains: [] },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-4 rounded-xl border p-5 text-left ${item.pains.includes(pain) ? "border-accent bg-accent/5" : "border-border bg-card"}`}>
                <div className={`shrink-0 rounded-full p-2.5 ${item.pains.includes(pain) ? "bg-accent text-white" : "bg-accent/10 text-accent"}`}>{item.icon}</div>
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VSL */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-3">Découvre la méthode en vidéo</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">Samirra t'explique comment fonctionne la méthode et pourquoi elle donne des résultats concrets.</p>
          <LockedVideoPlayer videoId="5xSzPJqBaJg" title="Présentation de la méthode" />
        </div>
      </section>

      <section className="py-10"><div className="mx-auto max-w-3xl px-4 text-center"><CtaButton enfantName={enfant} /></div></section>

      {/* Avant/Après */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Résultats</p>
          <h2 className="text-3xl md:text-4xl text-center mb-3">Des résultats visibles sur l'écriture</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">Voici l'évolution de l'écriture de quelques enfants accompagnés par la méthode.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[{ src: avantApresEric, alt: "Avant/Après — Éric — 15 ans", label: "Éric — 15 ans, 1ère" }, { src: avantApresLyla, alt: "Avant/Après — Lyla — CE2", label: "Lyla — CE2" }, { src: avantApresMarceau, alt: "Avant/Après — Marceau — CM1", label: "Marceau — CM1" }, { src: avantApresLouka, alt: "Avant/Après — Louka — CE2", label: "Louka — CE2" }].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-background">
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                <p className="text-center text-sm font-medium text-muted-foreground py-3">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preuve vidéo */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Preuve en vidéo</p>
          <h2 className="text-3xl md:text-4xl text-center mb-3">Regarde les résultats par toi-même</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">Une vidéo qui montre concrètement l'impact de la méthode sur l'écriture des enfants.</p>
          <LockedVideoPlayer videoId="pPn2V-jQUNg" title="Preuve vidéo" />
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Témoignages</p>
          <h2 className="text-3xl md:text-4xl text-center mb-3">Ce qu'en disent les parents</h2>
          <div className="flex items-center justify-center gap-2 mb-10"><StarRating /><span className="text-sm text-muted-foreground ml-1">5/5 — Avis vérifiés</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{t.name[0]}</div>
                  <div><p className="text-sm font-semibold text-foreground">{t.name}</p><StarRating /></div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground/60"><CheckCircle className="h-3.5 w-3.5" />Avis vérifié</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Le programme</p>
          <h2 className="text-3xl md:text-4xl text-center mb-12">Une formation claire et directement applicable</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[{ icon: <Video className="h-5 w-5" />, value: "63 vidéos", label: "Cours structurés étape par étape" }, { icon: <Play className="h-5 w-5" />, value: "5 à 10 min", label: "Format court et efficace" }, { icon: <Award className="h-5 w-5" />, value: "5h de formation", label: "Contenu dense et applicable" }, { icon: <FileText className="h-5 w-5" />, value: "Livret", label: "Support écrit complet" }, { icon: <Award className="h-5 w-5" />, value: "Certificat", label: "Attestation de fin de formation" }, { icon: <MessageCircle className="h-5 w-5" />, value: "Groupe WhatsApp", label: "Communauté d'entraide" }].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-5 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">{item.icon}</div>
                <p className="font-semibold text-foreground text-sm">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les clés */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Programme détaillé</p>
          <h2 className="text-3xl md:text-4xl text-center mb-3">Les clés de la méthode</h2>
          <p className="text-center text-muted-foreground mb-10">Clique sur une clé pour découvrir son contenu</p>
          <div className="flex flex-col gap-3">{keys.map((k, i) => <KeyItem key={i} num={i + 1} title={k.title} desc={k.desc} />)}</div>
        </div>
      </section>

      <section className="py-10 bg-card"><div className="mx-auto max-w-3xl px-4 text-center"><CtaButton enfantName={enfant} /></div></section>

      {/* Bonus */}
      <section className="py-16 md:py-24 bg-hero text-hero-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">En plus</p>
          <h2 className="text-3xl md:text-4xl mb-10">Bonus inclus dans la formation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[{ icon: <Gift className="h-5 w-5" />, title: "Module réflexe d'agrippement" }, { icon: <Gift className="h-5 w-5" />, title: "Module spécifique pour les enfants gauchers" }].map((b, i) => (
              <div key={i} className={`flex items-center gap-3 rounded-xl border p-5 text-left ${pain === "gaucher" && i === 1 ? "border-accent bg-accent/20" : "bg-hero-foreground/5 border-hero-foreground/10"}`}>
                <div className="shrink-0 text-accent">{b.icon}</div>
                <span className="text-sm font-medium text-hero-foreground">{b.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 p-6 max-w-xl mx-auto text-left">
            <h3 className="text-lg font-semibold mb-2">Groupe WhatsApp privé</h3>
            <p className="text-sm text-hero-foreground/70 leading-relaxed">Rejoins une communauté bienveillante de parents formés à la méthode. Échange tes questions, partage tes progrès et bénéficie du soutien du groupe au quotidien.</p>
          </div>
        </div>
      </section>

      {/* Ce que non */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Clarification</p>
          <h2 className="text-3xl md:text-4xl mb-10">Ce que cette formation n'est pas</h2>
          <div className="flex flex-col gap-4 max-w-md mx-auto mb-8">
            {["Une approche théorique difficile à appliquer", "Une méthode qui demande des heures d'exercices", "Une formation réservée uniquement aux spécialistes"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-left">
                <X className="h-5 w-5 text-destructive shrink-0" /><span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-base font-medium text-foreground">C'est une formation <strong>pratique, structurée et directement applicable à la maison</strong>.</p>
        </div>
      </section>

      {/* Garantie */}
      <section className="py-16 md:py-20 bg-card">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"><ShieldCheck className="h-8 w-8 text-success" /></div>
          <h2 className="text-3xl md:text-4xl mb-4">Garantie 14 jours</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Tu pourras découvrir les Clés 1 et 2 dès ton inscription.</p>
          <p className="text-muted-foreground leading-relaxed">Si la formation ne te convient pas, je m'engage à te rembourser l'intégralité de ton paiement dans un délai de 14 jours suivant ton inscription.</p>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-3">Questions fréquentes</p>
          <h2 className="text-3xl md:text-4xl text-center mb-10">Tu as des questions ?</h2>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* Prix */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-lg px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Prête à te lancer ?</p>
          <h2 className="text-3xl md:text-4xl mb-10">Accède à la formation complète</h2>
          <div className="rounded-2xl border-2 border-accent/30 bg-background p-8 md:p-12 shadow-xl">
            <div className="mb-4 flex justify-center"><ScarcityBadge /></div>
            <p className="text-muted-foreground line-through text-lg mb-1">592 €</p>
            <p className="text-5xl md:text-6xl font-bold text-accent mb-1">296 €</p>
            <p className="text-sm text-muted-foreground mb-2">Paiement en une fois ou en deux fois</p>
            <p className="text-xs text-muted-foreground mb-8">63 vidéos • 5h de formation • Livret inclus • Certificat • Garantie 14 jours</p>
            <CtaButton className="w-full justify-center" />
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><Lock className="h-4 w-4" />Paiement sécurisé</div>
              <p className="text-sm text-success font-medium">✓ Accès immédiat après inscription</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Tu as encore une question ?{" "}
              <a href="https://wa.me/33611901805" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:brightness-110 transition">Écris-moi sur WhatsApp 😄</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            {prenom ? `${prenom}, prête à transformer l'écriture ${enfant ? `de ${enfant}` : "de ton enfant"} ?` : "Prête à transformer l'écriture de ton enfant ?"}
          </h2>
          <p className="text-hero-foreground/65 mb-10 max-w-md mx-auto">Rejoins les milliers de parents qui ont déjà fait confiance à la méthode.</p>
          <CtaButton enfantName={enfant} />
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Samirra Trari — Graphopédagogie</p>
        </div>
      </footer>
      <ChatWidget persona="parent" />
    </div>
  );
};

export default Index;
