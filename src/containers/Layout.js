import React from "react"
import styled from "styled-components"
import NavBar from "../components/Navbar.js"

const Layout = ({children}) => {

 return (
  <div>
       <NavBar />
       <LayoutStyling>{children}</LayoutStyling>
  </div>
 )
}

const LayoutStyling = styled.div`
     height: 90vh;
`

export default Layout