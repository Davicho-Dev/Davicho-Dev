import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../src/assets'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Component {...pageProps} />
	</ThemeProvider>
)

export default MyApp
