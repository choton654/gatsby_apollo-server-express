import React, { useEffect } from "react"
import { deleteComment, getSinglePost } from "../context/actions"
import { GlobalState } from "../context/state"
import Comment from "./comment"

function SinglePost(props) {
  const {
    state: { post, error },
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
      <div>
        Comments:{" "}
        {post.comments?.map(comment => (
          <div>
            <h2>{comment.body}</h2>
            <button
              onClick={() => {
                deleteComment(comment._id, dispatch)
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Comment postid={props.id} />
      {error.msg && <div>{error.msg}</div>}
    </div>
  )
}

export default SinglePost
