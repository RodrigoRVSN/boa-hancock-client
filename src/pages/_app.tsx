import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@App/core/styles/global.css'
import { store } from '@core/store'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
