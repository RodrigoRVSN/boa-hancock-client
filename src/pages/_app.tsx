import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@App/core/styles/global.css'
import { store } from '@core/store'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
