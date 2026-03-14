import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-8 md:py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-24 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Odoc. Tous droits réservés.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Accueil</Link>
          <Link to="/fonctionnalites" className="text-sm text-muted-foreground hover:text-foreground">Fonctionnalités</Link>
          <Link to="/a-propos" className="text-sm text-muted-foreground hover:text-foreground">À propos</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Tarifs</Link>
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground">Mentions Légales</Link>
          <Link to="/cgu" className="text-sm text-muted-foreground hover:text-foreground">CGU</Link>
        </div>
      </div>
    </footer>
  );
}
