import React from "react";
import rockPaperScissor from "../assets/portfolio/rock-paper-scissor-img.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import roboFriends from "../assets/portfolio/roboFriend.jpeg";
import omniFood from "../assets/portfolio/omniFood.png";
import numberGuess from "../assets/portfolio/numberGuessImg.png";
import pigGame from "../assets/portfolio/pig-game.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: roboFriends,
      site: "https://oonie11.github.io/robo-friends/",
      code: "https://github.com/Oonie11/robo-friends",
    },
    {
      id: 2,
      src: omniFood,
      site: "https://omnifood-oonie11.netlify.app/",
      code: "https://github.com/Oonie11/omniFood_Website",
    },
    {
      id: 3,
      src: numberGuess,
      site: "https://guess-my-number-oonie11.netlify.app/",
      code: "https://github.com/Oonie11/guess-my-number",
    },
    {
      id: 4,
      src: pigGame,
      site: "https://pig-game-oonie11.netlify.app/",
      code: "https://github.com/Oonie11/pig-game",
    },
    {
      id: 5,
      src: rockPaperScissor,
      site: "https://rock-paper-scissor-oonie11.netlify.app/",
      code: "https://github.com/Oonie11/rock-paper-scissor",
    },

    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 capitalize">
            feel free to check out some of my projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, site, code }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg mx-auto"
              >
                <img
                  src={src}
                  alt=""
                  className=" mx-auto rounded-md duration-200 w-96 h-56 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      window.open(site);
                    }}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => {
                      window.open(code);
                    }}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
