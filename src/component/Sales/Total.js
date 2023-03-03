import React, { useEffect, useRef, useState } from 'react'
import style from './total.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import ChartBox from './ChartBox'

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


    const chartConfigs = [
        {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, 19, 3, 5, 2, 3, 9],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        },
        {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: 'Dataset 2',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        },
        {
          type: 'pie',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: 'Dataset 2',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        },
        {
          type: 'bubble',
          data: {
            datasets: [
              {
                label: 'Bubble Chart Dataset',
                data: [
                  {
                    x: 20,
                    y: 30,
                    r: 15
                  },
                  {
                    x: 40,
                    y: 10,
                    r: 25
                  },
                  {
                    x: 60,
                    y: 40,
                    r: 10
                  },
                  {
                    x: 35,
                    y: 35,
                    r: 10
                  }
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
              }
            ]
          },
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                title: {
                  display: true,
                  text: 'X Axis Title'
                }
              },
              y: {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'Y Axis Title'
                }
              }
            }
          }
        }
      ];


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