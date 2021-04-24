import React from 'react'
import styled from 'styled-components'
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarChart from "../components/Charts/BarChart"


const InfoSection = ({title, seriesInfo, graph}) => {
   return (
      <SectionWrapper>
         <span>
            <span>
               <h2>{title}</h2>
                  <span >
                     <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={'2x'}/>
                     <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={'2x'}/>
                  </span>
            </span>    
            </span>
               <p>Have profits grown over the last 5 Years? </p>
               <hr />
               <SectionContentContainer>
                  <div>
                  <GraphContainer>
                  <BarChart series={seriesInfo}/> 
                  </GraphContainer>
                     <ul>
                     <li><FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={'2x'} /><p>Increase in profits from Y1 to Y5</p></li>
                     <li><FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={'2x'} /><p>Increase in profits from Y1 to Y5</p></li>
                     <li><FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={'2x'}/></li>
                     </ul>
                  </div>
            <div>
            </div>
         </SectionContentContainer>   
      </SectionWrapper>

      
   )
}

const SectionWrapper = styled.div`
     padding: 3rem;
     background-color: white;
     border-radius: 10px;
     margin-bottom: 5rem;
     height: 100%;
     box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
     -webkit-box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
     -moz-box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
`

const SectionContentContainer = styled.div`
     display: flex
`

const GraphContainer = styled.div`
     width: 100%;
`

export default InfoSection