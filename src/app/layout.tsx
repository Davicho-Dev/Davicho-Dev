import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import './globals.sass'

export const metadata = {
	title: 'DavichoDev',
	description:
		'DavichoDev Portfolio, FullStack Developer, Mobile Developer & Tech Mentor, expert in React, Next.js, Flutter, and more technologies.',
	keywords:
		'David Gavilanez, DavichoDev, Davicho-Dev, FullStack Developer, React Developer, Mobile Developer, Tech Mentor, Portfolio, React, Next.js, Swift, Flutter, Tailwind CSS, Web Development',
	openGraph: {
		type: 'website',
		url: 'https://davicho.dev',
		title: 'DavichoDev - FullStack Developer & Tech Mentor',
		description:
			'Explore my portfolio as a FullStack Developer and Tech Mentor. Innovative projects and modern solutions in React, Flutter and more.',
		images: [
			{
				url: 'https://davicho.dev/featured-image.png',
				width: 1200,
				height: 630,
				alt: 'David Gavilánez Portfolio',
			},
		],
		siteName: 'David Gavilánez - Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'David Gavilánez - FullStack Developer & Tech Mentor',
		description: 'Welcome to David Gavilanez portfolio. Discover my projects and skills.',
		images: ['https://davicho.dev/featured-image.png'],
		site: '@DavichoDev',
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	themeColor: '#0361A3',
} satisfies Metadata

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang='en'>
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout
