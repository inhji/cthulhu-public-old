module.exports = {
  siteMetadata: {
    title: `Technos & Psyche`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'markdown-posts'
      }
    },
    `gatsby-transformer-remark`
  ]
}
