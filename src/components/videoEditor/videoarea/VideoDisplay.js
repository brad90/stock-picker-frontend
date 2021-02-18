import React, { useState } from "react"
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import styled from "styled-components"
import Video from "../file_example_MP4_480_1_5MG.mp4"
import { Resizable } from "re-resizable";
import TextWrapper from "./textWrapper.js"
import "./videoDisplay.css"




const VideoDisplay = (props) => {

  return (
    <VideoContainer id="vidContainer">
      <Vid>
        <video width="100%" height="100%" controls>
          <source src={Video} type="video/mp4"/>
        </video>
      </Vid>

       <Content>
        {props.textObjects.map((item, index) => {
          return (
            <TextWrapper item={item}/>
          )
        })}
        </Content>
    </VideoContainer>
  )
}


const resizeStyle = {
  backgroundColor: "pink", 
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const mapStateToProps = state => {
  return { textObjects: state.editOptionReducer.textObjects }  
};


const ContentEditable = styled.span`
    width: inherit;
    padding:0.5rem;
    minWidht: 55px;
`

const VideoContainer = styled.div`
    width:100%; 
    height:100%;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
`

const Vid = styled.div`
    position: absolute; 
    top: 0; left:0;
    width: 100%; height: 100%; 
    z-index: -1;
    height: 100%; 
    width: 100%;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    overflow: hidden;
    padding:0;
    background-color: yellow;
    height: 500px; 
    width: 500px;
`





export default connect(mapStateToProps)(VideoDisplay);