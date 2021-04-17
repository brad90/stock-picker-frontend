import React, {useState} from 'react';
import styled from "styled-components"

import SearchBasic from "../components/Search/SearchBasic.js"
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const Home = () => {

  const [isLoadingCompany, setIsLoadingComapany] = useState(false)

  const override = css`
  display: block;
  margin: 0 auto; 
`;

 
  return (
    <>
      <AboveTheFold>
        <FoldDivContainer>
          <strong><h1>Value Investing<br/>in seconds</h1></strong>
          <p>Search and anlysis over 1000 + stocks in seconds</p>
        </FoldDivContainer>
        <FoldDivContainer>
          <SearchBasic isLoading={setIsLoadingComapany} />
          {isLoadingCompany && 
            <div>
              <h5>Loading...</h5>
              <br/>
            <BarLoader height={5} width={200} css={override} loading={true} color='silver'/>
            </div>
           }
        </FoldDivContainer>
      </AboveTheFold>
    </>
  )
    
 
  

}

const AboveTheFold = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  padding-top: 12rem;
`

const FoldDivContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`

export default Home