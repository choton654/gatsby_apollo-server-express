import { Link } from "@reach/router"
import React, { useEffect } from "react"
import Postform from "../components/postform"
import { deletePost, getPosts } from "../context/actions"
import { GlobalState } from "../context/state"

function Post() {
  const {
    state: { posts, error },
    dispatch,
  } = GlobalState()

  useEffect(() => {
    getPosts(dispatch)
  }, [dispatch])

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <Link to={`/app/post/${post._id}`}>
            <h1>{post.title}</h1>
          </Link>
          <button
            type="button"
            onClick={() => {
              deletePost(post._id, dispatch)
            }}
          >
            Delete Post
          </button>
        </div>
      ))}
      <Postform />
      {error.msg && <div>{error.msg}</div>}
    </div>
  )
}

export default Post
