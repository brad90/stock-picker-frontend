import React, { useEffect, useState } from 'react';
import CurvedAreaChart from "../components/charts/CurvedAreaChart"
import LineChart from "../components/charts/LineChart"
import BarChart from "../components/charts/BarChart"
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
                         <span>
                              <h1>{props.location.state.companyname}({props.location.state.ticker})</h1>
                         </span>
                         <div>
                              <h2>About</h2>
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
                         </div>

                         <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Free Cashflow</h2>
                              </span>
                              
                              <hr />
                         </div>

                          <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Profit Growth</h2>
                              </span>
                              <hr />
                               <BarChart series={profit_growth}/> 
                         </div>

                          <div>
                               <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Revenue Growth</h2>
                              </span>
                              
                              <hr />
                              <LineChart series={revenue}/> 
                         </div>

                         <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Assest/Liabilities</h2>
                              </span>
                              
                              <hr />
                              <CurvedAreaChart series={assest_liabilites}/>
                         </div>

                          <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Profit Margin</h2>
                              </span>
                              
                              <hr />
                         </div>

                         <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>PE Ratio</h2>
                              </span>
                              
                              <hr />
                         </div>

                          <div>
                              <span className="section-header">
                                   <span className="section-icons">
                                        <FontAwesomeIcon icon={faTimesCircle} className="fail-check icon" size={70}/>
                                        <FontAwesomeIcon icon={faCheckCircle} className="success-check icon" size={70}/>
                                   </span>
                                   <h2>Shares Outstanding</h2>
                              </span>
                              
                              <hr />
                         </div>
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

export default ComapanyInfo