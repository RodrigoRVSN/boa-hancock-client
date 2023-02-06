import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Analytics } from '@components/Analytics'
import { persistor, store } from '@core/store'
import '@core/styles/global.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
