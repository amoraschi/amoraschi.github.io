import type { Metadata } from 'next'
import Link from 'next/link'
import { Atkinson_Hyperlegible } from 'next/font/google'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import './globals.css'

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  variable: '--font-atkinson',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Angelo Sho Moraschi',
  description: 'Next.js + Nextra'
}

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <Head
        faviconGlyph='✦'
      />
      <body
        className={`${atkinson.variable} antialiased`}
      >
        <Layout>
          <Navbar
            pageMap={await getPageMap()}
          >
            <Link
              href='/'
              className='font-light no-underline hover:underline'
            >
              About
            </Link>
            <Link
              href='/projects'
              className='font-light no-underline hover:underline'
            >
              Projects
            </Link>
            <Link
              href='https://github.com/amoraschi'
              className='font-light no-underline hover:underline'
            >
              Github
            </Link>
            <Link
              href='https://linkedin.com/in/amoraschi'
              className='font-light no-underline hover:underline'
            >
              LinkedIn
            </Link>

            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            <abbr
              title='This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.'
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © Angelo Sho Moraschi.
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
