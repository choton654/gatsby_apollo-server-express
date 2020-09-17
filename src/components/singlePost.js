import React, { useEffect } from "react"
import { getSinglePost } from "../context/actions"
import { GlobalState } from "../context/state"

function SinglePost(props) {
  const {
    state: { post },
    dispatch,
  } = GlobalState()
  console.log(post)

  useEffect(() => {
    getSinglePost(props.id, dispatch)
  }, [dispatch])

  return (
    <div>
      <h1>{post.title}</h1>
      <strong>
        Description: <p>{post.description}</p>
      </strong>
      <h4>CreatedBy: {post.user?.email}</h4>
      <h5>Comments: {post.comments?.length}</h5>
    </div>
  )
}

export default SinglePost
