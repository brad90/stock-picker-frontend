import React, {useState} from 'react';
import styled from "styled-components"
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBasic from "../components/Search/SearchBasic.js"
import HomeDefaultFilters from "../components/HomeDefaultFilters.js"





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
          <strong><h1>Pick stocks<br /> worth trading.</h1></strong>
          <br/>
          <h5>Screen 1000's of stocks and analysis stocks easily. <br/>Start searching and start stock picking today</h5>
        </FoldDivContainer>
        <FoldDivContainer>
          <SearchBasic isLoading={setIsLoadingComapany} />
          <br/>
          <p>OR</p>
          <FilterOption>Start your first filter<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem", color: "#1652f0" }} /></FilterOption>
          {isLoadingCompany && 
            <div>
              <h5>Loading...</h5>
              <br/>
            <BarLoader height={5} width={200} css={override} loading={true} color='silver'/>
            </div>
          }
        </FoldDivContainer>
      </AboveTheFold>
      <BelowTheFold>
        <HomeDefaultFilters/>
      </BelowTheFold>
          

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
  text-align: left;
`

const FilterOption = styled.a`
  color:#1652f0;
  font-weight: 700;
  padding: 2rem 0rem;
`

const BelowTheFold = styled.div`
  display: flex;
  margin-top: 12rem;
  justify-content: center
`





export default Home