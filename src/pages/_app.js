import '@/styles/globals.scss'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import Header from '@/layout/header/Header'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}
