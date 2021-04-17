import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from "styled-components"


import STOCK_TITLES from "../../common/tickerTitle_master.js"
import STOCK_DETAIL from "../../common/tickerDetail_master.js"
import API_URL from "../../common/urls"
import axios from "axios";

const SearchBasic = ({ searchTerm }) => {


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
  }


  const autoSuggestedStocks = filteredSearch.map((term) =>
    <AutoSuggestListItem key={term} onClick={() => onSelectAuto(term)}>
      <ListItemDiv>
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
  
  
  const makeSearch = () => {
    const ticker = STOCK_DETAIL[selectedSearch]['ticker']

    axios.post(API_URL['browse'] + `search/${ticker}`, {
      search: ticker
    })
      .then((res) => {
        res.data.companyname = STOCK_DETAIL[selectedSearch]['pretty']
        history.push({
        pathname: `/browse/${selectedSearch}`,
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
    <SearchWarpper type="text" name="stockSearch" value={searchTerm} style={{ textTransform: "uppercase" }} placeholder="Search Company Name" autocomplete="new-password" onChange={e => onInputSearch(e.target.value)} onFocus={e => onFocus(e) }/>
    <AutoSuggestWrapper>
        <AutoSuggestBox style={{boxShadow: filteredSearch ? '':' 1px 1px 13px 5px rgba(227,227,227,0.75)'}}>
        {autoSuggestedStocks}
      </AutoSuggestBox>
    </AutoSuggestWrapper>
    </>
  )
}

const SearchWarpper = styled.input`
  background-color: green;
  border-radius: 20px;
  width: 30%;
  margin: 1rem 1rem 0rem 1rem;
  padding: 0.5rem 1.5rem;
  color: white
`

const AutoSuggestWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const AutoSuggestBox = styled.ul`
  width: 27%;
  background-color: white;
`

const AutoSuggestListItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid pink;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
`

const ListItemDiv = styled.div`
  text-align: left
`





export default SearchBasic