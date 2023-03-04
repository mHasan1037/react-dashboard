import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import style from './sales.module.css'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import { AiOutlineWarning, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai'
import Total from './Total'
import trail from '../../images/trail.png'

const totalData = [
    {
        title : 'TOTAL REVENUE',
        number: '$46.34k',
        des: 'Earning this month',
        time: 'Monthly'
    },
    {
        title : 'TOTAL REFUNDS',
        number: '$895.02',
        des: 'Refunds this month',
        time: 'Monthly'
    },
    {
        title : 'ACTIVE USERS',
        number: '6,985',
        des: 'Users this month',
        time: 'Weekly'
    },
    {
        title : 'ALL TIME ORDERS',
        number: '12, 584',
        des: 'Total Number of Orders',
        time: 'Yearly'
    }
]


const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };


const Sales = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenRight, setIsOpenRight] = useState(false)

    const handleButtonClick = () =>{
        setIsOpen(!isOpen)
    }

    const handleButtonClickRight = () =>{
        setIsOpenRight(!isOpenRight)
    }

  return (
    <div className={style.salesContainer}>
        <div className={style.salesHeadline}>
            <h3>Sales</h3>
            <div className={style.headlineRight}>
               Dashboards <IoIosArrowForward style={{fontSize: '12px'}}/> Sales
            </div>
        </div>
        
        <section className={style.totalContainer}>
             <Total totalData={totalData} />
        </section>

        {
            /*
            Sales section
            */
        }
        <section className={style.salesSection}>
             <div className={style.salesLeft}>
                <div style={{backgroundColor: 'white', padding: '20px'}}>
                    <div className={style.salesSt}>
                        <div>
                        <AiOutlineWarning style={{marginRight: '5px', color: '#947a32'}}/> 
                        <span style={{color: '#937931'}}>Your free trial expired in <b>21</b> days.</span>
                        </div>
                        <a href='#' style={{color: '#937931', fontWeight: 'bold'}}>Upgrade</a>
                    </div>
                    <div className={style.salesNd}>
                        <div className={style.salesUpgrade}>
                            <div className={style.upgradeDes}>
                                Upgrade your plan from a <span style={{fontWeight: 'bold', lineHeight: '35px'}}>Free trial,</span> to 'Premium Plan' 
                                <AiOutlineArrowRight style={{marginLeft: '8px', fontSize: '14px'}}/>
                            </div>
                            <button>Upgrade Account!</button>
                        </div>
                        <div className={style.salesImgBox}>
                              <img className={style.salesImg} src={trail} />
                        </div>
                    </div>
                </div>
                <div className={style.secondLeft}>
                    <div className={style.reportHeadline}>
                        <p style={{color: '#474e55'}}>Earning Reports</p>
                        <div className={style.btnBox}>
                                <button 
                                    onClick={handleButtonClick} 
                                    className={style.mainBtn}
                                >
                                    <span style={{fontWeight: 'bold'}}>Report By:</span> Monthly
                                    <IoIosArrowDown style={{fontSize: '10px'}}/>
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
                    <div className={style.reportBody}>
                        <div className={style.reportLeft}>
                            <div className={style.reportMonths}>
                                <div>
                                    <p className={style.reportMonth}>This Month</p>
                                    <h3 className={style.reportMoney}>$12, 582</h3>
                                    <span className={style.reportPer}>+15%</span>
                                </div>
                                <div>
                                    <p className={style.reportMonth}>Last Month</p>
                                    <h3 className={style.reportMoney}>$98, 741</h3>
                                </div>
                            </div>
                            <p className={style.reportPrev}><span style={{color: '#51d28c'}}>25.2% <AiOutlineArrowUp /></span> From previous period</p>
                            <button>Generate Reports <AiOutlineArrowRight /></button>
                        </div>
                        <div className={style.reportRight}>
                            <Doughnut style={{width: '100%'}} data={doughnutData} options={options} />
                        </div>
                    </div>
                </div>
             </div>

             <div className={style.salesRight}>
                    <div className={style.reportHeadline}>
                        <p style={{color: '#474e55'}}>Earning Reports</p>
                        <div className={style.btnBox}>
                                <button 
                                    onClick={handleButtonClickRight} 
                                    className={style.mainBtn}
                                >
                                    <span style={{fontWeight: 'bold'}}>Report By:</span> Monthly
                                    <IoIosArrowDown style={{fontSize: '10px'}}/>
                                </button>
                                {isOpenRight && (
                                <div className={style.btnOptions}>
                                    <button>Monthly</button>
                                    <button>Weekly</button>
                                    <button>Yearly</button>
                                </div>
                                )}
                        </div>
                    </div>

                    
             </div>
        </section>
    </div>
  )
}

export default Sales