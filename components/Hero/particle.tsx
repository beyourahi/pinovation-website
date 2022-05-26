import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle: React.FC = () => {
  const particlesInit = async (main: any) => await loadFull(main);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 0.1,
              max: 3,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
        background: {
          color: "#191A1C",
        },
      }}
    />
  );
};