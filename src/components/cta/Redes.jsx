const Redes = () => {
  return (
    <div>
      <div className="container flex flex-col bg-zinc-800 px-6 py-12 gap-8 mx-auto">
        <h2 className="text-white glow font-bold text-md text-center">SEGUIME EN TODAS MIS REDES</h2>
        <div className="icons flex flex-wrap gap-6 justify-around align-center md:mx-auto">
          <a href="https://twitch.tv/mikithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/twitch-icon.svg" alt="Twitch" className="w-16"/>
          </a>
          <a href="https://www.instagram.com/miki_thomas/" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/instagram-icon.svg" alt="Twitch" className="w-16"/>
          </a>
          <a href="https://www.tiktok.com/@mikiithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/tiktok-icon.svg" alt="Twitch" className="w-16"/>
          </a>
          <a href="https://twitter.com/mikiithomas" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/twitter-icon.svg" alt="Twitch" className="w-16"/>
          </a>
          <a href="https://www.youtube.com/@mikithomas/videos" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/youtube-icon.svg" alt="Twitch" className="w-16"/>
          </a>
          <a href="https://www.streamloots.com/mikithomas/" target="_blank" className="flex justify-center align-center opacity-40 transition duration-300 hover:opacity-100 hover:scale-[1.1]">
            <img src="/social/streamloots-icon.svg" alt="Streamloots" className="w-16"/>
          </a>
        </div>
        <p className="text-zinc-500 text-center">No te pierdas de nada!</p>
      </div>
    </div>
  )
}

export default Redes