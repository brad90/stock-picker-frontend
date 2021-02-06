import React from "react"
import styled from "styled-components"
import "./sidebar.css"


const SideBarSelector = ({ handleSelction, activeButton }) => {
  
  const DEFAULT_SELECTORS = ["TEXT1", "TEXT2", "TEXT3", "TEXT4", "TEXT5" ]


 return (
   <OptionContainer>
     {DEFAULT_SELECTORS.map((sel, indx) => {
       return <OptionItem key={indx} onClick={()=>handleSelction(indx)}className={(indx == activeButton)? "selction-active": "" }>{sel}</OptionItem>
     })}
  </OptionContainer>
 )
}

const OptionContainer = styled.ul`
  height: 100%;
  width:100%;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0px;
  background-color: #e1e1e1;
`

const OptionItem = styled.li`
  display:flex;
  border: 2px solid black;
  height: 20%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default SideBarSelector