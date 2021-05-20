import React, {useState} from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StockFilters from "../components/Filters/StocksFilter"

const StocksFilter = () => {
   return (
      <StocksFilterWrapper>
         <div id="sideFilter">
            <StockFilters/>
         </div>
         <div id="companyResults">
            blah
         </div>
      </StocksFilterWrapper>
   )
}


const StocksFilterWrapper = styled.div`
   display: flex;
   padding: 2rem 0 0 0;
   
   #sideFilter {
      width: 25%;
      padding: 0.1rem;
      background-color: #fafafa;
   }

   #companyResults {
      width: 75%
   }
`

export default StocksFilter