import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-zinc-900'>
      <div className="container px-6 py-12 mx-auto">
        <div className="flex">
          <div className="linkscontainer flex flex-col gap-2 w-full">
            <h4 className="text-white font-bold glow">Links rápidos</h4>
            <div className="links text-zinc-400 flex flex-col">
              <Link href="/" className="text-zinc-400 transition duration-300 hover:text-white hover:underline">Inicio</Link>
              <Link href="/" className="text-zinc-700 cursor-not-allowed">Sobre mi</Link>
              <Link href="/" className="text-zinc-700 cursor-not-allowed">Eventos</Link>
              <Link href="/" className="text-zinc-700 cursor-not-allowed">Contacto</Link>
              <Link href="/" className="text-zinc-700 cursor-not-allowed">Tienda</Link>
              <Link href="/" className="text-zinc-700 cursor-not-allowed">Marcas</Link>
            </div>
          </div>
          <div className="icons flex flex-col justify-around items-end w-full gap-4">
            <a href="https://twitch.tv/mikithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/twitch-icon.svg" alt="Twitch" className="w-6" />
            </a>
            <a href="https://www.instagram.com/miki_thomas/" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/instagram-icon.svg" alt="Twitch" className="w-6" />
            </a>
            <a href="https://www.tiktok.com/@mikiithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/tiktok-icon.svg" alt="Twitch" className="w-6" />
            </a>
            <a href="https://twitter.com/mikiithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/twitter-icon.svg" alt="Twitch" className="w-6" />
            </a>
            <a href="https://www.youtube.com/@mikithomas/videos" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/youtube-icon.svg" alt="Twitch" className="w-6" />
            </a>
            <a href="https://www.streamloots.com/mikithomas/" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
              <img src="/social/streamloots-icon.svg" alt="Streamloots" className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer