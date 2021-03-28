import React, { useEffect, useState } from 'react';

// import axios from "axios";

const ComapanyInfo = (props) => {
 return (
  <span>
       <h1>Check if its the right time to buy your stock?</h1>
       {props.match.params.searchTicker}
  </span>
 )
}

export default ComapanyInfo