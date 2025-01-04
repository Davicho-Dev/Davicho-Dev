import type { MetadataRoute } from 'next'

const sitemap = () =>
	[
		{
			url: 'https://davicho.dev',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	] satisfies MetadataRoute.Sitemap

export default sitemap
