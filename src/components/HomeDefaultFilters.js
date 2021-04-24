import React, { useState }from "react"
import styled from "styled-components"

const HomeDefaultFilters = () => {

   const defaultsList = ["Default1", "Default1", "Default1", "Default1"]
   const [activateDefault, setActiveDefault] = useState(0)

   const defaultOptionsItems = defaultsList.map((item, index) => (
      <li key={index} className={index == activateDefault ? "active" : " "} onClick={() => setActiveDefault(index)}>
         <a>{item}</a>
      </li>
   ))

   return (
      <HomeFilterDefaultSelect>
        <ul>
          {defaultOptionsItems}
        </ul>
      </HomeFilterDefaultSelect>
   )

}


const HomeFilterDefaultSelect = styled.div`
   width: 100%;   
   ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    li {
      border: solid 1px #f5f5f5;
      padding: 0.5rem 1rem;
      border-radius: 2rem; 
    }
  }
`


export default HomeDefaultFilters