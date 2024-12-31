import React from 'react';
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, LeftBtnText, RightBtnText }) {
  return (
    <div
      className={`w-screen h-screen bg-cover bg-center flex flex-col justify-between`}
      style={{ backgroundImage: `url(${backgroundImg})` }} // Use the full URL passed as backgroundImg
    >
      <Fade bottom>
        <div className="pt-40 text-center">
          <h1 className="text-7xl font-bold mb-2 text-white">{title}</h1> {/* Set title text to white */}
          <p className="text-xl text-white">{description}</p> {/* Set description text to white */}
        </div>
      </Fade>
      <div className="flex flex-col items-center mb-10">
        <Fade bottom>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white text-md w-64 h-12 rounded-md opacity-90 hover:opacity-100 hover:bg-gray-800 transition">
              {LeftBtnText}
            </button>
            {RightBtnText && (
              <button className="bg-white text-black text-md w-64 h-12 rounded-md opacity-80 hover:opacity-100 transition">
                {RightBtnText}
              </button>
            )}
          </div>
        </Fade>
        <img
          src="https://raw.githubusercontent.com/Natan-Mesele/Tesla-clone/516122cbb939712c96a2df7e6b95439acc8eb7dd/public/img/down-arrow.svg"
          alt="Arrow Down"
          className="h-10 animate-bounce mt-6"
        />
      </div>
    </div>
  );
}

export default Section;
