import React from 'react';
import styled from "styled-components"


import Layout from "../containers/Layout"
import SearchBasic from "../components/Search/SearchBasic.js"





const Home = () => {

 return (
   <Layout>
    <AboveTheFold>
       <FoldDivContainer>
         <h1>Quickly find quality value stocks in seconds</h1>
         <p>Search and anlysis over 1000 + stocks in seconds</p>
       </FoldDivContainer>
       <FoldDivContainer>
          <SearchBasic/>
      </FoldDivContainer>
    </AboveTheFold>
     
  </Layout>
 )
}

const AboveTheFold = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  padding-top: 5rem;
`

const FoldDivContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
`

export default Home