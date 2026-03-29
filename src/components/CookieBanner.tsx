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
      const timer = setTimeout(() => setVisible(true), 1000);
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
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-secondary p-4 sm:p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="flex-1 text-sm text-muted-foreground">
                Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
                <Link to="/politique-confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
              <div className="flex gap-3 w-full sm:w-auto flex-col sm:flex-row">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleChoice(false)}
                  className="w-full sm:w-auto"
                >
                  Refuser
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleChoice(true)}
                  className="w-full sm:w-auto"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
