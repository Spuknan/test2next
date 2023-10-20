import Hero from '@/components/hero/Hero'
import Redes from '@/components/cta/Redes';
import Divider from '@/components/utils/Divider';
import LugarSeguro from '@/components/sections/LugarSeguro';
import Discord from '@/components/cta/Discord';
import Streamloots from '@/components/cta/Streamloots';
import Contacto from '@/components/sections/ContactForm';
import LastVid from '@/components/sections/LastVid';



export const metadata = {
  title: 'MikiThomas | Inicio',
  description: 'Sumate a esta hermosa comunidad que formamos entre todos! Disfruta de los streams, los videos de youtube y todo el contenido!',
}

const page = () => {
  return (
    <div className='bg-zinc-800'>
      <Hero />
      <Redes />
      <LugarSeguro />
      <LastVid />
      <Discord />
      <Streamloots />
      <Divider />
      <Contacto />
    </div>
  )
}

export default page
