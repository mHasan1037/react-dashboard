import React from 'react'
import Headline from '../../component/Headline/Headline'
import style from './analyticsContainer.module.css'

const AnalyticsContainer = () => {
  return (
    <div className={style.analytics}>
        <Headline title="Analytics" />
    </div>
  )
}

export default AnalyticsContainer