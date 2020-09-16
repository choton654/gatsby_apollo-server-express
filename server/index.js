const gatsby = require("gatsby-plugin-nodejs")
const express = require("express")
const mongoose = require("mongoose")
const router = require("./route/router")
const cors = require("cors")
const port = process.env.PORT || 3000
const cookieparser = require("cookie-parser")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db is connected"))
  .catch(err => console.log(err))

gatsby.prepare({ app }, () => {
  app.get("/user", (req, res) => {
    res.end("hello")
  })
  app.use(router)
})

app.listen(port, () => console.log(`listening on port ${port}`))
