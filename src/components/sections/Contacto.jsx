const Contacto = () => {
  return (
    <div className="container px-6 py-10 mx-auto max-w-4xl flex flex-col gap-6">
      <h3 className="text-white font-bold text-3xl glow text-center">CONTACTO</h3>
      <form action="" className="flex flex-col gap-4">
        <div className="formItem flex flex-col gap-1 text-zinc-400 font-medium">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="text-white bg-zinc-600 rounded-md px-3 py-1" />
        </div>
        <div className="formItem flex flex-col gap-1 text-zinc-400 font-medium">
          <label htmlFor="email">Email</label>
          <input type="text" className="text-white bg-zinc-600 rounded-md px-3 py-1" />
        </div>
        <div className="formItem flex flex-col gap-1 text-zinc-400 font-medium">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea name="" id="" cols="30" rows="10" className="text-white bg-zinc-600 rounded-md px-3 py-1"></textarea>
        </div>
        <div className="formBtn flex justify-center items-center md:justify-end">
          <input type="submit" value="Enviar" className="bg-zinc-900 text-zinc-400 rounded-md px-4 py-2 w-full cursor-pointer transition duration-300 hover:scale-[1.02] hover:bg-black md:w-32" />
        </div>
      </form>
    </div>
  )
}

export default Contacto