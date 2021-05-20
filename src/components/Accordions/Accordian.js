import React, { useState } from "react"

import styled from "styled-components"
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"


const Accordion = () => {
   
   const [expanded, setExpanded] = useState(0);
   const categories = ["Something1", "Something1", "Something1"]

   const Accordion = withStyles({
      root: {
         borderBottom: '0.5px solid #dbdbdb',
         boxShadow: 'none',
         '&:not(:last-child)': {
            borderBottom: 0,
         },
         '&:before': {
            display: 'none',
         },
         '&$expanded': {
            margin: 'auto',
         },
      },
      expanded: {},
   })(MuiAccordion);

   const AccordionSummary = withStyles({
      root: {
         marginBottom: -1,
         display: 'flex',
         minHeight: 56,
         '&$expanded': {
            minHeight: 56,
         },
      },
      content: {
         '&$expanded': {
            margin: '12px 0',
         },
      },
      expanded: {},
   })(MuiAccordionSummary);

   const AccordionDetails = withStyles((theme) => ({
      root: {
         backgroundColor: '#fafafa',
         padding: theme.spacing(2),
      },
   }))(MuiAccordionDetails);


   const mapCategories = categories.map((item, index) => (
      <li key={index}>
         <Accordion square expanded={expanded === index} onChange={() => setExpanded(index)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                 <AccIcon>
                     {expanded === index &&
                        <FontAwesomeIcon icon={faMinus} style={{ color: "#dbdbdb" }} />
                     }
                     {expanded != index &&
                        <FontAwesomeIcon icon={faPlus} style={{ color: "##dbdbdb" }} />
                     }  
                  </AccIcon>
                  {item}
                
            </AccordionSummary>
        <AccordionDetails>
          soidhofjsdofijsodj
        </AccordionDetails>
      </Accordion>
      </li>
   ))

   return (
      <div>
         <ul>
            {mapCategories}
         </ul>
      </div>
   )
}

const AccIcon = styled.div`
   display:flex;
   justify-content:flex-start;
   padding-right: 1rem;
`


export default Accordion