import React from "react"
import styled from "styled-components"

const Navbar = () => {

 return (
    <NavBarContainer>
      <div>
         <h3>Stockify</h3>
      </div>
      <ListContainer>
         <ListItem><a href="www.google.com">Learn</a></ListItem>
      </ListContainer>
   </NavBarContainer>
  
 )
}


const NavBarContainer = styled.div`
 display: flex;
 width:100%;
 border-bottom: 1px solid #f5f5f5;`

const ListContainer = styled.ul`
 width: 100%
`

const ListItem = styled.li`
 display: block;
 float: right;
 padding: 1rem 2rem 1rem 0rem
`


export default Navbar