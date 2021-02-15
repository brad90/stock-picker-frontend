import React, { useState } from "react"
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import styled from "styled-components"
import Video from "../file_example_MP4_480_1_5MG.mp4"
import { Resizable } from "re-resizable";
import "./videoDisplay.css"




const VideoDisplay = (props) => {

  const [activeDrags, setActiveDrags] = useState(0)

  const handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  const onStart = () => {
    setActiveDrags(activeDrags + 1)
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1)
  };

  // For controlled component
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  const onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  const onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  const dragHandlers = { onStart: onStart, onStop: onStop }; 

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
            <Draggable bounds="parent" {...dragHandlers}>
              <Resizable
                  defaultSize={{
                  width:'fitContent',
                  height: 'fitContent',
                }}
                style={resizediv}
                >
                <TextBox contentEditable>
                  {item.fontFamily}
                </TextBox>
              </Resizable>
            </Draggable>
          )
        })}
        </Content>
    </VideoContainer>
  )
}


const mapStateToProps = state => {
  return { textObjects: state.editOptionReducer.textObjects } 
 
};


const resizediv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px blue",
};

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

const TextBox = styled.div`
  display: flex;  
  padding: 0.5rem;
  width: inherit;
  height: inherit;
  min-width: fit-content;
  min-height: fit-content;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-wrap: flex;
`





export default connect(mapStateToProps)(VideoDisplay);