import React from "react"
import styled from "styled-components"


import TimelineNav from "./TimelineNav"
import TimelineFrames from "./TimelineFrames"


const TimelineContainer = () => {
 return (
  <TimelineWrapper>
   <TimelinNavContainer>
    <TimelineNav/>
   </TimelinNavContainer> 
   <TimelineEditor>
     <TimelineFrames/>
   </TimelineEditor> 
  </TimelineWrapper>
 )
}

const TimelinNavContainer = styled.div`
 height: 20%;
`

const TimelineEditor = styled.div`
 height: 80%;
 background-color: pink;
`

const TimelineWrapper = styled.div`
 height:25vh;
 padding: 0.5rem 2rem;
`

export default TimelineContainer