import React from "react"
import styled from "styled-components"

const Navbar = () => {

 return (
    <NavBarContainer>
       <h3>Stockify</h3>
   <ListContainer>
    <ListItem><a>Learn</a></ListItem>
    <ListItem><a>Learn</a></ListItem>
    <ListItem><a>Learn</a></ListItem>
   </ListContainer>
  </NavBarContainer>
  
 )
}


const NavBarContainer = styled.div`
 display: flex;
 width:100%;
 background-color: pink
`

const ListContainer = styled.ul`
 width: 100%
`

const ListItem = styled.li`
 display: block;
 float: right;
 padding: 1rem 2rem 1rem 0rem
`


export default Navbar