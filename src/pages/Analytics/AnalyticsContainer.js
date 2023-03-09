import React, { useState } from 'react'
import Headline from '../../component/Headline/Headline'
import style from './analyticsContainer.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { AiOutlineUser, AiFillChrome } from 'react-icons/ai'
import { MdOutlineTimer } from 'react-icons/md'
import { GiStopwatch } from 'react-icons/gi'
import { BsGraphDown } from 'react-icons/bs'
import { FaFirefoxBrowser, FaSafari } from 'react-icons/fa'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { Chart } from "react-google-charts";
import usersData from './usersData'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
export const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Visits',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


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

export const secondLineOptions = {
  title: "Company Performance",
  curveType: "function",
};


const trafficSource = [
  {
    id: 1,
    web: 'www.abc.com',
    num: '3.82 k',
    percentage: '1.2%'
  },
  {
    id: 2,
    web: 'www.xyz.com',
    num: '3.04 k',
    percentage: '1.1%'
  },
  {
    id: 3,
    web: 'www.abc123.com',
    num: '2.64 k',
    percentage: '0.8%'
  }
]



export const LocationData = [
  ["Country", "Latitude"],
  ["Algeria", 36],
  ["Angola", -8],
  ["Benin", 6],
  ["Botswana", -24],
  ["Burkina Faso", 12],
  ["Burundi", -3],
  ["Cameroon", 3],
  ["Canary Islands", 28],
  ["Cape Verde", 15],
  ["Central African Republic", 4],
  ["Ceuta", 35],
  ["Chad", 12],
  ["Comoros", -12],
  ["Cote d'Ivoire", 6],
  ["Democratic Republic of the Congo", -3],
  ["Djibouti", 12],
  ["Egypt", 26],
  ["Equatorial Guinea", 3],
  ["Eritrea", 15],
  ["Ethiopia", 9],
  ["Gabon", 0],
  ["Gambia", 13],
  ["Ghana", 5],
  ["Guinea", 10],
  ["Guinea-Bissau", 12],
  ["Kenya", -1],
  ["Lesotho", -29],
  ["Liberia", 6],
  ["Libya", 32],
  ["Madagascar", null],
  ["Madeira", 33],
  ["Malawi", -14],
  ["Mali", 12],
  ["Mauritania", 18],
  ["Mauritius", -20],
  ["Mayotte", -13],
  ["Melilla", 35],
  ["Morocco", 32],
  ["Mozambique", -25],
  ["Namibia", -22],
  ["Niger", 14],
  ["Nigeria", 8],
  ["Republic of the Congo", -1],
  ["Réunion", -21],
  ["Rwanda", -2],
  ["Saint Helena", -16],
  ["São Tomé and Principe", 0],
  ["Senegal", 15],
  ["Seychelles", -5],
  ["Sierra Leone", 8],
  ["Somalia", 2],
  ["Sudan", 15],
  ["South Africa", -30],
  ["South Sudan", 5],
  ["Swaziland", -26],
  ["Tanzania", -6],
  ["Togo", 6],
  ["Tunisia", 34],
  ["Uganda", 1],
  ["Western Sahara", 25],
  ["Zambia", -15],
  ["Zimbabwe", -18],
];

