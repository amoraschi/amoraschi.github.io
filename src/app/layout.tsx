import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Legal from '@/components/text/legal'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Angelo Sho Moraschi | Software Engineer Student',
  description: 'Personal Webpage',
  openGraph: {
    title: 'Angelo Sho Moraschi | Software Engineer Student',
    description: 'Personal Webpage',
    url: 'https://amoraschi.github.io',
    images: [
      'https://avatars.githubusercontent.com/u/68395930?v=4'
    ]
  }
}

export default async function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased relative min-h-screen`}
      >
        {children}
        <Legal />
      </body>
    </html>
  )
}
