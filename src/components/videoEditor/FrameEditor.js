import React from "react"
import styled from "styled-components"

import image0 from "../../frames/image0.jpg"

const FrameEdit = ({ frames }) => {

  const mapFrames = (
    <FramesUL>
      {frames.map(() => 
        <FrameImage src={image0}/>
      )}
    </FramesUL>)
    
  

 return (
  <FramesContainer>
    {mapFrames}
  </FramesContainer>
 )

}

const FramesContainer = styled.div`
  overflow: auto;
  overflow-y: hidden;
`;

const FramesUL = styled.ul`
  display: flex
`;


const FrameImage = styled.img`
  height:100px;
  display: inline;
`;

export default FrameEdit