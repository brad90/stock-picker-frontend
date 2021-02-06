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
  const [frames, setFrames] = useState([])
  const [activeSelection, setActiveSelection] = useState(0)

  useEffect(() => {
    axios.get(API_URL + "edit/").then((res) => {
      if (res.data) {
        setFrames(res.data.frames)
      }
    }).catch(error => {
      console.log(error)
    })
  }, [])


  const handleEditSelction = (idx) => {
    console.log(idx)
    setActiveSelection(idx)
  }


  if (!frames) {
    return  <Loading />
  } else {
    return ( 
      <VideoEditorContainer>
        <SideBarContainer>
          <SideBarSelector handleSelction={(idx) => handleEditSelction(idx)} activeButton={activeSelection}/>
        </SideBarContainer>
        <EditSelectorContainer>
          <SideBarEditSelector/>
        </EditSelectorContainer>
        <VideoDisplay/>
      </VideoEditorContainer>  
    )
  } 
}

const VideoEditorContainer = styled.div`
  display: flex; 
  height: 100%;
`;

const SideBarContainer = styled.div`
  width:8%;
  display:flex;
`

const EditSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    height: 90vh;
    width: 25%;
`

// style={{ paddingLeft: '1rem', height: "100%", overflow: "hidden", overflowY: "scroll"}}

export default VideoEditor