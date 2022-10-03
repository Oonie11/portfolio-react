import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-8">
          On the odyssey of Design, Not to reach the final destination but to
          enjoy the process. Building optimized projects by integrating my
          programming, 3D modelling and design skills to create impressive
          results. Generate new ideas and implement new techniques by pushing my
          abilities beyond limits.
        </p>
        <br />
        <p className="text-xl">
          Passionate about learning and development, Desire to apply skills with
          a development team. Eager to tackle complex problems and continue to
          find ways to maximize user efficiency.
        </p>
      </div>
    </div>
  );
};

export default About;
