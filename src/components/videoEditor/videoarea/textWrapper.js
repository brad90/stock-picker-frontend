import React, { useState } from "react"
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { Resizable } from "re-resizable";
import Text from "./text.js"

const TextWrapper = ({item}) => {


 const [textChildHeight, setChildHeight] = useState(0)
 const [textChildWidth, setChildWidth] = useState(55)

 const setDimensions = (height, width) => {
  setChildHeight(height)
  setChildWidth(width)
 }

  return (
   <Draggable>
     <Resizable minWidth={55} style={resizeStyle} height={textChildHeight} width={textChildWidth}>
     <Text text={item.fontFamily} setDimensions={setDimensions}/>
     </Resizable>
   </Draggable>
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


export default connect(mapStateToProps)(TextWrapper);