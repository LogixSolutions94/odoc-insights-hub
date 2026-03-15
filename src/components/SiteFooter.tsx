import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Produit */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><Link to="/fonctionnalites" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tarifs</Link></li>
            </ul>
          </div>
          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link to="/a-propos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>
          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link></li>
              <li><Link to="/cgu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">CGU</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Odoc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
