import axios from "axios"
import jwt_decode from "jwt-decode"

export const appState = () => {
  let token

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common["Authorization"] = token
      const currentTime = Date.now() / 1000
      const decode = jwt_decode(token)
      if (decode.exp < currentTime) {
        token = null
        window.location.hash = "app/login"
      }
    }
  }

  return {
    token,
  }
}
