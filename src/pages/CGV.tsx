import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CGV = () => (
  <div className="min-h-screen bg-background text-foreground">
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
      </Link>

      <h1 className="text-3xl font-bold mb-2">Conditions Générales de Vente</h1>
      <p className="text-muted-foreground mb-8">ST ACCOMPAGNEMENT — Organisme de formation</p>

      <div className="prose prose-sm max-w-none text-foreground space-y-6">
        <p>
          Les présentes Conditions Générales de Vente (CGV) s'appliquent à l'ensemble des prestations de formation dispensées par ST ACCOMPAGNEMENT, organisme de formation déclaré sous le numéro 11 75 71439 75, enregistré auprès du Préfet de la Région Ile-de-France, dont le siège social est situé 78 Avenue des Champs Élysées, 75008 Paris, SIRET : 982 864 076 00012 ci-après dénommé "l'Organisme de Formation".
        </p>
        <p>Tout achat ou inscription à une formation implique l'adhésion entière et sans réserve du Bénéficiaire ou du Stagiaire aux présentes CGV.</p>
        <p>Ces CGV sont mises à disposition du Bénéficiaire avant toute inscription et peuvent être consultées à tout moment sur demande ou sur le site internet de ST ACCOMPAGNEMENT.</p>
        <p className="italic">TVA non applicable, article 261-4-4 du CGI.</p>

        <h2 className="text-xl font-semibold mt-8">2. Objet</h2>
        <p>Les présentes CGV définissent les conditions de vente et de réalisation des actions de formation professionnelle, en conformité avec les dispositions légales applicables, notamment :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Article L. 6353-1 et suivants du Code du Travail</li>
          <li>Article L. 6354-1 du Code du Travail</li>
          <li>Article L. 6353-5 du Code du Travail</li>
          <li>Articles L. 221-18 et suivants du Code de la Consommation</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">3. Inscription et accès à la formation</h2>

        <h3 className="text-lg font-medium mt-4">3.1 Modalités d'inscription</h3>
        <p><strong>3.1.a. Présentiel</strong></p>
        <p>L'inscription à une formation s'effectue par la signature :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>D'une Convention de Formation pour les personnes morales (entreprises, administrations) ;</li>
          <li>D'un Contrat de Formation pour les particuliers (article L.6353-3 du Code du Travail).</li>
        </ul>

        <p><strong>3.1.b. E-learning (formation à distance, accès en ligne)</strong></p>
        <p>L'inscription en ligne emporte acceptation des CGV. Un contrat récapitulatif est adressé automatiquement "pour information" (aucun retour signé n'est requis). L'accès à la plateforme vaut conclusion du contrat et déclenche le démarrage de la prestation.</p>

        <h3 className="text-lg font-medium mt-4">3.2 Accès à la formation</h3>
        <p>L'accès à la formation est conditionné par :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Le règlement des frais de formation selon les modalités précisées à l'article 4 ;</li>
          <li>Le stagiaire est invité à se munir de tout support lui permettant de prendre des notes.</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">3.3 Accès au groupe WhatsApp (formations e-learning uniquement)</h3>
        <p>Les stagiaires inscrits à une formation au format e-learning bénéficient d'un accès à un groupe WhatsApp dédié, permettant :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>D'échanger avec le formateur et les autres participants ;</li>
          <li>De poser des questions et obtenir des compléments d'informations ;</li>
          <li>De partager des retours d'expérience et des ressources pédagogiques.</li>
        </ul>
        <p>L'accès à ce groupe est exclusivement réservé aux participants de la session en cours. L'Organisme de Formation se réserve le droit d'exclure un participant du groupe en cas de non-respect des règles de bienveillance et de confidentialité mentionnées dans le règlement intérieur.</p>

        <h3 className="text-lg font-medium mt-4">3.4 Accessibilité</h3>
        <p>ST ACCOMPAGNEMENT s'engage à rendre ses formations accessibles aux personnes en situation de handicap. Si vous avez des besoins spécifiques en matière d'accessibilité, veuillez nous contacter au plus tard 15 jours avant le début de la formation afin que nous puissions étudier les adaptations nécessaires et mettre en place les mesures appropriées, dans le respect de la législation en vigueur.</p>

        <h3 className="text-lg font-medium mt-4">3.5 RGPD et réutilisation des avis</h3>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), ST ACCOMPAGNEMENT s'engage à assurer la confidentialité et la sécurité de vos données personnelles. Les informations recueillies lors de votre inscription et de votre participation à la formation sont nécessaires au traitement de votre dossier et à la gestion administrative et pédagogique de la formation.</p>
        <p>
          Vos données seront conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées. Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, veuillez nous contacter par e-mail à l'adresse{" "}
          <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>.
        </p>
        <p>Les retours laissés via les questionnaires de satisfaction, le groupe WhatsApp ou tout autre canal de communication associé à la formation pourront être réutilisés à des fins de communication (réseaux sociaux, site internet, documents de présentation). Ces témoignages pourront être diffusés de manière anonyme ou signée, sauf opposition explicite de votre part.</p>

        <h3 className="text-lg font-medium mt-4">3.6 Obtention du certificat de réalisation</h3>
        <p><strong>Formations en e-learning</strong></p>
        <p>Pour obtenir votre certificat de réalisation à l'issue de la formation en ligne, trois étapes sont indispensables :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Regarder chaque vidéo dans l'ordre proposé et cliquer sur le bouton « Valider » sous chaque contenu une fois visionné ;</li>
          <li>Réaliser les QCM à la fin de chaque module ;</li>
          <li>Compléter le questionnaire de satisfaction à la fin de la formation.</li>
        </ul>
        <p><strong>Formations en présentiel ou en visioconférence</strong></p>
        <p>Le certificat de réalisation est délivré uniquement après que l'apprenant a rempli le questionnaire de satisfaction.</p>

        <h2 className="text-xl font-semibold mt-8">4. Prix et modalités de paiement</h2>

        <h3 className="text-lg font-medium mt-4">4.1 Tarifs</h3>
        <p>Les tarifs des formations sont exprimés en euros et s'entendent hors taxes et toutes taxes comprises. Ils incluent les frais pédagogiques, les supports de formation et l'accès aux plateformes en ligne.</p>
        <p className="italic">TVA non applicable selon l'article 261-4-4 du Code général des impôts.</p>

        <h3 className="text-lg font-medium mt-4">4.2 Conditions de paiement</h3>
        <p><strong>4.2.a. Formations synchrones (présentiel ou visioconférence)</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Point de départ : à la date de signature du contrat, s'ouvre un délai légal de rétractation de 10 jours (contrat signé en présence) ou de 14 jours (contrat conclu à distance).</li>
          <li>À l'issue du délai de rétractation : un acompte de 30 % du prix TTC devient exigible et confirme l'inscription.</li>
          <li>Moyens de paiement : virement bancaire ou PayPal.</li>
          <li>Remise des livrables : la facture définitive, les supports et le certificat de réalisation sont remis après enregistrement du solde.</li>
          <li>Défaut de règlement : en l'absence de solde le jour J, l'organisme peut refuser la participation ou différer la remise des livrables jusqu'à régularisation.</li>
        </ul>

        <p><strong>4.2.b. Formations e-learning (asynchrones)</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Paiement à l'inscription : règlement intégral TTC par virement bancaire ou PayPal, avec acceptation des CGV et du règlement intérieur.</li>
          <li>Accès à la plateforme : ouverture immédiate après encaissement et acceptation des conditions.</li>
          <li>Facturation : la facture est disponible dans l'espace personnel.</li>
          <li>Certificat de réalisation : délivré après achèvement du parcours et complétude du questionnaire de satisfaction.</li>
          <li>Paiement en plusieurs fois (si proposé) : tout retard de paiement rend immédiatement exigible le solde restant dû et peut entraîner la suspension de l'accès.</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">4.3 Retard ou défaut de paiement</h3>
        <p>En cas de retard de paiement, une pénalité de retard sera appliquée conformément à l'article L. 441-10 du Code de commerce. Cette pénalité est égale à trois fois le taux d'intérêt légal en vigueur.</p>

        <h2 className="text-xl font-semibold mt-8">5. Droit de rétractation (vente à distance - particuliers uniquement)</h2>

        <h3 className="text-lg font-medium mt-4">5.1 Principe</h3>
        <p>Conformément à l'article L221-18 du Code de la consommation, le stagiaire (particulier) dispose d'un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans motif ni pénalité.</p>

        <h3 className="text-lg font-medium mt-4">5.2 Modalités d'exercice</h3>
        <p>
          La rétractation doit être notifiée par écrit (courrier ou e-mail) à :{" "}
          <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>. Un accusé de réception est adressé au stagiaire.
        </p>

        <h3 className="text-lg font-medium mt-4">5.3 Démarrage avant l'expiration des 14 jours</h3>
        <p><strong>Synchrone (présentiel/visioconférence) :</strong> Si la session débute avant la fin du délai de 14 jours avec l'accord exprès du stagiaire, celui-ci reconnaît renoncer à son droit de rétractation pour la prestation exécutée.</p>
        <p><strong>E-learning (accès en ligne) :</strong> L'accès immédiat à la plateforme à la demande du stagiaire emporte exécution anticipée et renonciation au droit de rétractation pour la partie du service déjà exécutée.</p>

        <h3 className="text-lg font-medium mt-4">5.4 Effets</h3>
        <p>En cas de rétractation dans le délai légal et hors exécution anticipée, les sommes éventuellement perçues sont remboursées dans les conditions légales applicables.</p>

        <h2 className="text-xl font-semibold mt-8">6. Conditions d'annulation et de report</h2>

        <h3 className="text-lg font-medium mt-4">6.1 Annulation par le stagiaire ou le bénéficiaire</h3>
        <p>Toute annulation doit être communiquée par écrit à <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Plus de 10 jours avant le début de la formation : remboursement intégral.</li>
          <li>Moins de 10 jours avant le début de la formation : facturation de 50 % du montant total.</li>
          <li>Moins de 5 jours avant : facturation de 100 % du montant total.</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">6.2 Annulation ou report par ST ACCOMPAGNEMENT</h3>
        <p>En cas d'annulation par l'organisme de formation, le stagiaire pourra choisir :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Un report sur une autre session ;</li>
          <li>Un remboursement intégral dans un délai de 14 jours.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">7. Modalités de remboursement — Garantie "satisfait ou remboursé"</h2>
        <p>Dans le cadre de la formation "15 clés pour transformer l'écriture des enfants en 10 minutes par jour - V2" et "Tous les secrets d'une graphopédagogue pour une rentrée réussie - V2", une garantie "satisfait ou remboursé" est offerte.</p>

        <h3 className="text-lg font-medium mt-4">7.1 Conditions de remboursement</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Le stagiaire a 14 jours après la date d'achat pour tester la formation en visionnant exclusivement les Clé n°1 et Clé n°2 pour le parcours "15 clés pour transformer l'écriture des enfants en 10 minutes par jour - V2" et les modules Présentation, introduction, TPS et PS pour le parcours "Tous les secrets d'une graphopédagogue pour une rentrée réussie - V2".</li>
          <li>La demande doit être motivée et transmise par e-mail à <a href="mailto:staccompagnement@gmail.com" className="text-primary hover:underline">staccompagnement@gmail.com</a> avant la fin du délai.</li>
          <li>Si la demande est acceptée, le remboursement sera effectué sous 14 jours ouvrés.</li>
        </ul>

        <h3 className="text-lg font-medium mt-4">7.2 Exclusion du remboursement</h3>
        <p>Aucun remboursement ne sera accordé si :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Le stagiaire a visionné plus de 3 vidéos ;</li>
          <li>La demande est formulée après le délai de 14 jours ;</li>
          <li>Le stagiaire n'a pas respecté la procédure décrite ci-dessus.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">8. Responsabilité et propriété intellectuelle</h2>
        <p>Les supports pédagogiques restent la propriété exclusive de ST ACCOMPAGNEMENT et toute reproduction sans autorisation est interdite (articles L. 122-4 et L. 335-2 du Code de la Propriété Intellectuelle).</p>

        <h2 className="text-xl font-semibold mt-8">9. Litiges et médiation</h2>
        <p>En cas de litige, les parties s'engagent à rechercher une solution amiable.</p>
        <p>Conformément à l'article L. 612-1 du Code de la Consommation, le stagiaire peut saisir un médiateur de la consommation en cas de différend non résolu avec l'organisme.</p>
        <p>À défaut d'accord, le litige sera porté devant le Tribunal Judiciaire de Paris.</p>
        <div className="bg-muted/50 p-4 rounded-lg mt-4">
          <p className="font-medium">Centre de Médiation :</p>
          <p>MCP Médiation<br />
          Philippe Trémain – Gérant<br />
          Médiation de la Consommation & Patrimoine<br />
          12 square Desnouettes, 75015 Paris<br />
          Tél. : 01 40 61 03 33<br />
          <a href="https://www.mcpmediation.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.mcpmediation.org</a><br />
          Entité référencée par la CECMC</p>
        </div>

        <h2 className="text-xl font-semibold mt-8">10. Acceptation des conditions générales</h2>
        <p>L'inscription à une formation implique l'acceptation pleine et entière des présentes CGV.</p>
        <p className="mt-4 font-medium">Samirra TRARI, Directrice et formatrice de ST ACCOMPAGNEMENT</p>
      </div>
    </div>
  </div>
);

export default CGV;
