import './Hero.css';



const Hero = () => {
  return (
    <div className="relative fulldvh md:h-96 flex items-center justify-center md:justify-start">
      {/* Fondo de la imagen */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/navidad.png")' }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Contenido centrado */}
      <div className="text-white text-center md:text-start z-10 container px-6 mx-auto">
        <div className="max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 glow">LLEGÓ LA NAVIDAD AL SÓTANO</h1>
            <p className="text-md md:text-lg text-zinc-300">Otro año más pasando juntxs la navidad! Todas las personitas que se subeen durante Diciembre van a ir anotadas en unos hermosos unicornios que van en el arbol!</p>
            <p className="text-md md:text-lg text-zinc-300 mt-2">Querés ir en la estrella? Entrá al stream y enterate de cómo hacer!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
