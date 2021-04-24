import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import STOCK_TITLES from "../../common/tickerTitle_master.js"
import STOCK_DETAIL from "../../common/tickerDetail_master.js"
import API_URL from "../../common/urls"
import axios from "axios";

const SearchBasic = ({ isLoading }) => {


  const [filteredSearch, setFilteredSearch] = useState([])
  const [selectedSearch, setSelectedSearch] = useState("")

  let history = useHistory()
  
  useEffect(() => {
    document.addEventListener("keyup", event => {
      if (event === 13) {
          makeSearch()
        }
    })
  })
 
  const onSelectAuto = (term) => {
    setSelectedSearch(term)
    setFilteredSearch([])
    makeSearch(term)
  }

  const autoSuggestedStocks = filteredSearch.map((term) =>
    <AutoSuggestListItem key={term} onClick={() => onSelectAuto(term)}>
      <ListItemDiv>
        <ListItemIconWrapper>
          <img src={require("../../assets/images/company-logos/coke.jpeg").default} style={{ width: '100%', height: '100%' }}/>
        </ListItemIconWrapper>
        {term}
      </ListItemDiv>
    </AutoSuggestListItem>
  )


  const onInputSearch = (search) => {
    setSelectedSearch(search)
    if (search !== "") {
      const filteredStocks = STOCK_TITLES.filter(stock =>
      stock.includes(search.toUpperCase()))
      setFilteredSearch(filteredStocks)
    } else {
      setFilteredSearch([])
    }
  }
  

  const makeSearch = (selectedTick) => {
    const ticker = STOCK_DETAIL[selectedTick]['ticker']
    isLoading(true)
    axios.post(API_URL['browse'] + `search/${ticker}`, {
      search: ticker
    })
      .then((res) => {
        res.data.companyname = STOCK_DETAIL[selectedTick]['pretty']
        history.push({
        pathname: `/browse/${selectedTick}`,
        state: res.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  const onFocus = (e) => {
    e.target.setAttribute('autocomplete', 'off');
  }

  return (
    <>
      <SearchWarpper type="text" name="stockSearch" value={selectedSearch} style={{ textTransform: "uppercase" }} placeholder="Search By Company Name" autocomplete="new-password" onChange={e => onInputSearch(e.target.value)} onFocus={e => onFocus(e)}/>
      <FontAwesomeIcon icon={faSearch} style={{marginLeft: "-3rem", color: "white"}}/>
      <AutoSuggestWrapper>
        <AutoSuggestBox style={{boxShadow: filteredSearch ? '':' 1px 1px 13px 5px rgba(227,227,227,0.75)'}}>
        {autoSuggestedStocks}
        </AutoSuggestBox>
      </AutoSuggestWrapper>
    </>
  )
}

const SearchWarpper = styled.input`
  background-color: #1652f0;
  width: 30%;
  height: 4rem; 
  margin-top:2.5rem;
  padding: 0.5rem 1.5rem;
  color: #dbdbdb
`

const AutoSuggestWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: left;
`

const AutoSuggestBox = styled.ul`
  width: 100%;
  background-color: white;
`

const AutoSuggestListItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: #1652f0;;
  }
`

const ListItemDiv = styled.div`
  text-align: left;
  max-height: 2rem;
  display: flex;
  align-items: center;
`
const ListItemIconWrapper = styled.div`
   overflow: hidden;
   border-radius: 5px;
   width: 2rem;
   height: 2rem;
   margin-right: 1rem;
`





export default SearchBasic