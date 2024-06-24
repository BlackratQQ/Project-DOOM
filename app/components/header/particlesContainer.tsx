"use client";

import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

type ParticlesContainerProps = {
  onLoaded?: () => void;
};

const ParticlesContainer: React.FC<ParticlesContainerProps> = ({
  onLoaded,
}) => {
  // init
  const particlesInit = useCallback(async (engine: any) => {
    // Použití typu Engine
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container?: any) => {
      if (onLoaded) {
        onLoaded();
      }
      return Promise.resolve();
    },
    [onLoaded]
  );

  return (
    <Particles
      className="z-0 translate-z-0 absolute right-0 h-full w-full md:w-2/3"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
