// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// env: {
	// 	baseURL: ''
	// },
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 's3.amazonaws.com',
	// 			pathname: '/media/**'
	// 		}
	// 	]
	// },
	experimental: {
		appDir: true
		// 	fontLoaders: [
		// 		{
		// 			loader: '@next/font/google',
		// 			options: {
		// 				fallback: ['DM Sans', 'Roboto'],
		// 			},
		// 		},
		// 	],
	}
}
// const withPWA = require('next-pwa')({
// 	dest: 'public'
// })
//
// module.exports = withPWA()

module.exports = nextConfig

module.exports = withSentryConfig(module.exports, { silent: true }, { hideSourcemaps: true })
