import React, {useRef, useState} from "react"
import styled from "styled-components"


const SideBarSelector = () => {

 return (
  <OptionContainer>
   <OptionItem>TEXT</OptionItem>
   <OptionItem>TEXT</OptionItem>
   <OptionItem>TEXT</OptionItem>
   <OptionItem>TEXT</OptionItem>
   <OptionItem>TEXT</OptionItem>
  </OptionContainer>
 )
}


const OptionContainer = styled.ul`
  height: 100%;
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