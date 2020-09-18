import React, { useEffect } from "react"
import { getCurrentUser } from "../context/actions"
import { GlobalState } from "../context/state"

function User() {
  const {
    state: { user },
    dispatch,
  } = GlobalState()

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  return (
    <div>
      <div>
        <h1>{user?.username}</h1>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}

export default User
