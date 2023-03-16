import React from 'react'
import style from './chatDisplay.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

const ChatDisplay = ({id, name, img, status, lastMsg}) => {

  return (
    <div className={style.mainContainer}>
        <div className={style.displayHeading}>
            <div className={style.profileBox}>
                <div className={style.profileImg}>
                    {
                        img !== null ?
                        <img src={img}/> :
                        <div>{name[0]}</div>
                    }
                </div>
                <div className={style.profileName}>
                    <p className={style.personName}>{name}</p>
                    <div className={style.activeStatus}>
                        <div style={status === true ? {backgroundColor: 'green'} : status === false ? {backgroundColor: 'orange'} : {backgroundColor: 'gray'}} className={style.activeLight}></div>
                        <div className={style.activeText}>{status === true ? 'Online' : status === false ? 'Offline' : 'Not Active'}</div>
                    </div>
                </div>
            </div>
            <div className={style.headingIcons}>
                <AiOutlineSearch style={{cursor: 'pointer'}} />
                <BsThreeDots style={{cursor: 'pointer'}} />
            </div>
        </div>
    </div>
  )
}

export default ChatDisplay