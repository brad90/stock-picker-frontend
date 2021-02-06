import React from "react"
import styled from "styled-components"

import EditOptionBox from "./EditOptionBox"



const SideBarEditSelector = () => {

 const FONTS = [["Hallington", "KGALittleSpark"], ["LandyNotes", "SilentLandField"], ["Hallington", "KGALittleSpark"], ["LandyNotes", "SilentLandField"], ["Hallington", "KGALittleSpark"], ["LandyNotes", "SilentLandField"]]
 
 return (
  <EditOptionBoxContainer>
   {FONTS.map((fontPair, indx) => {
    return (<EditOptionBox key={indx}fontpair={fontPair}/>)
   }
  )}
  </EditOptionBoxContainer>
 )
}

const EditOptionBoxContainer = styled.div`
 display: block;
 background-color:blue;
 height:auto;
`


export default SideBarEditSelector