import React from 'react'
import { Logo } from './Logo'
import { LogoProps } from './Logo.interface'

describe('<Logo />', () => {
	const props: LogoProps = {
		src: 'https://via.placeholder.com/150',
		alt: 'Logo'
	}

	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Logo {...props} />)
	})
})
