import { Inter } from '@next/font/google'
import Image from 'next/image'

import { Logo } from '@atoms'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
	return (
		<main>
			<div>
				<p>
					Get started by editing&nbsp;
					<code>app/page.tsx</code>
				</p>
				<div>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						By <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={24} priority />
					</a>
				</div>
			</div>

			<div>
				<Logo src='/next.svg' alt='Logo' />
				<div>
					<Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
				</div>
			</div>

			<div>
				<a
					href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Templates <span>-&gt;</span>
					</h2>
					<p className={inter.className}>Explore the Next.js 13 playground.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2 className={inter.className}>
						Deploy <span>-&gt;</span>
					</h2>
					<p className={inter.className}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	)
}

export default HomePage
