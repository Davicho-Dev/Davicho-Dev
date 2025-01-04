import type { MetadataRoute } from 'next'

const robots = () =>
	({
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: 'https://davichodev.com/sitemap.xml',
	}) satisfies MetadataRoute.Robots

export default robots
