import type { ReactNode } from 'react'

import { Inter, Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import type { Metadata } from 'next'

import './globals.sass'

const robotoSansSerif = Roboto({
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
})

const interSansSerif = Inter({
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

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
			<body className={`${robotoSansSerif.variable} ${interSansSerif.className} antialiased bg-white`}>
				{children}
				<footer className='bg-black text-white'>
					<span>© 2025 DavichoDev</span>
					<aside>
						<a href='https://github.com/davicho-dev'></a>
					</aside>
				</footer>
			</body>
		</html>
	)
}

export default RootLayout
