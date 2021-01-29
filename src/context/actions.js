import axios from "axios"
import { navigate } from "gatsby"
import { actionType } from "./types"

export const setAuthToken = (token, dispatch) => {
  if (token) {
    dispatch({ type: actionType.SET_TOKEN, payload: token })
    axios.defaults.headers.common["Authorization"] = token
  } else {
    dispatch({ type: actionType.SET_TOKEN, payload: null })
    delete axios.defaults.headers.common["Authorization"]
  }
}

export const loginUser = (user, dispatch) => {
  axios
    .post("/api/login", user)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data)
      dispatch({
        type: actionType.SET_TOKEN,
        payload: res.data,
      })
      setAuthToken(res.data, dispatch)
      getCurrentUser(dispatch)
      navigate("/app/user")
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const signupUser = (user, dispatch) => {
  axios
    .post("/api/signup", user)
    .then(res => {
      console.log(res.data)
      navigate("/app/login")
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const getPosts = dispatch => {
  axios
    .get("/api/post")
    .then(res => {
      console.log(res.data)
      dispatch({
        type: actionType.SET_POSTS,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

export const deletePost = (id, dispatch) => {
  axios
    .delete(`/api/post/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: actionType.DELETE_POST,
        payload: id,
      })
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const getSinglePost = (id, dispatch) => {
  axios
    .get(`/api/post/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: actionType.SET_SINGLE_POST,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

export const createPosts = (post, dispatch) => {
  axios
    .post("/api/post", post)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: actionType.SET_POST,
        payload: res.data,
      })
      navigate("/app/post")
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const createComment = (postid, comment, dispatch) => {
  axios
    .post(`/api/${postid}/comment`, comment)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: actionType.SET_COMMENT,
        payload: res.data,
      })
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const deleteComment = (id, dispatch) => {
  axios
    .delete(`/api/comment/${id}`)
    .then(res => {
      console.log(res)
      dispatch({
        type: actionType.DELETE_COMMENT,
        payload: id,
      })
    })
    .catch(err => {
      console.error(err)
      dispatch({
        type: actionType.SET_ERROR,
        payload: err.response.data,
      })
    })
}

export const getCurrentUser = dispatch => {
  axios
    .get("/api/current")
    .then(res => {
      console.log(res.data)
      dispatch({ type: actionType.SET_USER, payload: res.data })
    })
    .catch(err => console.error(err))
}

export const logoutUser = dispatch => {
  axios
    .get("/api/logout")
    .then(res => {
      localStorage.removeItem("token")
    })
    .catch(err => console.error(err))
  setAuthToken(false, dispatch)
  dispatch({ type: actionType.LOGOUT })
}
