const Streamloots = () => {
  return (
    <div className="container px-6 py-10">
      <a href="" className="mx-auto flex gap-16">
        {/* <div className="video hidden md:flex w-full">video</div> */}
        <div className="info flex flex-col justify-center mx-auto w-full gap-6 md:justify-end md:mx-0">
          <img src="/social/streamloots-icon.svg" alt="streamloots logo" className="w-32 mx-auto md:mr-0" />
          <h3 className="text-3xl font-bold text-white glow text-center md:text-end">YA CONOCES STREAMLOOTS?</h3>
          <p className="text-xl text-zinc-400 text-center md:text-end">
            Soy partner de streamloots! Divertite mientras yo la paso mal con las dos colecciones que tengo disponibles!
          </p>
          <div className="flex justify-end">
            <a href="https://www.streamloots.com/mikithomas/" target="_blank" className="px-4 py-1 border mx-auto md:mx-0 border-white flex justify-center items-center rounded-md text-white animate-pulse transition duration-300 hover:bg-white hover:text-zinc-800 hover:animate-none" >
              Conocé mis cartas
            </a>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Streamloots