import React, { useState } from "react"
import { loginUser } from "../context/actions"
import { GlobalState } from "../context/state"
const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  })

  const {
    dispatch,
    state: { error },
  } = GlobalState()

  const handleChange = e => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(user)
    loginUser(user, dispatch)
    setuser({
      email: "",
      password: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter Email</label>
      <input
        id="email"
        name="email"
        onChange={handleChange}
        value={user.email}
        placeholder="email"
        required
        type="email"
      />
      <label htmlFor="password">Enter Password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        placeholder="password"
        required
        type="password"
      />
      <button type="submit">Log In</button>
      {error && <div>{error.error}</div>}
    </form>
  )
}

export default Login
