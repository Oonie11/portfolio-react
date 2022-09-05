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
        <p className="text-xl mt-20">
          In the beginning phase of Design Journey, not to reach the final
          destination but to enjoy the Process. I wish to combine my interest in
          3D Modelling, Sketching, and Programming by pushing my abilites beyond
          limits, by exploring new ideas and experiencing New Project.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, in
          assumenda? In, cumque? Vel tenetur fuga repellendus est, aut eaque ad
          autem cupiditate quibusdam totam adipisci ab animi rem amet nulla,
          nobis nisi laboriosam veniam! At veritatis obcaecati iure. Incidunt
          aperiam minus enim placeat, voluptatum cupiditate consequatur esse
          praesentium ducimus.
        </p>
      </div>
    </div>
  );
};

export default About;
