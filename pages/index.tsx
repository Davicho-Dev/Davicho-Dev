import type { NextPage } from 'next'

import { Container, IconButton, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

const Home: NextPage = () => {
	return (
		<Container
			maxWidth='md'
			sx={{
				display: 'grid',
				alignContent: 'center',
				justifyItems: 'center',
				height: 'calc(100vh - 16px)',
				rowGap: '4rem',
			}}
			fixed
		>
			<Typography variant='h1' fontSize='xx-large' fontWeight='bold' textAlign='center'>
				Sorry, we&apos;re doing some work on the site
			</Typography>
			<Typography variant='body1' textAlign='center'>
				Thank you for being patient. We are doing some work on the site and will be back shortly.
			</Typography>
			<Container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
				<IconButton href='https://twitter.com/DavichoDev' aria-label='Twitter'>
					<TwitterIcon />
				</IconButton>
				<IconButton href='https://linkedin.com/in/DavichoDev/' aria-label='LinkedIn'>
					<LinkedInIcon />
				</IconButton>
				<IconButton href='https://github.com/Davicho-Dev' aria-label='GitHub'>
					<GitHubIcon />
				</IconButton>
			</Container>
		</Container>
	)
}

export default Home
