import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Headbar from '@/app/components/headbar/headbar'
import './globals.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'amoraschi\'s Github Page',
  description: 'amoraschi\'s Github Page'
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
    >
      <body
        className={inter.className}
      >
        <Headbar />
        {children}
      </body>
    </html>
  )
}
