import React, { FC } from 'react'
import Head from 'next/head'

import { TemplatesInterface } from './templates.interface'

export const PortfolioTemplate: FC<TemplatesInterface> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>HarmonySkullCodes{title && `: ${title}`}</title>
			</Head>
			<main className={'w-screen h-screen bg-slate-800 grid justify-center content-center'}>
				{children}
			</main>
		</>
	)
}
