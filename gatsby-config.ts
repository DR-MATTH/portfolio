import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// You can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
		siteTitle: `Matthias Marin Vargas`,
		siteTitleAlt: `Matthias Marin Vargas - DrMatth`,
		siteHeadline: `Road to One Million`,
		siteUrl: `https://www.drmatth.online`,
		siteDescription: `Para tener presencia en internet`,
	},
	trailingSlash: `never`,
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Cara - @lekoarts/gatsby-theme-cara`,
				short_name: `Cara`,
				description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
				start_url: `/`,
				background_color: `#141821`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [],
			},
		},
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean) as Array<PluginRef>,
}

export default config
