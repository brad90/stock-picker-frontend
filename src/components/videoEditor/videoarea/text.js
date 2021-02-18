import React from "react"
import { connect } from 'react-redux';
import styled from "styled-components"
import Measure from 'react-measure'
import "./videoDisplay.css"

const Text = ({text, setDimensions}) => {

 return (
  <Measure
   bounds
   onResize={ div => setDimensions(div.bounds.height, div.bounds.width)}
  >
   {({ measureRef }) => (
    <ContentEditable ref={measureRef} className="textarea" contentEditable >
     {text}
    </ContentEditable>
   )}
   </Measure>
  )
}

const ContentEditable = styled.span`
    width: inherit;
    padding:0.5rem;
    minWidth: 55px;
`

const mapStateToProps = state => {
  return { textObjects: state.editOptionReducer.textObjects }  
};


export default connect(mapStateToProps)(Text);