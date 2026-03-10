import photoSamirra from "@/assets/photo-samirra.png";
import avantApresEric from "@/assets/avant-apres-eric.png";
import avantApresLyla from "@/assets/avant-apres-lyla.png";
import avantApresMarceau from "@/assets/avant-apres-marceau.png";
import avantApresLouka from "@/assets/avant-apres-louka.png";
import logo from "@/assets/pedagogie_noir.svg";
import { Star, CheckCircle, Video, FileText, Award, MessageCircle, Gift, Lock, ArrowRight, ChevronDown, Play } from "lucide-react";

const CTA_URL = "https://samirratrari.podia.com/15-cles-pour-transformer-l-ecriture-des-enfants-en-10-min-jour-v2/buy";

const CtaButton = ({ className = "", variant = "default" }: { className?: string; variant?: "default" | "hero" }) => (
  <a
    href={CTA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110 ${className}`}
  >
    Accéder à la formation
    <ArrowRight className="h-4 w-4" />
  </a>
);

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const testimonials = [
  {
    name: "Manssour Samia",
    text: "Une expérience immersive et structurante. Cette formation a parfaitement répondu à mes attentes en faisant le pont entre théorie et réalité de terrain. C'est un investissement personnel dont je mesure déjà les bénéfices dans l'accompagnement de mes enfants.",
  },
  {
    name: "Rongvaux Ingrid",
    text: "Sa clarté, son efficacité, sa structure claire et sa richesse en enseignement. C'était fabuleux, j'ai rarement vu une formation si complète et enrichissante.",
  },
  {
    name: "Grapin Alexandra",
    text: "Formation très complète et bien structurée. Les différents thèmes sont abordés de manière claire et cohérente, avec des informations précises et approfondies. Les conseils proposés sont concrets, pertinents et directement applicables.",
  },
  {
    name: "Balcon Blandine",
    text: "Les progressions selon l'âge, les outils à privilégier, les interventions des experts. Toutes ces formations devraient être proposées gratuitement par l'éducation nationale !",
  },
  {
    name: "Garraud Justine",
    text: "La formation est claire et bien structurée. La solution e-learning permet de visionner les vidéos quand on veut et quand on peut, et l'échange sur WhatsApp donne de nombreuses pistes supplémentaires. Samirra est toujours disponible et à l'écoute.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="bg-hero text-hero-foreground sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 py-3.5 flex items-center justify-between">
          <img src={logo} alt="Trari Pédagogie" className="h-7 brightness-0 invert" />
          <div className="flex items-center gap-4">
            <p className="text-xs text-hero-foreground/70 hidden sm:block">
              +5 500 enfants accompagnés &nbsp;•&nbsp; +1 500 professionnels formés
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 1 — Hero / Bonne nouvelle */}
      <section className="bg-hero text-hero-foreground py-20 md:py-32 relative">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-success/40 bg-success/10">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6">
            Bonne nouvelle : cette formation{" "}
            <span className="italic text-accent">correspond à ton profil.</span>
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/75 leading-relaxed mb-10 max-w-xl mx-auto">
            Les réponses que tu as données montrent que la méthode peut vraiment aider ton enfant.
          </p>
          <CtaButton />
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-6 w-6 mx-auto text-hero-foreground/40" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Autorité */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="shrink-0">
              <img
                src={photoSamirra}
                alt="Samirra Trari, graphopédagogue"
                className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Votre formatrice</p>
              <h2 className="text-3xl md:text-4xl leading-snug mb-6">
                Une méthode issue de plus de 15 ans d'accompagnement d'enfants
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                En graphopédagogie, j'ai déjà accompagné plus de <strong className="text-foreground">5 500 enfants</strong> et formé plus de <strong className="text-foreground">1 500 professionnels</strong>.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Mon objectif est simple : aider les enfants à retrouver une écriture fluide, lisible et sans douleur.
              </p>
              <p className="mt-5 text-sm font-medium text-foreground">
                — Samirra Trari, graphopédagogue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VSL */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-3">
            Découvre la méthode en vidéo
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
            Samirra t'explique comment fonctionne la méthode et pourquoi elle donne des résultats concrets.
          </p>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-foreground/5" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/v_fGvVDtA7o?rel=0&modestbranding=1&controls=1"
              title="Présentation de la méthode"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — Avant / Après */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-3">
            Des résultats concrets
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Voici l'évolution de l'écriture de quelques enfants accompagnés par la méthode.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { src: avantApresEric, alt: "Avant/Après écriture d'Éric, 15 ans" },
              { src: avantApresLyla, alt: "Avant/Après écriture de Lyla, CE2" },
              { src: avantApresMarceau, alt: "Avant/Après écriture de Marceau, CM1" },
              { src: avantApresLouka, alt: "Avant/Après écriture de Louka, CE2" },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA mid-page */}
      <section className="py-10 bg-card">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <CtaButton />
        </div>
      </section>

      {/* SECTION 5 — Témoignages (Google-style) */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-3">
            Ce qu'en disent les parents
          </h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <StarRating />
            <span className="text-sm text-muted-foreground ml-1">5/5 — Avis vérifiés</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-6 flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <StarRating />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  <svg className="h-3.5 w-3.5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Avis Google
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Présentation de la méthode */}
      <section className="py-16 md:py-24 bg-hero text-hero-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 leading-snug">
            La méthode{" "}
            <span className="text-accent italic">"15 clés pour transformer l'écriture des enfants en 10 min/jour"</span>
          </h2>
          <p className="text-hero-foreground/70 mb-12 max-w-xl mx-auto">
            Une méthode structurée basée sur l'expérience de terrain et les principes de la graphopédagogie.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "🧍", label: "La posture" },
              { icon: "✏️", label: "La tenue du crayon" },
              { icon: "💨", label: "La fluidité du geste" },
              { icon: "🧠", label: "Les réflexes archaïques" },
              { icon: "🤲", label: "La coordination du mouvement" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10 p-4 text-left">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-hero-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Contenu de la formation */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Ce que contient la formation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Video className="h-5 w-5" />, text: "63 vidéos courtes" },
              { icon: <Play className="h-5 w-5" />, text: "Capsules de 5 à 10 minutes" },
              { icon: <FileText className="h-5 w-5" />, text: "Un livret de formation" },
              { icon: <Award className="h-5 w-5" />, text: "Une attestation de formation" },
              { icon: <MessageCircle className="h-5 w-5" />, text: "Un groupe WhatsApp d'entraide" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                <div className="shrink-0 rounded-full bg-accent/10 p-3 text-accent">
                  {item.icon}
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Bonus */}
      <section className="py-14 bg-accent/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Gift className="h-5 w-5 text-accent" />
            <span className="font-semibold text-accent text-sm uppercase tracking-widest">Bonus inclus</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="rounded-xl border border-accent/20 bg-background p-6 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-medium text-foreground">Module sur le réflexe d'agrippement</p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-background p-6 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-medium text-foreground">Module spécifique pour les enfants gauchers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 & 10 — Prix & Accès */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-lg px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-10">
            Rejoins la formation aujourd'hui
          </h2>
          <div className="rounded-2xl border-2 border-accent/30 bg-background p-8 md:p-12 shadow-xl">
            <p className="text-muted-foreground line-through text-lg mb-1">592 €</p>
            <p className="text-5xl md:text-6xl font-bold text-accent mb-1">296 €</p>
            <p className="text-sm text-muted-foreground mb-8">
              Paiement en une fois ou en deux fois
            </p>
            <CtaButton className="w-full justify-center" />
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                Paiement sécurisé
              </div>
              <p className="text-sm text-success font-medium">
                ✓ Accès immédiat après inscription
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-hero text-hero-foreground">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Prête à transformer l'écriture de ton enfant ?
          </h2>
          <p className="text-hero-foreground/65 mb-10 max-w-md mx-auto">
            Rejoins les milliers de parents qui ont déjà fait confiance à la méthode.
          </p>
          <CtaButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Samirra Trari — Graphopédagogie</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
