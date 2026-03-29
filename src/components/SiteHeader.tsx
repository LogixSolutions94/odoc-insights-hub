import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const APP_URL = import.meta.env.VITE_APP_URL || "https://app.odoc.fr";

const navLinks = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mr-6 flex items-center">
          <span className="text-lg font-bold text-foreground">Odoc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <a href={`${APP_URL}/login`} className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors">
            Connexion
          </a>
          <a href={`${APP_URL}/signup`} className="hidden sm:inline-flex">
            <Button size="sm">Essai gratuit</Button>
          </a>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={`${APP_URL}/login`} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
            Connexion
          </a>
          <a href={`${APP_URL}/signup`} onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full mt-2">Essai gratuit</Button>
          </a>
        </div>
      )}
    </header>
  );
}
