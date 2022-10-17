import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument = () => {
	return (
		<Html lang={'en'}>
			<Head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<title>DavichoDev</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default MyDocument
