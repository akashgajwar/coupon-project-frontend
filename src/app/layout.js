import css from 'styled-jsx/css'
import './globals.css'

import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coupon Website',
  description: 'Lorem Ipsum'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
