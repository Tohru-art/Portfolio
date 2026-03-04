import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
