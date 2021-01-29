module.exports = {
  plugins: [
    `gatsby-plugin-nodejs`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:3000",
  },
}

// siteMetadata: {
//   title: `Gatsby Default Starter`,
//   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//   author: `@gatsbyjs`,
// },
