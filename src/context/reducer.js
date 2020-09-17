import { appState } from "../utils/appState"
import { actionType } from "./types"
const { token } = appState()

export const initState = {
  posts: [],
  post: {},
  user: {},
  token: token || null,
  authenticated: token ? true : false,
}

export default function reducer(state, action) {
  switch (action.type) {
    case actionType.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case actionType.SET_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case actionType.SET_SINGLE_POST:
      return {
        ...state,
        post: action.payload,
      }
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      }
    case actionType.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        authenticated: true,
      }
    default:
      return state
  }
}
