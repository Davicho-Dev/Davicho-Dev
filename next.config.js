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
