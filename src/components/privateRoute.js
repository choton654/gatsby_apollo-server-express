import { navigate } from "gatsby"
import React from "react"
import { GlobalState } from "../context/state"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const {
    state: { authenticated },
  } = GlobalState()

  if (!authenticated && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
