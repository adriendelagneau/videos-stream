import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import ScrollToTopOnRouteChange from '@/utils/srollTop'
import Navbar from '@/components/Navbar'
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  
  const router = useRouter()

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute='class'>
        <ScrollToTopOnRouteChange />
        <Navbar />
          <div id="toScrollTop" >
            <Component {...pageProps} />

          </div>
      </ThemeProvider>
    </SessionProvider>
  )
}
