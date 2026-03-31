import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "odoc_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem(STORAGE_KEY, accepted ? "accepted" : "refused");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl"
        >
          <div className="rounded-xl border border-border bg-card p-5 shadow-elevated">
            <p className="text-sm text-foreground leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
              <Link to="/politique-confidentialite" className="text-primary font-medium underline underline-offset-2 hover:text-primary-glow">
                politique de confidentialité
              </Link>.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Button
                size="sm"
                onClick={() => handleChoice(true)}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Tout accepter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleChoice(false)}
                className="w-full sm:w-auto"
              >
                Refuser
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
