module.exports = {
  siteMetadata: {
    title: `<title of conf>`,
    description: `A new, musical theater-inspired tech conference`,
    author: `Aisha Blake`,
    siteUrl: `https://www.titleofconf.org`,
    menuLinks: [
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Sponsor',
        link: '/sponsor'
      },
      {
        name: 'Cast',
        link: '/cast-and-crew'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/toc-symbol-dark.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
