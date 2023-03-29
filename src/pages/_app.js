import Header from '@/layout/header/Header'
import Head from 'next/head';
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Info</title>
        <meta name="description" content="Find github user info" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
