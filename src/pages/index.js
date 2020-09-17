import axios from "axios"
import React, { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }, [])
  return <h1>Hello</h1>
}

export default IndexPage
