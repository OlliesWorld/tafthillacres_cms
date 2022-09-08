module.exports = {
  siteMetadata: {
    title: `Taft Hill Acres`,
    description: `Fort Collins Premier Horse Boarding Facility`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
   
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1b2911`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tafthorse.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'CTQVjZ130srflhEc3Rr5KQtt',
        version: 'draft',
        localAssets: true, 
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    }
    
  ],
}
