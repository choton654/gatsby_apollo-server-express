import axios from "axios"

export const appState = () => {
  let token

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common["Authorization"] = token
    }
    // const currentTime = Date.now() / 1000;
    // if (decode.exp < currentTime) {
    //   decode = {};
    //   token = null;
    //   profile = null;
    //   window.location.href = '/Login';
    // }
  }

  return {
    token,
  }
}
