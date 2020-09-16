import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/layout"
import User from "../components/user"
const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <User path="/user" />
      </Router>
    </Layout>
  )
}

export default App
