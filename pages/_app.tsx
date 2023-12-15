import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App ({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} font-sans`}
    >
      <Component
        {...pageProps}
      />
    </main>
  )
}
