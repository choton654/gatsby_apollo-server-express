const path = require("path")
const fs = require("fs")

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = function ({ actions }) {
  const { createRedirect } = actions

  createRedirect({ fromPath: "/hello", toPath: "/" })
}
