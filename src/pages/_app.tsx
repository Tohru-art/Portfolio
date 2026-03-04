import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
      <SpeedInsights />
    </>
  )
}

export default MyApp
