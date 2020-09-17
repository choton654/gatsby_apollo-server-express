import { Router } from "@reach/router"
import React from "react"
import Login from "../components/login"
import Post from "../components/post"
import User from "../components/user"
const App = () => {
  return (
    <div>
      <Router basepath="/app">
        <User path="/user" />
        <Post path="/post" />
        <Login path="/login" />
      </Router>
    </div>
  )
}

export default App
