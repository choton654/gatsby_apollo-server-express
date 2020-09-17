import axios from "axios"
import React, { useState } from "react"
const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(user)
    axios
      .post("http://localhost:3000/api/login", user)
      .then(res => {
        console.log(res.data)
        setuser({
          email: "",
          password: "",
        })
      })
      .catch(err => console.error(err))
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
    </form>
  )
}

export default Login
