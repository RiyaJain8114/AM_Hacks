import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          image: "url('https://source.unsplash.com/random/1920x1080')", // Replace with your image
          size: "cover",
          repeat: "no-repeat",
          position: "center center"
        },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Background;
