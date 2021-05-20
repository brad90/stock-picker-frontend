import React, { useEffect, useState } from 'react';
import CurvedAreaChart from "../components/Charts/CurvedAreaChart"
import LineChart from "../components/Charts/LineChart"
import BarChart from "../components/Charts/BarChart"
import styled from "styled-components"
import InfoSection from "../components/InfoSection.js"
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CompanyInfo.css"


const ComapanyInfo = (props) => {

     const sideBarLinks = ["Summary", "Free Cashflow", "Profit Margin", "Revenue Growth", "Assets/Liabilites", "Price to Free Cashflow", "Somrthing"]
     const sideBarListItems = sideBarLinks.map((item) =>
          <li key={item} className="list-li">
               <a className="list-link-a">{item}</a>
          </li>
     )

     const assest_liabilites = [
          {
               'name': 'assets',
               'data': props.location.state.assets.assets.r_5y
          },
          {
               'name': 'liabilities',
               'data': props.location.state.assets.liabilities.r_5y
          }

     ]

     const revenue = [
          {
               'name': 'revenue',
               'data': props.location.state.income.revenue_growth.r_5y
          }
     ]

     const profit_growth = [
          {
               'name': 'profit margin',
               'data': props.location.state.income.profit_margin.r_5y
          }
     ]


     return (
          <div id="parent_div" className="company-page-wrapper">
                <div id="info-section" className="info-section-wrapper">
                    <div className="info-section">
                         <SectionWrapper>
                              <AboutWrapper>
                                   <AboutIconWrapper>
                                        <img src={require("../assets/images/company-logos/coke.jpeg").default} style={{width: '100%', height: '100%'}} />
                                   </AboutIconWrapper>
                                   <h1>{props.location.state.companyname}({props.location.state.ticker})</h1>
                              </AboutWrapper>
                              <div>
                                   <hr />
                                   <div className="about-tag-wrapper">
                                   <ul className="about-tag-ul">
                                        <li className="about-tag">S&P 500</li>
                                        <li className="about-tag">Finance</li>
                                        <li className="about-tag">NYSE</li>
                                   </ul>
                                   </div>
                                   <div>
                                        <p>
                                        Lorem ipsum Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,
                                        Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,
                                        Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, 
                                        </p>
                                   </div>
                                   <h3>Latest News</h3>
                              </div>
                         </SectionWrapper>

                         <SectionWrapper>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Free Cashflow</h2>
                              </span>
                              
                              <hr />
                         </SectionWrapper>

                         <InfoSection title="Profit Growth" seriesInfo={profit_growth}/>

                          <SectionWrapper>
                               <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Revenue Growth</h2>
                              </span>
                              
                              <hr />
                              <LineChart series={revenue}/> 
                         </SectionWrapper>

                         <SectionWrapper>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Assest/Liabilities</h2>
                              </span>
                              
                              <hr />
                              <CurvedAreaChart series={assest_liabilites}/>
                         </SectionWrapper>

                          <SectionWrapper>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Profit Margin</h2>
                              </span>
                              
                              <hr />
                         </SectionWrapper>

                         <SectionWrapper>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>PE Ratio</h2>
                              </span>
                              
                              <hr />
                         </SectionWrapper>

                          <SectionWrapper>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Shares Outstanding</h2>
                              </span>
                              <hr />
                         </SectionWrapper>
                    </div>
               </div>
               <div id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-inner">
                         <ul className="list-ul">
                         {sideBarListItems}
                         </ul>
                    </div>
                  
               </div>
          </div>
    
   
 )
}

const AboutWrapper = styled.div`
     display: flex;
`

const AboutIconWrapper = styled.div`
   overflow: hidden;
   border-radius: 5px;
   width: 3.5rem;
   height: 3.5rem;
   margin-right: 1rem;
`
const SectionWrapper = styled.div`
     padding: 3rem;
     background-color: white;
     border-radius: 10px;
     margin-bottom: 5rem;
     height: 100%;
     box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
     -webkit-box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
     -moz-box-shadow: 1px 10px 12px 0px rgba(204,199,199,0.75);
`

const SectionContentContainer = styled.div`
     display: flex
`

const GraphContainer = styled.div`
     width: 100%;
`


export default ComapanyInfo