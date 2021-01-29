import { Link } from "gatsby"
import React from "react"
import { logoutUser } from "../context/actions"
import { GlobalState } from "../context/state"

const Header = props => {
  const {
    dispatch,
    state: { authenticated },
  } = GlobalState()
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
        {authenticated ? (
          <>
            <li>
              <Link to="/app/user">User</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  logoutUser(dispatch)
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/app/login">Login</Link>
            </li>
            <li>
              <Link to="/app/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Header
