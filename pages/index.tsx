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
			<h1 className={'text-white'}>Sorry, we&apos;re doing some work on the site</h1>
			<p className={'text-white'}>
				Thank you for being patient. We are doing some work on the site and will be back shortly.
			</p>
			<nav className={'grid grid-flow-col justify-center gap-3.5'}>
				<FontAwesomeIcon className={'text-white text-3xl'} icon={faFacebookSquare} />
				<FontAwesomeIcon className={'text-white text-3xl'} icon={faTwitterSquare} />
				<FontAwesomeIcon className={'text-white text-3xl'} icon={faLinkedin} />
				<FontAwesomeIcon className={'text-white text-3xl'} icon={faGithubSquare} />
			</nav>
		</PortfolioTemplate>
	)
}

export default Home
