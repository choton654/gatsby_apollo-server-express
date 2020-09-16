const gatsbyExpress = require("gatsby-plugin-express")
const express = require("express")
const mongoose = require("mongoose")
const router = require("./route/router")
const cookieparser = require("cookie-parser")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cookieparser())
mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db is connected"))
  .catch(err => console.log(err))

app.get("/", (req, res) => {
  res.end("hello")
})

app.use(router)

app.use(express.static("public/"))
app.use(
  gatsbyExpress("config/gatsby-express.json", {
    publicDir: "public/",
    redirectSlashes: true,
  })
)

app.listen(3000, function () {
  console.log("App started on port 3000")
})
