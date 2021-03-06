import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import axios from 'axios'

axios.defaults.baseURL = process.env.API
axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
export default MyApp
