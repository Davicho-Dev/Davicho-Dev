import { config } from '@fortawesome/fontawesome-svg-core'

import { AppProps } from 'next/app'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'
import '../src/styles/globals.sass'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
