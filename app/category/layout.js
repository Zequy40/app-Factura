import './../globals.css'
import { Quattrocento_Sans } from 'next/font/google'
import Providers from '@/store/provider';
import Header from '../components/header';
import Carts from '../components/carts';

const inter = Quattrocento_Sans({ weight: '400', subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body>
          <Header />
          <Carts />
          <div>{children}</div></body>
      </Providers>
    </html>
  )
}
