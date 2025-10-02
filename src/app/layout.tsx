import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Angelo Sho Moraschi',
  description: 'My personal website',
}

export default async function RootLayout ({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
