import type { MetadataRoute } from 'next'

const manifest = () =>
	({
		name: 'DavichoDev',
		short_name: 'DavichoDev',
		description: 'DavichoDev',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}) satisfies MetadataRoute.Manifest

export default manifest
