import React, { useState } from "react"
import { signupUser } from "../context/actions"
const Signup = () => {
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = e => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // const res = await axios.post("/api/signup", users)
    signupUser(users)
    setUsers({
      username: "",
      email: "",
      password: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        value={users.username}
        placeholder="username"
        required
        type="text"
      />
      <label htmlFor="email">Enter Email</label>
      <input
        id="email"
        name="email"
        onChange={handleChange}
        value={users.email}
        placeholder="email"
        required
        type="email"
      />
      <label htmlFor="password">Enter Password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        value={users.password}
        placeholder="password"
        required
        type="password"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Signup
