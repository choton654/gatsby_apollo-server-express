import React, { useState } from "react"
import { createPosts } from "../context/actions"
import { GlobalState } from "../context/state"
const Postform = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  })

  const {
    dispatch,
    state: { error },
  } = GlobalState()

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
      {error.title && <div>{error.title}</div>}
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
      {error.description && <div>{error.description}</div>}
      <button type="submit">Submit</button>
      {error.user && <div>{error.user}</div>}
    </form>
  )
}

export default Postform
