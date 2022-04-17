import type { NextPage } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortfolioTemplate } from '../src/components/templates/Portfolio'
import {
	faFacebookSquare,
	faGithubSquare,
	faLinkedin,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
	return (
		<PortfolioTemplate>
			<h1 className={'text-white text-center text-4xl mb-8 font-bold'}>
				Sorry, we&apos;re doing some work on the site
			</h1>
			<p className={'text-white text-center text-xl mb-8'}>
				Thank you for being patient. We are doing some work on the site and will be back shortly.
			</p>
			<nav className={'grid grid-flow-col justify-center gap-3.5'}>
				<a href='#'>
					<FontAwesomeIcon className={'text-white text-4xl'} icon={faFacebookSquare} />
				</a>
				<a href='#'>
					<FontAwesomeIcon className={'text-white text-4xl'} icon={faTwitterSquare} />
				</a>
				<a href='#'>
					<FontAwesomeIcon className={'text-white text-4xl'} icon={faLinkedin} />
				</a>
				<a href='#'>
					<FontAwesomeIcon className={'text-white text-4xl'} icon={faGithubSquare} />
				</a>
			</nav>
		</PortfolioTemplate>
	)
}

export default Home