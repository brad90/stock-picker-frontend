import React, { useState, createRef } from "react";
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { API_URL } from "../../CONSTANTS";
import "./dropzone.css"


const Dropzone = () => {

  const [errors, setErrors] = useState([]);
  const [highlightDropZone, setHighlightDropZone] = useState(false)
  const [fileUploaded, setFileUpload] = useState("")

  const uploadInputRef = createRef()


  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setHighlightDropZone(true)
  }

  const onDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setHighlightDropZone(false)
  }

  const onDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setHighlightDropZone(true)
    console.log(e)
  }
  
  const fileUploadButton = () => {
    uploadInputRef.current.click()
  }

  const fileUploadInputChange = (e) => {
    const formData = new FormData()
    const file = e.target.files[0]
    formData.append("file", file)
    axios.post(API_URL + "upload/", formData).then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
    
  }

  return (
    <div
      onDragOver={(e) => onDragOver(e)}
      onDragEnter={(e)=> onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => fileUploadInputChange(e)}
      className={`drop-container ${highlightDropZone ? "drop-active": ""}` }
    >
      <div>
      <input id="fileButton" type="file" hidden ref={uploadInputRef} onChange={(e) => fileUploadInputChange(e)} />
        <button type="button" className="upload-button primary-btn" onClick={fileUploadButton}>Upload Content<FontAwesomeIcon icon={faCloudUploadAlt} className="button-icon"/></button>
		  </div>
      </div>
  )

  
}


export default Dropzone