import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
//import { loadFull } from "tsparticles";
import { useMemo, useCallback } from "react";

const ParticlesComponent = (props) => {
    const options = useMemo(() => { 
        return {
            background: {
                color: "transparent",
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 100,
                    },
                    repulse: {
                        distance: 200,
                    },
                }
            },
            particles: {
                links: {
                    enable: false,
                    distance: 200,
                },
                move: {
                    enable: true,
                    speed: { min: 1, max: 5 },
                },
                opacity: {
                    value: { min: 0.3, max: 0.7},
                },
                size: {
                    value: { min: 1, max: 5},
                }, 
            }
        };
    }, []);
    const particlesInit = useCallback(
        (engine) => {
            loadSlim(engine);
            //loadFull(engine);
        },
        [],
    );
  return (
    <Particles id={props.id} init={particlesInit} options={options} />
  );
};

export default ParticlesComponent;