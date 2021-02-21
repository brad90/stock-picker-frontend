import React, { useEffect, useState } from "react"
import { connect } from 'react-redux';
import styled from "styled-components"
import Video from "../file_example_MP4_480_1_5MG.mp4"
import "./videoDisplay.css"
import ResizableRect from 'react-resizable-rotatable-draggable'
import ResizableContent from "../../resizeContent/resizeContent.js"




const VideoDisplay = (props) => {

  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [top, setTop] = useState(100)
  const [left, setLeft] = useState(100)
  const [rotateAngle, setRotateAngle] = useState(0)
  

  const handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    setTop(top)
    setLeft(left)
    setWidth(width)
    setHeight(height)
  }

  const handleRotate = (rotateAngle) => {
    setRotateAngle(rotateAngle)
  }

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX)
    setTop(top + deltaY)
  }

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
          <>
            {/* <TextWrapper item={item} /> */}
          {/* <ResizableRect
            left={left}
            top={top}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
            // minWidth={10}
            // minHeight={10}
            zoomable='n, w, s, e, nw, ne, se, sw'
            rotatable={true}
            // onRotateStart={this.handleRotateStart}
            onRotate={handleRotate}
            // onRotateEnd={this.handleRotateEnd}
            // onResizeStart={this.handleResizeStart}
            onResize={handleResize}
            // onResizeEnd={this.handleUp}
            // onDragStart={this.handleDragStart}
            onDrag={handleDrag}
            // onDragEnd={this.handleDragEnd}
              /> */}
            <ResizableContent
            left={left}
            top={top}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
            // minWidth={10}
            // minHeight={10}
            zoomable='n, w, s, e, nw, ne, se, sw'
            rotatable={true}
            // onRotateStart={this.handleRotateStart}
            onRotate={handleRotate}
            // onRotateEnd={this.handleRotateEnd}
            // onResizeStart={this.handleResizeStart}
            onResize={handleResize}
            // onResizeEnd={this.handleUp}
            // onDragStart={this.handleDragStart}
            onDrag={handleDrag}
            font={item.fontFamily}
            // onDragEnd={this.handleDragEnd}/>
              />
            </>
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