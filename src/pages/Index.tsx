import photoSamirra from "@/assets/photo-samirra.png";
import avantApresEric from "@/assets/avant-apres-eric.png";
import avantApresLyla from "@/assets/avant-apres-lyla.png";
import avantApresMarceau from "@/assets/avant-apres-marceau.png";
import avantApresLouka from "@/assets/avant-apres-louka.png";
import logo from "@/assets/pedagogie_noir.svg";
import { Star, CheckCircle, Play, BookOpen, Award, Users, Video, FileText, MessageCircle, Gift, Lock, ArrowRight } from "lucide-react";

const CTA_URL = "https://samirratrari.podia.com/15-cles-pour-transformer-l-ecriture-des-enfants-en-10-min-jour-v2/buy";

const CtaButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CTA_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl hover:-translate-y-0.5 ${className}`}
  >
    Accéder à la formation
    <ArrowRight className="h-5 w-5" />
  </a>
);

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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
      <nav className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="Trari Pédagogie" className="h-7" />
          <p className="text-xs text-muted-foreground hidden sm:block">
            +5 500 enfants accompagnés • +1 500 professionnels formés
          </p>
        </div>
      </nav>

      {/* SECTION 1 — Bonne nouvelle */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 mb-8">
            <CheckCircle className="h-5 w-5 text-success" />
            <span className="text-sm font-medium text-success">Diagnostic complété</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Bonne nouvelle.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Les réponses que tu as données montrent que la méthode peut vraiment aider ton enfant.
          </p>
          <div className="h-px w-16 bg-primary/30 mx-auto my-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Les difficultés d'écriture que tu observes sont très fréquentes chez les enfants.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mt-3">
            Dans la majorité des cas, elles viennent simplement d'un geste d'écriture qui ne s'est pas installé correctement.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Autorité */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0">
              <img
                src={photoSamirra}
                alt="Samirra Trari, graphopédagogue"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-background"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg leading-relaxed text-foreground/90">
                Depuis plus de 15 ans, j'accompagne des enfants dans leur développement et leur confiance.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                En graphopédagogie, j'ai déjà accompagné plus de <strong className="text-primary">5 500 enfants</strong> et formé plus de <strong className="text-primary">1 500 professionnels</strong>.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                Mon objectif est simple : aider les enfants à retrouver une écriture fluide, lisible et sans douleur.
              </p>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">
                — Samirra Trari, graphopédagogue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VSL */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
            Découvre la méthode en vidéo
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto">
            Samirra t'explique comment fonctionne la méthode et pourquoi elle donne des résultats concrets.
          </p>
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ paddingBottom: "56.25%" }}>
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

      {/* CTA 1 */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <CtaButton />
        </div>
      </section>

      {/* SECTION 4 — Avant / Après */}
      <section className="py-16 md:py-20 bg-card">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
            Des résultats concrets
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Voici l'évolution de l'écriture de quelques enfants accompagnés par la méthode.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { src: avantApresEric, alt: "Avant/Après écriture d'Éric, 15 ans" },
              { src: avantApresLyla, alt: "Avant/Après écriture de Lyla, CE2" },
              { src: avantApresMarceau, alt: "Avant/Après écriture de Marceau, CM1" },
              { src: avantApresLouka, alt: "Avant/Après écriture de Louka, CE2" },
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Témoignages */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
            Ce qu'en disent les parents
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Avis vérifiés de parents et professionnels ayant suivi la formation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <StarRating />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                  Avis vérifié
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Présentation de la méthode */}
      <section className="py-16 md:py-20 bg-card">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
            La méthode <span className="text-primary">"15 clés pour transformer l'écriture des enfants en 10 minutes par jour"</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
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
              <div key={i} className="flex items-center gap-3 rounded-lg bg-background p-4 text-left">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Contenu de la formation */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
            Ce que contient la formation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Video className="h-5 w-5 text-primary" />, text: "63 vidéos courtes" },
              { icon: <Play className="h-5 w-5 text-primary" />, text: "Capsules de 5 à 10 minutes" },
              { icon: <FileText className="h-5 w-5 text-primary" />, text: "Un livret de formation" },
              { icon: <Award className="h-5 w-5 text-primary" />, text: "Une attestation de formation" },
              { icon: <MessageCircle className="h-5 w-5 text-primary" />, text: "Un groupe WhatsApp d'entraide" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <div className="shrink-0 rounded-full bg-primary/10 p-2.5">
                  {item.icon}
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Bonus */}
      <section className="py-12 bg-primary/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Gift className="h-5 w-5 text-accent" />
            <span className="font-semibold text-accent text-sm uppercase tracking-wide">Bonus inclus</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="rounded-lg border border-accent/20 bg-card p-5 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-medium text-foreground">Module sur le réflexe d'agrippement</p>
            </div>
            <div className="rounded-lg border border-accent/20 bg-card p-5 flex-1 max-w-xs mx-auto sm:mx-0">
              <p className="font-medium text-foreground">Module spécifique pour les enfants gauchers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 & 10 — Prix & Accès */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Rejoins la formation aujourd'hui
          </h2>
          <div className="rounded-2xl border-2 border-primary/20 bg-card p-8 md:p-10 shadow-lg">
            <p className="text-muted-foreground line-through text-lg mb-1">592 €</p>
            <p className="text-5xl md:text-6xl font-bold text-primary mb-2">296 €</p>
            <p className="text-sm text-muted-foreground mb-6">
              Paiement en une fois ou en deux fois
            </p>
            <CtaButton className="w-full justify-center" />
            <div className="mt-6 flex flex-col gap-2">
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
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Prête à transformer l'écriture de ton enfant ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
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
