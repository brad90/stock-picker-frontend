import React from "react"
import styled from "styled-components"
import NavBar from "../components/Navbar.js"

const Layout = ({children}) => {

 return (
  <div>
       <NavBar />
       <main>{children}</main>
  </div>
 )
}

export default Layout