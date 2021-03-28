import React, { useEffect, useState } from 'react';
import { Redirect, useHistory} from 'react-router-dom'

import STOCK_TITLES from "../common/tickerTitle_master.js"
import STOCK_DETAIL from "../common/tickerDetail_master.js"
import API_URL from "../common/urls"
import axios from "axios";




const Home = () => {

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
        console.log(res)
        history.push({
        pathname: `/browse/${selectedSearch}`,
        state: { info: res.data[0] }
      })
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