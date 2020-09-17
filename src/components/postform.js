import React, { useState } from "react"
import { createPosts } from "../context/actions"
import { GlobalState } from "../context/state"
const Postform = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  })

  const { dispatch } = GlobalState()

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(post)
    createPosts(post, dispatch)
    setPost({
      title: "",
      description: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        id="title"
        name="title"
        onChange={handleChange}
        value={post.title}
        placeholder="enter a title"
        required
        type="text"
      />
      <br />
      <label htmlFor="desc">Description</label>
      <br />
      <textarea
        id="desc"
        name="description"
        onChange={handleChange}
        value={post.description}
        placeholder="write something"
        required
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Postform
