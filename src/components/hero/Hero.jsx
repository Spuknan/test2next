import './Hero.css';

const Hero = () => {
  return (
    <div className="relative fulldvh md:h-96 flex items-center justify-center md:justify-start">
      {/* Fondo de la imagen */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/halloween.png")' }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Contenido centrado */}
      <div className="text-white text-center md:text-start z-10 container px-6 mx-auto">
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 glow">HALLOWEEN EN LA COMUNIDAD</h1>
          <p className="text-md md:text-lg text-zinc-300">Todas las personas que se suscriban en twitch durante el mes de Octubre van a poder elegir en qué parte del fantasmita va a ir su nombre, para quedar en la repisa de los fantasmitas para siempre. No te olvides de pasar por el canal para enterarte de más!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;