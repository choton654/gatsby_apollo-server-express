import { Router } from "@reach/router"
import React from "react"
import Login from "../components/login"
import Post from "../components/post"
import Signup from "../components/signup"
import SinglePost from "../components/singlePost"
import User from "../components/user"
const App = () => {
  return (
    <div>
      <Router basepath="/app">
        <User path="/user" />
        <Post path="/post" />
        <Login path="/login" />
        <Signup path="/signup" />
        <SinglePost path="/post/:id" />
      </Router>
    </div>
  )
}

export default App
