import React from "react"
import reducer, { initState } from "../context/reducer"
import StateProvider from "../context/state"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <StateProvider initState={initState} reducer={reducer}>
      <Header />
      {children}
      <Footer />
    </StateProvider>
  )
}

export default Layout
