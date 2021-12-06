import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Head>
        <title>Crashcourse</title>
        <meta name="description" content="Crashcourse store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