export const locationOptions = {
  region: "002", // Africa
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

const countryData = [
    {
      name: 'Spain',
      percentage: '77%',
      per: '0.07%',
      img: 'https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
    },
    {
      name: 'Germany',
      percentage: '80%',
      per: '0.03%',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
    },
    {
      name: 'Italy',
      percentage: '73%',
      per: '0.01%',
      img: 'https://i.seadn.io/gae/IZtQ4ZQh3TjQzoRpVgudLf1HrHqNC8bESAEUJCZDP2SsHRQvSvMWB8veQAujUoSeRuhj_xMnydJxnvRT_BENHHgC6A-LPj9PRgGIwQ?auto=format&w=1000'
    }
]

const channelsData = [
  {
    sources: 'Social',
    sessions: '648',
    users: '432',
    bounceRate: 27.38
  },
  {
    sources: 'Direct',
    sessions: '524',
    users: '385',
    bounceRate: 35.16
  },
  {
    sources: 'Email',
    sessions: '432',
    users: '390',
    bounceRate: 30.2
  },
  {
    sources: 'Referral',
    sessions: '521',
    users: '423',
    bounceRate: 29.05
  },
  {
    sources: 'Others',
    sessions: '602',
    users: '553',
    bounceRate: 33.14
  }
]


const AnalyticsContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [action, setAction] = useState(false)
  const [secAction, setSecAction] = useState(false)
  const [thirdAction, setThirdAction] = useState(false)
  const [report, setReport] = useState(false)


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
                    height="440px"
                    data={data}
                    options={options}
                  />
                </div>
            </div>
            <div className={style.firstRight}>
                <div>
                   {
                    usersData.map((data)=>{
                      const {title, number, percentage, img, position, id} = data
                      const IconComponent = iconMapping[img];
                      return (
                        <div className={style.firstTop} key={id}>
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
                    height="300px"
                    data={activityData}
                    options={ActivityOptions}
                  />
                </div>
            </div>
        </div>


      {
        /*
        Second chart box
        */
      }
      <div className={style.secondChartBox}>
          <div className={style.secondFirst}>
               {
                usersData.slice(0,3).map(user =>{
                  const {title, number, percentage, data, id} = user

                  return (
                    <div key={id} className={style.SecondLineBox}>
                       <div>
                            <p style={{color: 'gray'}}>{title === 'Sessions Duration' ? 'Visitors' : title}</p>
                            <div className={style.secLineNum}>
                                <p style={{color: '#495057'}}>{number}</p>
                                <span style={{color: 'gray', fontSize: '12px'}}>
                                  {title === 'Sessions' ? '' : percentage}
                                  {title !== 'Sessions' ? 
                                      <FiArrowUpRight 
                                          style={{
                                             color: '#089bf0', 
                                             fontSize: '12px',
                                             marginLeft: '5px'
                                            }}/> : ''
                                  }
                                </span>
                            </div>
                       </div>
                       <div className={style.secondLineCharts}>  
                            <Chart
                              chartType="LineChart"
                              width="100px"
                              height="50px"
                              data={data}
                              options={secondLineOptions}
                            />
                       </div>
                    </div>
                  )
                })
               }
          </div>


          <div className={style.secondSecond}>
              <div className={style.secVisitHead}>
                 <h3 className={style.sechealine}>Visitors by Browser</h3>
                 <div className={style.secVisitBtns}>
                    <BiDotsHorizontalRounded style={{cursor: 'pointer'}} onClick={()=> setAction(!action)}/>
                    {
                      action && (
                    <div className={style.secHiddenBtns}>
                        <button>Action</button>
                        <button>Another action</button>
                        <button>Something else here</button>
                    </div>
                      )
                    }
                 </div>
              </div>
              <div className={style.secBrowserBox}>
                  <div className={style.secBrowser}> 
                      <AiFillChrome className={style.browserIcon}/>
                      <div>
                          <div className={style.secBrowserName}>
                             <p>Chrome</p>
                             <p>82%</p>
                          </div>
                          <div className={style.secBarBox}>
                             <div className={style.barBlue} style={{width: '82%'}}></div>
                          </div>
                      </div>
                  </div>
                  <div className={style.secBrowser}>
                      <FaFirefoxBrowser className={style.browserIcon} />
                      <div>
                          <div className={style.secBrowserName}>
                             <p>Firefox</p>
                             <p>70%</p>
                          </div>
                          <div className={style.secBarBox}>
                             <div className={style.barBlue} style={{width: '70%'}}></div>
                          </div>
                      </div>
                  </div>
                  <div className={style.secBrowser}>
                      <FaSafari className={style.browserIcon} />
                      <div>
                          <div className={style.secBrowserName}>
                             <p>Safari</p>
                             <p>76%</p>
                          </div>
                          <div className={style.secBarBox}>
                              <div className={style.barBlue} style={{width: '76%'}}></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className={style.secondThird}>
              <div className={style.secVisitHead} style={{marginBottom: '20px'}}>
                 <h3 className={style.sechealine}>Visitors Source</h3>
                 <div className={style.secVisitBtns}>
                    <BiDotsHorizontalRounded style={{cursor: 'pointer'}} onClick={()=> setSecAction(!secAction)}/>
                    {
                      secAction && (
                    <div className={style.secHiddenBtns}>
                        <button>Action</button>
                        <button>Another action</button>
                        <button>Something else here</button>
                    </div>
                      )
                    }
                 </div>
              </div>
              <div className={style.secondDoughnut}>
                  <Doughnut 
                     data={doughnutData} 
                     options={{
                        plugins: {
                          legend: {
                            display: false,
                          },           
                        }
                      }}
                  />;
              </div>
          </div>

          <div className={style.secondForth}>
              <div className={style.secVisitHead} style={{marginBottom: '30px'}}>
                 <h3 className={style.sechealine}>Traffic Source</h3>
                 <div className={style.secVisitBtns}>
                    <BiDotsHorizontalRounded style={{cursor: 'pointer'}} onClick={()=> setThirdAction(!thirdAction)}/>
                    {
                      thirdAction && (
                    <div className={style.secHiddenBtns}>
                        <button>Action</button>
                        <button>Another action</button>
                        <button>Something else here</button>
                    </div>
                      )
                    }
                 </div>
              </div>
              <div>
                 {
                 trafficSource.map((traffic)=>{
                   const {id, web, num, percentage} = traffic
                   return (
                    <div key={id} className={style.trafficBox}>
                       <div className={style.trafficId}>#{id}</div>
                        <div className={style.trafficData}>
                            <div>
                              <p style={{color: '#74788d', marginBottom: '10px'}}>{web}</p>
                              <p style={{color: '#495057'}}>{num}</p>
                            </div>
                            <p style={{
                               backgroundColor: '#EDFAF3', 
                               color: '#51d28c',
                               height: 'fit-content',
                               padding: '5px 10px',
                               borderRadius: '5px'
                            }}>
                              {percentage}
                              <FiArrowUpRight />
                            </p>
                        </div>
                    </div>
                   )
                 })
                 }
              </div>
          </div>
      </div>

      {
        /*
        Third Chart Box
        */
      }
      <div className={style.thirdChartBox}>
          <div className={style.thirdVisitor}>
               <div className={style.secVisitHead}>
                  <h3 className={style.sechealine}>Visitors by Location</h3>
                  <div className={style.secVisitBtns}>
                      <button className={style.secReportBtn} onClick={()=> setReport(!report)}>
                          <span>Report By:</span>
                          <span>Month <IoIosArrowDown /></span>
                      </button> 
                      {
                        report && (
                      <div className={style.secHiddenBtns}>
                          <button>Yearly</button>
                          <button>Monthly</button>
                          <button>Weekly</button>
                      </div>
                        )
                      }
                  </div>
                </div>


                <div className={style.thirdGeoContainer}>
                   <div className={style.thirdGoeChart}>
                        <Chart
                          chartType="GeoChart"
                          width="100%"
                          height="auto"
                          data={LocationData}
                          options={locationOptions}
                        />
                   </div>
                   <div className={style.analyticCountryBox}>
                       {
                        countryData.map((data, idx)=>{
                          const {name, percentage, per, img} = data

                          return (
                            <div key={idx} className={style.analyticDatas}>
                                <div className={style.flagContainer}>
                                   <img src={img} className={style.analyticeFlag}/>
                                </div>
                                <div className={style.analyticInfo}>
                                    <div className={style.analyticCoutryName}>
                                        <p style={{color: '#495057', marginBottom: '10px'}}>{name}</p>
                                        <p style={{
                                          backgroundColor: 'rgba(81,210,140,.1)',
                                          color: '#51d28c',
                                          fontSize: '12px',
                                          height: 'fit-content',
                                          padding: '5px 7px',
                                          borderRadius: '5px'
                                        }}>{per} <FiArrowUpRight /></p>
                                    </div>
                                    <p style={{color: '#495057'}}>{percentage}</p>
                                </div>
                            </div>
                          )
                        })
                       }
                   </div>
                </div>
          </div>


          <div className={style.channels}>
                <div className={style.secVisitHead}>
                  <h3 className={style.sechealine}>Channels</h3>
                  <div className={style.secVisitBtns}>
                      <button className={style.secReportBtn} onClick={()=> setReport(!report)}>
                          <span>Report By:</span>
                          <span>Month <IoIosArrowDown /></span>
                      </button> 
                      {
                        report && (
                      <div className={style.secHiddenBtns}>
                          <button>Yearly</button>
                          <button>Monthly</button>
                          <button>Weekly</button>
                      </div>
                        )
                      }
                  </div>
                </div>


                <div className={style.channelsTable}>
                      <table className={style.channelTable}>
                        <tr>
                            <th>Source</th>
                            <th>Sessions</th>
                            <th>Users</th>
                            <th>Bounce <br></br> Rate</th>
                        </tr>
                        {
                          channelsData.map((data) =>{
                            const {sources, sessions, users, bounceRate} = data
                            
                            return (
                              <tr>
                                  <td>{sources}</td> 
                                  <td>{sessions}</td> 
                                  <td>{users}</td> 
                                  <td style={{color: '#51d28c'}}>{bounceRate}%</td> 
                              </tr>
                            )
                          })
                        }
                      </table>
                </div>
          </div>
      </div>
    </div>
  )
}

export default AnalyticsContainer