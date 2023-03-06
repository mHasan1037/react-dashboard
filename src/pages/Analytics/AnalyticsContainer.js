import React, { useState } from 'react'
import Headline from '../../component/Headline/Headline'
import style from './analyticsContainer.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineTimer } from 'react-icons/md'
import { GiStopwatch } from 'react-icons/gi'
import { BsGraphDown } from 'react-icons/bs'
import { Chart } from "react-google-charts";
import usersData from './usersData'

const iconMapping = {
  'AiOutlineUser': AiOutlineUser,
  'MdOutlineTimer': MdOutlineTimer,
  'GiStopwatch': GiStopwatch,
  'BsGraphDown': BsGraphDown,
};

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "90%", height: "70%" },
  legend: { position: 'top' }
};


export const activityData = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const ActivityOptions = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};


const AnalyticsContainer = () => {
  const [isOpen, setIsOpen] = useState()
  return (
    <div className={style.analytics}>
        <Headline title="Analytics" />
        
        <div className={style.firstChartBox}>
            <div className={style.firstLeft}>
                <div className={style.firstHeading}>
                    <p style={{color: 'rgb(85, 84, 84)', fontSize: '18px'}}>Daily Active Users</p>
                    <div className={style.sortBtnBox}>
                          <button onClick={()=> setIsOpen(!isOpen)} className={style.sortBtn}>
                             <span style={{fontWeight: 'bold', marginRight: '2px', color: 'gray'}}>Sort By: </span>
                             <span style={{color: 'rgb(85, 84, 84)'}}>Yearly</span>
                             <IoIosArrowDown style={{fontSize: '10px', marginLeft: '2px'}}/>
                          </button>
                                {isOpen && (
                                    <div className={style.btnOptions}>
                                      <button>Monthly</button>
                                      <button>Weekly</button>
                                      <button>Yearly</button>
                                    </div>
                                )}
                    </div>
                </div>

                <div className={style.firstVisitors}>
                    <div style={{color: 'gray'}}>
                       <p style={{marginBottom: '5px'}}>Total Visitors</p>
                       <div className={style.totalVisitor}>
                          <h2>18.2 k</h2>
                          <div className={style.totalVisitPer}>
                            <p>1.4 %</p>
                            <span><FiArrowUpRight style={{color: 'lightgreen', fontSize: '12px'}}/></span>
                          </div>
                       </div>
                    </div>
                    <div className={style.firstVisitorRight}>
                         <div className={style.visitorData}>
                           <h2>3.85 k</h2>
                           <p>Sessions</p>
                         </div>
                         <div className={style.visitorData}>
                            <h2>24.03%</h2>
                            <p>Bounce Rate</p>
                         </div>
                         <div className={style.visitorData}>
                            <h2>52k</h2>
                            <p>Users</p>
                         </div>
                    </div>
                </div>

                {/*
                  Chart starts from here
                */}
                <div className={style.totalChart}>
                  <Chart
                    chartType="AreaChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                  />
                </div>
            </div>
            <div className={style.firstRight}>
                <div>
                   {
                    usersData.map((data, idx)=>{
                      const {title, number, percentage, img, position} = data
                      const IconComponent = iconMapping[img];
                      return (
                        <div className={style.firstTop}>
                             <div className={style.firstUserBox}>
                                 <div className={style.firstIcon}><IconComponent /></div>
                                 <div className={style.firstName}>
                                    <p>{title}</p>
                                    <p>{number}</p>
                                 </div>
                             </div>
                             <div style={{
                               backgroundColor: position === 'up' ? '#EDFAF3' : '#FEEDED',
                               color: position === 'up' ? '#51d28c' : '#f34e4e',
                               fontSize: '12px',
                               padding: '3px 6px',
                               borderRadius: '5px'
                              }}>
                                {percentage}
                                <span style={{fontSize: '10px', marginLeft: '3px'}}>{position === 'up' ? <FiArrowUpRight /> : <FiArrowDownRight /> }</span>
                             </div>
                        </div>
                      )
                    })
                   }
                </div>
                <div>
                  <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={activityData}
                    options={ActivityOptions}
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsContainer