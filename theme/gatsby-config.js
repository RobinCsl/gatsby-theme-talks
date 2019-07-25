module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  siteMetadata: {
    title: "Gatsby Talks Theme",
    basePath,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Talk",
      },
    },
    "gatsby-plugin-theme-ui",
  ],
})
