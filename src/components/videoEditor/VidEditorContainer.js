import React, { useState, useEffect } from "react"
import Loading from "../loading/Loading.js"
import FrameEdit from "./FrameEditor.js"
import VideoDisplay from "./VideoDisplay.js"
import axios from "axios";
import { API_URL } from "../../CONSTANTS"
import styled from "styled-components"

const VideoEditor = () => {

  const[frames, setFrames] = useState([])
  
  useEffect(() => {
    axios.get(API_URL + "edit/").then((res) => {
      if (res.data) {
        setFrames(res.data.frames)
      }
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return ( 
    <>
      {!frames ? <Loading /> :
        <GridContainer>
          <div class="Sidebar">
             Side Bar
          </div>
          <div class="Video">
            <VideoDisplay/>
            <FrameEdit frames={frames}/>
          </div>
        </GridContainer>
      }
    </>
  )
}

const GridContainer = styled.div`
  display: grid;
	grid-template-columns: 30% 70%;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas: ". .";
	height: 95vh;
	border: 1px solid black;
`;

export default VideoEditor