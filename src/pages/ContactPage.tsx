import { useState } from "react";
import { MotionDiv } from "@/components/MotionDiv";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // TODO: Remplacer par un appel API réel (Resend, webhook, etc.)
    console.log("Form data:", data);
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <MotionDiv className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Contactez-nous</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discutons de la manière dont Odoc peut aider votre entreprise. Remplissez le formulaire ou demandez une démo.
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
        viewport={{ once: true }}
        className="mt-12"
      >
        {submitted ? (
          <div className="p-8 text-center bg-card rounded-lg shadow-card">
            <h2 className="text-2xl font-semibold text-foreground">Merci !</h2>
            <p className="mt-2 text-muted-foreground">Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-background border border-border shadow-sm focus:border-primary focus:ring-1 focus:ring-ring text-sm h-10 px-3 text-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email professionnel</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-background border border-border shadow-sm focus:border-primary focus:ring-1 focus:ring-ring text-sm h-10 px-3 text-foreground"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">Entreprise</label>
              <input
                type="text"
                name="company"
                id="company"
                className="mt-1 block w-full rounded-md bg-background border border-border shadow-sm focus:border-primary focus:ring-1 focus:ring-ring text-sm h-10 px-3 text-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Votre message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-background border border-border shadow-sm focus:border-primary focus:ring-1 focus:ring-ring text-sm p-3 text-foreground"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Envoyer le message
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Vos données sont protégées. Nous ne les partagerons jamais.
            </p>
          </form>
        )}
      </MotionDiv>
    </div>
  );
}
