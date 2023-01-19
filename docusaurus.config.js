// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Endless web worlds documentation',
	tagline: 'Create and explore highly customizable online 2D worlds.',
	url: 'https://www.endless-web-worlds.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'EndlessWebWorlds', // Usually your GitHub org/user name.
	projectName: 'Eww', // Usually your repo name.

	// Even if you don't use internationalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve(
						'./sidebars.js'
					),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve(
						'./src/css/custom.css'
					),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '',
				logo: {
					alt: 'EwwLogo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'About/Overview',
						position: 'left',
						label: 'About',
					},
					{
						to: 'docs/Tutorials/Overview',
						position: 'left',
						label: 'Tutorials',
					},
					{
						to: 'docs/EWW-token/tokenomics',
						position: 'left',
						label: 'EWW-Token',
					},
					{
						to: 'docs/About/Features',
						position: 'left',
						label: 'Features',
					},
					// {to: '/blog', label: 'Blog', position: 'left'},
					{
						href: 'https://github.com/Endlesswebworlds',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'About',
						items: [
							{
								label: 'Dataflow',
								to: '/docs/About/Overview',
							},
							{
								label: 'Oracle',
								to: '/docs/About/Oracle',
							},
							{
								label: 'Node',
								to: '/docs/About/Node',
							},
							{
								label: 'World',
								to: '/docs/About/World',
							},
						],
					},
					{
						title: 'Tutorials',
						items: [
							{
								label: 'Sources',
								to: '/docs/Tutorials/Overview',
							},
							{
								label: 'Own server',
								to: '/docs/Tutorials/Own%20server',
							},
							{
								label: 'Coding',
								to: '/docs/Tutorials/Coding',
							},
						],
					},
					{
						title: 'EWW-Token',
						items: [
							{
								label: 'Tokenomics',
								to: '/docs/EWW-token/Tokenomics',
							},
							{
								label: 'Utility',
								to: '/docs/EWW-token/Utility',
							}
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} EndlessWebWorlds. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
