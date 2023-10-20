import Link from 'next/link';
import './globals.css';

const notFound = () => {
  return (
    <section className="dvh bg-zinc-800 flex flex-col justify-center items-center gap-3">
      <img src="/gifs/emote_furia.gif" alt="emote furia" />
      <h1 className="font-bold text-white text-8xl glow">404</h1>
      <p className="text-zinc-400 text-xl">Esta página no existe!</p>
      <Link href="/" className="px-4 py-1 bg-zinc-700 text-zinc-200 font-semibold text-sm rounded-md hover:bg-zinc-200 hover:text-zinc-900 transition duration-300 hover:animate-none animate-pulse">Volver al inicio</Link>
    </section>
  )
}

export default notFound