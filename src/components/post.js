import axios from "axios"
import React, { useEffect, useState } from "react"
function Post() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post")
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {post.map(post => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Post
