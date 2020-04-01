const siteConfig = require('./site-config');

module.exports = {
    siteMetadata: {
        ...siteConfig,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-transformer-json`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-webpack-size`,
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /images\/.*\.svg$/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Rubik'],
                },
            },
        },
    ],
};
