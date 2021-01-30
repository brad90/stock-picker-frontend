import React from "react"
import Draggable from 'react-draggable';
import styled from "styled-components"

const EditOptionBox = () => {
 return (
  <OptionBoxWrapper>
    <OptionBox>
    Drag1
    </OptionBox>
   <OptionBox>
     Drag2
    </OptionBox>
   </OptionBoxWrapper>
 )
}

const OptionBox = styled.div`
 position: relative;
 width: 152px;
 height: 152px;
 left: 0px;
 cursor: pointer;
 border: 2px solid black;
`

const OptionBoxWrapper = styled.div`
 opacity: 1;
 display: flex;
 height: 152px;
 margin: 0px -4px;
 transition: opacity 250ms linear 0s;
 justify-content: center;
`

export default EditOptionBox