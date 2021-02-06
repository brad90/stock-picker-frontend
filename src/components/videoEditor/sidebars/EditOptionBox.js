import React from "react"
import styled from "styled-components"

const EditOptionBox = ({ fontpair }) => {
  
 return (
   <OptionBoxWrapper>
     {fontpair.map((font) => {
       return (
         <OptionBox key={font}style={{ fontFamily: font }}>
        {font}
      </OptionBox>)
     })}
   </OptionBoxWrapper>
 )
}

const OptionBox = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 152px;
  height: 152px;
  left: 0px;
  cursor: pointer;
  border: 0.5px solid #bfbfbf;
  margin: 0.1rem;
  font-size:24px;
  color: white;
`
const OptionBoxWrapper = styled.div`
  opacity: 1;
  display: flex;
  height: 152px;
  margin: 0.2rem;
  transition: opacity 250ms linear 0s;
  justify-content: center;
`

export default EditOptionBox