import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryConfig: Record<string, { label: string; className: string }> = {
  facturation: { label: "Facturation", className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  comptabilite: { label: "Comptabilité", className: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
  "ia-documents": { label: "IA & Documents", className: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
  "gestion-pme": { label: "Gestion PME", className: "bg-green-500/20 text-green-400 border-green-500/30" },
  tutoriel: { label: "Tutoriel", className: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  general: { label: "Général", className: "bg-muted text-muted-foreground border-border" },
};

interface BlogCategoryBadgeProps {
  category: string;
  className?: string;
}

export function BlogCategoryBadge({ category, className }: BlogCategoryBadgeProps) {
  const config = categoryConfig[category] || categoryConfig.general;
  return (
    <Badge variant="outline" className={cn(config.className, className)}>
      {config.label}
    </Badge>
  );
}
