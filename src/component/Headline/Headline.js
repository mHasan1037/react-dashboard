import React from 'react'
import style from './headline.module.css'
import { IoIosArrowForward } from 'react-icons/io'

const Headline = ({title}) => {
  return (
    <div className={style.salesHeadline}>
            <h3>{title}</h3>
            <div className={style.headlineRight}>
               Dashboards <IoIosArrowForward style={{fontSize: '12px'}}/> {title}
            </div>
    </div>
  )
}

export default Headline