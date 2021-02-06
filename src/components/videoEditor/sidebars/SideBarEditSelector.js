import React from "react"
import styled from "styled-components"

import EditOptionBox from "./EditOptionBox"

const SideBarEditSelector = () => {
 return (
  <EditOptionBoxContainer>
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
   <EditOptionBox />
  </EditOptionBoxContainer>
 )
}

const EditOptionBoxContainer = styled.div`
 display: block;
 background-color:blue;
`


export default SideBarEditSelector