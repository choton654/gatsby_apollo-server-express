import React, { useState } from "react"
import { createComment } from "../context/actions"
import { GlobalState } from "../context/state"

const Comment = ({ postid }) => {
  const [comment, seComment] = useState({
    body: "",
  })

  const {
    dispatch,
    state: { error },
  } = GlobalState()

  const handleChange = e => {
    seComment({
      ...comment,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(comment)
    createComment(postid, comment, dispatch)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment here</label>
      <input
        id="comment"
        onChange={handleChange}
        type="text"
        value={comment.body}
        name="body"
        placeholder="Please give a comment"
      />
      <button type="submit">Comment</button>
      {error.body && <div>{error.body}</div>}
      {error.user && <div>{error.user}</div>}
    </form>
  )
}

export default Comment
