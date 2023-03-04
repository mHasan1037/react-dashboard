import React, { useEffect, useRef, useState } from 'react'
import style from './total.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import ChartBox from './ChartBox'
import chartConfigs from './chartConfigs'

const Total = ({totalData}) => {
    const [isOpen, setIsOpen] = useState(new Array(totalData.length).fill(false))
    const ref = useRef(null)

    useEffect(()=>{
        document.addEventListener('mousedown', hadleClickOutside)

        return()=>{
            document.removeEventListener('mousedown', hadleClickOutside)
        }
    }, [])

    const hadleClickOutside = (event) =>{
        if(ref.current && !ref.current.contains(event.target)){
            setIsOpen(new Array(totalData.length).fill(false))
        }
    }

    const handleButtonClick = (idx) =>{
        const newIsOpen = new Array(totalData.length).fill(false)
        newIsOpen[idx] = true
        setIsOpen(newIsOpen)
    }


    

  return (
    <div className={style.boxContainer} ref={ref}>
        {
            totalData.map((data, idx)=>{
                const {title, number, des, time} = data

                return (
                    <div key={idx} className={style.box}>
                        <div className={style.boxTop}>
                            <p className={style.title}>{title}</p>
                            <div className={style.btnBox}>
                                <button onClick={()=> handleButtonClick(idx)} className={style.mainBtn}>{time} <IoIosArrowDown style={{fontSize: '10px'}}/></button>
                                {isOpen[idx] && (
                                    <div className={style.btnOptions}>
                                    <button>Monthly</button>
                                    <button>Weekly</button>
                                    <button>Yearly</button>
                                </div>
                                )}
                            </div>
                        </div>
                        <h2 className={style.number}>{number}</h2>
                        <span className={style.des}>{des}</span>
                        <ChartBox chartConfig={chartConfigs[idx]} style={{width: '100%'}}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Total