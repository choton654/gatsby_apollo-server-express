import axios from "axios"
import React, { useEffect, useState } from "react"

function User() {
  const [state, setstate] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then(res => {
        console.log(res.data)
        setstate(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div>
      {state.map(user => (
        <div key={user._id}>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default User
