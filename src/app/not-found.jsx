import Link from 'next/link';

const notFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href="/"></Link>
    </section>
  )
}

export default notFound