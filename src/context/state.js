import React, { createContext, useContext, useReducer } from "react"

const StateContext = createContext()

export default function StateProvider({ initState, reducer, children }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export const GlobalState = () => useContext(StateContext)
