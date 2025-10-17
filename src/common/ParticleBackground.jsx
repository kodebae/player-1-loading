import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { loadHeartShape } from 'tsparticles-shape-heart';
import { useTheme } from './ThemeContext';

function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadHeartShape(engine);
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'light' ? ['#ff6b9d', '#00d9ff', '#b388ff'] : ['#00d9ff', '#b388ff', '#ff6b9d'],
      },
      links: {
        color: theme === 'light' ? '#ff6b9d' : '#00d9ff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
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
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: ['square', 'triangle', 'star', 'heart'],
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default ParticleBackground;

