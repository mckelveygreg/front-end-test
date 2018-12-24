module.exports = {
  siteMetadata: {
    title: 'Trifoia Front-end Dev Test',
    description: "A CSS-garden esque project for testing front end developers",
    author: 'Greg McKelvey',
    siteUrl: 'https://mckelveygreg.github.io/front-end-test/'
  },
  pathPrefix: '/front-end-test',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Trifoia Careers',
        short_name: 'Trifoia',
        start_url: '/',
        background_color: '#7497E1',
        theme_color: '#7497E1',
        display: 'minimal-ui',
        icon: 'src/images/trifoia-favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
