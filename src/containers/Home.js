import React, { useState } from 'react';

import STOCKS from "../common/ticker_master.js"



const Home = () => {

 const [stocks, setStocks] = useState([])
 const [selectedStock, setSelectedStock] = useState("")

 const onSelectAuto = (stock) => {
   setSelectedStock(stock)
 }

 const autoSuggestStocks = stocks.map((stock) =>
  <li key={stock} onClick={() => onSelectAuto(stock)}>
   {stock}
  </li>
 )

 const onInputSearchStocks = (search) => {
  
  setSelectedStock(search)

  if (search != "") {
   const filteredStocks = STOCKS.filter(stock =>
   stock.includes(search.toUpperCase()))
   setStocks(filteredStocks)
  } else {
   setStocks([])
  }

  
 }
 

 return (
  <span>
   <h1>Check if its the right time to buy your stock?</h1>
   <input type="text" name="stockSearch" value={selectedStock}style={{textTransform:"uppercase"}} onChange={e => onInputSearchStocks(e.target.value)}/>
   <ul>
    {autoSuggestStocks}
   </ul>
  </span>
 )
}

export default Home