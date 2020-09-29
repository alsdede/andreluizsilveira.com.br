module.exports = {
  siteMetadata: {
    title: `André Luiz Silveira`,
    position:'Desenvolvedor Front-end',
    description: `Front-end e outras coisas legais`,
    author: `@alsdede`,
    siteUrl:'https://andreluizsilveira.com.br',
    social: {
      twitter: `alsdede`,
      twitterLink: `https://twitter.com/alsdede`,
      linkedinLink: `https://www.linkedin.com/in/alsdede/`,
      githubLink: `https://github.com/alsdede`,
      youtubeLink: `https://www.youtube.com/c/alsdede`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
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
         // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-transition-link`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
