import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import roboFriends from "../assets/portfolio/roboFriend.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
    {
      id: 7,
      src: roboFriends,
      site: "https://oonie11.github.io/robo-friends/",
      code: "https://github.com/Oonie11/robo-friends",
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

        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, site, code }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg mx-auto"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 w-96 h-56 hover:scale-105"
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
