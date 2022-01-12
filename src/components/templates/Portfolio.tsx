import React, { FC } from 'react'
import Head from 'next/head'

import { TemplatesInterface } from './templates.interface'

export const PortfolioTemplate: FC<TemplatesInterface> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>HarmonySkullCodes{title && `: ${title}`}</title>
			</Head>
			<main className={'bg-slate-800'}>{children}</main>
		</>
	)
}
