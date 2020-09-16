const gatsbyExpress = require("gatsby-plugin-express")
const express = require("express")
const app = express()
const { ApolloServer, gql } = require("apollo-server-express")

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

app.get("/post", (req, res) => {
  res.send("hello")
})
server.applyMiddleware({ app })

// serve static files before gatsbyExpress
app.use(express.static("public/"))
app.use(
  gatsbyExpress("config/gatsby-express.json", {
    publicDir: "public/",

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true,
  })
)

app.listen(3000, function () {
  console.log("App started on port 3000")
})
