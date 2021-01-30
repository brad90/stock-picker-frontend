import React from "react"
import styled from "styled-components"
import Video from "../file_example_MP4_480_1_5MG.mp4"



const VideoDisplay = () => {

  return (
      <VideoContainer>
        <video width="100%" height="100%" >
          <source src={Video} type="video/mp4"/>
        </video>
      </VideoContainer>
  )
}

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;
  height: 100%;
  align-items: center;
  z-index: -1;
  padding: 5rem;

`


export default VideoDisplay