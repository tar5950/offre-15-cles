import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-muted-foreground mb-8">Mise à jour le 19 avril 2025</p>

      <div className="prose prose-sm max-w-none text-foreground space-y-6">
        <p>
          La présente politique de confidentialité vise à vous informer de la manière dont ST ACCOMPAGNEMENT, organisme de formation déclaré sous le numéro 11 75 71439 75 auprès du préfet de région d'Île-de-France, collecte, traite et protège vos données personnelles dans le cadre de ses activités, en conformité avec le Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679).
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données est :</p>
        <p>
          Samirra TRARI, directrice de ST ACCOMPAGNEMENT<br />
          SIRET : 982 864 076 00012<br />
          Contact : <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-8">2. Données collectées</h2>
        <p>Les données que nous collectons peuvent inclure :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>Nom de la formation suivie</li>
          <li>Réponses à des questionnaires (QCM, satisfaction)</li>
          <li>Adresse IP et données de navigation (via Podia)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">3. Finalités de la collecte</h2>
        <p>Vos données sont collectées pour les finalités suivantes :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gérer votre inscription à une formation</li>
          <li>Communiquer avec vous avant, pendant et après la formation</li>
          <li>Vous fournir un accès sécurisé à l'espace de formation Podia</li>
          <li>Vous délivrer une attestation ou un certificat de formation</li>
          <li>Répondre à vos demandes via formulaire ou e-mail</li>
          <li>Mesurer la satisfaction et améliorer nos prestations</li>
          <li>Partager, avec votre consentement, vos témoignages ou avis sur nos supports de communication</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">4. Destinataires des données</h2>
        <p>Vos données sont exclusivement destinées à :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>ST ACCOMPAGNEMENT</li>
          <li>Nos prestataires techniques (Podia, Google Forms, Gmail)</li>
          <li>Les éventuels financeurs de votre formation (sur demande)</li>
        </ul>
        <p>Elles ne sont ni cédées ni revendues à des tiers.</p>

        <h2 className="text-xl font-semibold mt-8">5. Durée de conservation</h2>
        <p>Vos données sont conservées pendant la durée nécessaire à la gestion administrative, pédagogique et comptable de la formation, soit :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Jusqu'à 5 ans pour les obligations liées à la formation professionnelle</li>
          <li>Jusqu'à 3 ans pour les fins de communication (avis, témoignages)</li>
          <li>Vous pouvez demander leur suppression à tout moment si la loi le permet</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">6. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification si elles sont inexactes ou incomplètes</li>
          <li>Droit à l'effacement ("droit à l'oubli")</li>
          <li>Droit d'opposition à certains traitements</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p>
          Pour exercer l'un de ces droits, envoyez votre demande à :{" "}
          <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-8">7. Sécurité des données</h2>
        <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles.</p>
        <p>Les plateformes que nous utilisons (Podia, Google, WhatsApp) respectent également les normes de sécurité requises par le RGPD.</p>

        <h2 className="text-xl font-semibold mt-8">8. Utilisation des avis à des fins de communication</h2>
        <p>Les retours exprimés via les questionnaires de satisfaction, le groupe WhatsApp, ou tout autre canal de communication lié à la formation peuvent être utilisés à des fins de communication (site internet, réseaux sociaux, présentations professionnelles), sous forme anonyme ou signée, sauf opposition explicite de votre part.</p>

        <h2 className="text-xl font-semibold mt-8">9. Contact</h2>
        <p>
          Pour toute question relative à cette politique ou à vos données personnelles :{" "}
          <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default PolitiqueConfidentialite;
