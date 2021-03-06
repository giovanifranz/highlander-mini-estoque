import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../providers/AuthContext'
import { GlobalStyle } from '../styles/global'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Highlander Mini Estoque</title>
      </Head>
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
      <GlobalStyle />
    </AuthProvider>
  )
}
