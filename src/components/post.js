import { Link } from "@reach/router"
import React, { useEffect } from "react"
import Postform from "../components/postform"
import { getPosts } from "../context/actions"
import { GlobalState } from "../context/state"

function Post() {
  const {
    state: { posts },
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
        </div>
      ))}
      <Postform />
    </div>
  )
}

export default Post
