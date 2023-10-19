import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import LastVid from '@/components/sections/LastVid';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}