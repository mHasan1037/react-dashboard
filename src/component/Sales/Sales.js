import React from 'react'
import style from './sales.module.css'
import { IoIosArrowForward } from 'react-icons/io'
import Total from './Total'

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

const Sales = () => {
  return (
    <div className={style.salesContainer}>
        <div className={style.salesHeadline}>
            <h3>Sales</h3>
            <div className={style.headlineRight}>
               Dashboards <IoIosArrowForward style={{fontSize: '12px'}}/> Sales
            </div>
        </div>
        
        <div className={style.totalContainer}>
             <Total totalData={totalData} />
        </div>
    </div>
  )
}

export default Sales