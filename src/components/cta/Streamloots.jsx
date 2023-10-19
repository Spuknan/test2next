"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Streamloots() {
  const [isComicSans, setIsComicSans] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [counter, setCounter] = useState(5);

  const handleCardFontClick = () => {
    setIsComicSans(true);
    setCounter(6);
    setTimeout(() => {
      setIsComicSans(false);
    }, 6000);
  };

  const handleCardColorClick = () => {
    setIsColorChanged(true);
    setCounter(6);
    setTimeout(() => {
      setIsColorChanged(false);
    }, 6000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-zinc-800">
      <div className="flex flex-col md:flex-row container mx-auto px-6 py-12 gap-10">
        <div className="cards text-white flex gap-3 items-center justify-around">
          <div className="cardFont flex mx-auto justify-center">
            <button onClick={handleCardFontClick} className="flex justify-center items-center transition duration-500 hover:scale-110 w-1/2 md:w-36">
                <Image
                src="/images/COLOREAR.png"
                width={500}
                height={500}
                alt="streamloots logo"
                />
            </button>
          </div>
          <div className="cardColor flex mx-auto justify-center">
            <button onClick={handleCardColorClick} className="flex justify-center items-center transition duration-500 hover:scale-110 w-1/2 md:w-36">
                <Image
                    src="/images/logo-mareado.png"
                    width={500}
                    height={500}
                    alt="streamloots logo"
                    />
            </button>
          </div>
        </div>
        <div className="content flex flex-col align-center justify-center text-center md:justify-end gap-4 md:text-end">
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src="social/streamloots-icon.svg"
              width={150}
              height={150}
              alt="streamloots logo"
              className={`${isColorChanged ? 'animate-spin' : ''}`}
            />
          </div>
          <h3 className={`font-bold glow text-xl ${isComicSans ? 'font-mono text-blue-200' : 'text-white'}`}>
            Todavía no usaste ninguna carta?
          </h3>
          <p className={`${isComicSans ? 'font-mono text-pink-300' : 'text-zinc-400'}`}>
            Soy partner de Streamloots! Visitá su web y conocé todas las cartas
            que tengo disponibles para que te diviertas mientras yo la paso
            horriblemente mal.
          </p>
          <p className={`text-xs ${isComicSans ? 'font-mono text-pink-300' : 'text-zinc-400'}`}>
            Estate atento al stream, cada tanto sorteo cofres y regalo códigos de descuento!
          </p>
          <div className="w-full flex justify-center md:justify-end">
            <a
              href="https://www.streamloots.com/mikithomas"
              target="_blank"
              className="flex justify-center w-max items-center px-5 py-1 border text-white rounded-md transition duration-500 animate-pulse hover:bg-white hover:text-zinc-900 hover:animate-none"
            >
              Conocé mis colecciones
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
