const LugarSeguro = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-6 py-8 flex gap-14">
        <div className="flex flex-col gap-6">
          <div className="title md:flex gap-2">
            <p className="text-white glow font-black text-4xl">TU</p>
            <p className="text-white glow font-black text-4xl">LUGAR</p>
            <p className="text-white glow font-black text-4xl">SEGURO</p>
          </div>
          <div className="text">
            <p className="text-zinc-400 text-xl text-end md:text-start">Trabajamos junto con toda la comunidad para proporcionarle un lugar seguro a todo aquel que quiera participar con buena onda!</p>
          </div>
        </div>
        <div className="hidden md:flex text-end text-zinc-400 text-lg h-fill lg:w-1/2 items-center justify-center">El stream y mis redes son lugares donde me siento cómoda. Quiero que también lo sean para ustedes, que puedan charlar, divertirse, que se permitan pasarla mal también, siempre conteniendonos entre todos y libres de prejuicios</div>
      </div>
    </div>)
}

export default LugarSeguro