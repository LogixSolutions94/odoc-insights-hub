import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Respecter prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: { value: 35, density: { enable: true } },
      color: { value: ["#F97316", "#0B4F6C", "#94A3B8"] },
      links: {
        enable: true,
        color: "#0B4F6C",
        opacity: 0.15,
        distance: 150,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none" as const,
        random: true,
        outModes: { default: "bounce" as const },
      },
      opacity: { value: { min: 0.2, max: 0.6 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 120, links: { opacity: 0.4 } },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
