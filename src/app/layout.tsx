import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import Legal from '@/components/layout/legal'
import Links from '@/components/layout/links'
import './globals.css'
import Hits from '@/components/layout/hits'

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin']
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
        className={`${lexend.className} antialiased`}
      >
        <Links />
        {children}
        <Legal />
        <Hits />
      </body>
    </html>
  )
}
