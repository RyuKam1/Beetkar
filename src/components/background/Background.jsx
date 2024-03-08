"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./background.module.css";
import ParticleAnimation from "react-particle-animation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Background() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: "#ffffff",
      repeat: "no-repeat",
      size: "40%",
      position: "60% 50%",
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onClick: {
          enable: false,
          mode: "bubble",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 100,
          duration: 2,
          opacity: 0,
          size: 3,
          color: "#cc9c00",
          speed: 5,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: "#000000" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: true,
        speed: 0.3,
      },
      number: {
        density: {
          enable: true,
        },
        value: 600,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 5,
        },
        value: { min: 0.5, max: 1 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
  }));

  if (init) {
    return (
      <div>
        <Particles
          id="tsparticles"
          className={styles.background}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }
}
export default Background;
