import React, { useState, useEffect } from "react"
import axios from "axios";
import { API_URL } from "../../CONSTANTS"
import styled from "styled-components"

import Loading from "../loading/Loading.js"
import VideoDisplay from "./videoarea/VideoDisplay.js"
import SideBarSelector from "../videoEditor/sidebars/SideBarSelector"
import SideBarEditSelector from "../videoEditor/sidebars/SideBarEditSelector"
import TimelineContainer from "../videoEditor/timeline/TimelineContainer.js"



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
        <>
        <GridContainer>
          <div>
             <SideBarSelector/>
          </div>
            <EditSelectorContainer>
              <SideBarEditSelector/>
            </EditSelectorContainer>
            <VideoDisplay/>
        </GridContainer>
          <TimelineContainer/>
        </>
      }
    </>
  )
}

const GridContainer = styled.div`
  display: grid;
	grid-template-columns: 8% 320px 70%;
	grid-template-rows: 100%;
	gap: 0px 0px;
	grid-template-areas: ". .";
  border: 1px solid black;
  height: 70vh;
`;

const EditSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    padding: 2rem 0;
`

// style={{ paddingLeft: '1rem', height: "100%", overflow: "hidden", overflowY: "scroll"}}

export default VideoEditor