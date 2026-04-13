import { useLayoutEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Init : lire system preference et appliquer immédiatement (useLayoutEffect = synchrone)
  useLayoutEffect(() => {
    const html = document.documentElement;
    const stored = html.getAttribute('data-theme');

    // Si data-theme n'est pas set, déterminer depuis system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (stored as 'light' | 'dark') || (prefersDark ? 'dark' : 'light');

    console.log('[ThemeToggle] Initializing with theme:', initial);
    setTheme(initial);
    html.setAttribute('data-theme', initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    console.log('[ThemeToggle] Toggling theme:', theme, '→', next);

    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);

    // Force reflow pour s'assurer que les changements CSS sont appliqués
    void document.documentElement.offsetHeight;
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
      className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
      title={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="stroke-current" />
      ) : (
        <Moon size={18} className="stroke-current" />
      )}
    </button>
  );
}
