import { SEOHead } from "@/components/SEOHead";

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Mentions Légales — Odoc"
        description="Mentions légales du site Odoc, plateforme d'intelligence documentaire."
        canonical="/mentions-legales"
      />
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Mentions Légales</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        {/* TODO: Remplacer par les vraies mentions légales */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Éditeur du site</h2>
          <p className="mt-2">Nom de la société : Odoc SAS</p>
          <p>Adresse : 123 Rue de l'Exemple, 75001 Paris, France</p>
          <p>Capital social : 10 000 €</p>
          <p>RCS : Paris 123 456 789</p>
          <p>Email : contact@odoc.app</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Hébergement</h2>
          <p className="mt-2">Ce site est hébergé par Lovable.</p>
        </section>
      </div>
    </div>
  );
}
