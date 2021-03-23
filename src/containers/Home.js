import React, { useEffect, useState } from 'react';

import STOCKS from "../common/ticker_master.js"
import API_URL from "../common/apis"
import axios from "axios";




const Home = () => {

  const [filteredSearch, setFilteredSearch] = useState([])
  const [selectedSearch, setSelectedSearch] = useState("")
  
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


  const onInputSearch = (search) => {
    setSelectedSearch(search)
    if (search !== "") {
      const filteredStocks = STOCKS.filter(stock =>
      stock.includes(search.toUpperCase()))
      setFilteredSearch(filteredStocks)
    } else {
      setFilteredSearch([])
    }
  }
  
  const makeSearch = () => {

    axios.post(API_URL['browse'] + `search/${selectedSearch}`, {
      search: selectedSearch
    })
      .then((res) => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }


  const autoSuggestedStocks = filteredSearch.map((term) =>
    <li key={term} onClick={() => onSelectAuto(term)}>
    {term}
    </li>
  )
 

 return (
  <span>
     <h1>Check if its the right time to buy your stock?</h1>
      <input type="text" name="stockSearch" value={selectedSearch} style={{ textTransform: "uppercase" }} onChange={e => onInputSearch(e.target.value)} />
      <button onClick={() => makeSearch()}> Search </button>
  <ul>
    {autoSuggestedStocks}
  </ul>

  </span>
 )
}

export default Home