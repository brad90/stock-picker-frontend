import React, { useState } from 'react';
import {Link} from "react-router-dom";

import styled from "styled-components"
import { css } from "@emotion/core";

import BarLoader from "react-spinners/BarLoader";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBasic from "../components/Search/SearchBasic.js"

const Home = () => {

  const [isLoadingCompany, setIsLoadingComapany] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
 
  return (
    <>
      <AboveTheFold>
        {!isLoadingCompany &&
        <FoldDivContainer>
          <strong><h1>Pick stocks<br /> worth trading.</h1></strong>
          <br/>
          <h5>Screen 1000's of stocks and analysis stocks easily. <br/>Start searching and start stock picking today</h5>
          <SearchBasic isLoading={setIsLoadingComapany} isSearch={setIsSearch} />
          <br />
  
          {!isSearch && 
            <span>
            <p>OR</p>
            <Link to="/browse/stocks/filter">
              <FilterOption>Start filtering stocks<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "1rem", color: "#1652f0" }} /></FilterOption>
            </Link>
            </span>
          } 
        </FoldDivContainer>
        }

        {isLoadingCompany && 
          <LoadingSection>
          <span>
            <h3 style={{fontWeight:'700'}}>Fetching Data...</h3>
            <BarLoader height={4} width={400} css={override} loading={true} color='silver'/>
            </span>
            </LoadingSection>
          }
      </AboveTheFold>
    </>
  ) 

}

const override = css`
  display: block;
  margin: 0 auto; 
`;

const AboveTheFold = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  padding-top: 12rem
  justify-content: center;
`

const FoldDivContainer = styled.div`
  width: 100%;
  display: block;
  text-align: left;
  padding-top: 12rem;
`

const FilterOption = styled.a`
  color:#1652f0;
  font-weight: 700;
  padding: 2rem 0rem;
`

const LoadingSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  span{
    text-align: center;
  }

  h3{
    margin-bottom: 2rem;
  }
`



export default Home