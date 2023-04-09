//styles
import '@/styles/globals.scss'

//components
import Header from '@/layout/header'
import Info from '@/layout/info';
import Footer from '@/layout/footer';

//redux
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

//next
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Insight</title>
        <meta name="description" content="Find github user info" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Info />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  )
}
