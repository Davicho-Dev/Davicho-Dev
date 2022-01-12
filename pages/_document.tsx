import React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta name='description' content='' />
					<link rel='icon' href='/favicon.ico' />
					<meta name='author' content='HarmonySkull' />
					<meta
						name='keywords'
						content='HTML, CSS, JavaScript, React, React Native, NextJS, Storybook,Docker, Flutter, Front-End, FrontEnd, Developer, Team Lead, Lead'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
