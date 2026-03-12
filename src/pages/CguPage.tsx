export default function CguPage() {
  return (
    <div className="mx-auto max-w-3xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Conditions Générales d'Utilisation</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        {/* TODO: Remplacer par les vraies CGU */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Article 1 – Objet</h2>
          <p className="mt-2">Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site web Odoc et de ses services associés.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Article 2 – Acceptation des CGU</h2>
          <p className="mt-2">L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Article 3 – Services</h2>
          <p className="mt-2">Odoc propose une plateforme SaaS d'intelligence documentaire permettant aux entreprises de centraliser, analyser et exploiter leurs documents administratifs et financiers.</p>
        </section>
      </div>
    </div>
  );
}
