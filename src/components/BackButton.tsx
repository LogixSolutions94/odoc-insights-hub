import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to?: string;
  label?: string;
}

export const BackButton = ({ to = "/", label = "Retour à l'accueil" }: BackButtonProps) => (
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
      {label}
    </Link>
  </div>
);
