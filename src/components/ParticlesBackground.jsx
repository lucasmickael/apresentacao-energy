import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    // Carrega apenas o core necessário para performance (slim version)
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: 'absolute', zIndex: 0, inset: 0 }}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#FACC15", "#FEF08A", "#38BDF8"], // Cores do tema E-Energy
          },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.05,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.15,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.05,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false
            }
          },
        },
        detectRetina: true,
        background: {
          color: "transparent"
        }
      }}
    />
  );
}
