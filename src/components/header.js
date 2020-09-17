import { Link } from "gatsby"
import React from "react"

const Header = props => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app/post">Post</Link>
        </li>
        <li>
          <Link to="/app/user">User</Link>
        </li>
        <li>
          <Link to="/app/login">Login</Link>
        </li>
        <li>
          <Link to="/app/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
