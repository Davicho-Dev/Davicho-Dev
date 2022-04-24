import { FC } from 'react'
import Head from 'next/head'

import { TemplatesInterface } from '../../interfaces/templates'

const BlogTemplate: FC<TemplatesInterface> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>HarmonySkullCodes{title && `: ${title}`}</title>
			</Head>
			<main>{children}</main>
		</>
	)
}

export default BlogTemplate
