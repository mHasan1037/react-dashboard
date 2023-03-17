import React, { useEffect, useRef, useState } from 'react'
import style from './chatDisplay.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const ChatDisplay = ({id, name, img, status, lastMsg}) => {
    const [showSearch, setShowSearch] = useState(false)
    const [showOptions, setShowOptions] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState([])

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        if(inputValue){
           setMessages([...messages, inputValue])
           setInputValue('')
        }
    }

    useEffect(()=>{
        const handleOutsideClick = (event) => {
            if (showSearch && !event.target.closest(`.${style.headingIconBox}`)) {
                setShowSearch(false);
            }
          };
      
          document.addEventListener('click', handleOutsideClick);
      
          return () => {
            document.removeEventListener('click', handleOutsideClick);
          };
        
    }, [showSearch])

    useEffect(()=>{
        const handleOutsideClick = (event) =>{
            if(showOptions && !event.target.closest(`.${style.headingIconBox}`)){
                setShowOptions(false)
            }
        }

        document.addEventListener('click', handleOutsideClick)

        return () =>{
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [showOptions])

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
                <div className={style.headingIconBox}>
                    <AiOutlineSearch onClick={()=> setShowSearch(!showSearch)} style={{cursor: 'pointer', fontSize: '18px'}} />
                    {showSearch && (
                        <div className={style.headSearchBox}>
                            <input type="text" placeholder='Search...' />
                        </div>
                    )}
                </div>
                <div className={style.headingIconBox}>
                    <BsThreeDots onClick={()=> setShowOptions(!showOptions)} style={{cursor: 'pointer', fontSize: '18px'}} />
                    {showOptions && (
                    <ul className={style.headingOptionsBox}>
                        <li>Profile</li>
                        <li>Archive</li>
                        <li>Muted</li>
                        <li>Delete</li>
                   </ul>
                    )}
                </div>
            </div>
        </div>

        <div className={style.msgBox}>
            <div className={style.msgWrapper}>
                <div className={style.msgDisplay}>
                    <div className={style.senderBox}>
                         <div className={style.senderImgBox}>
                            {
                                img !== null ?
                                <img src={img} /> :
                                <div>
                                    {
                                        name[0]
                                    }
                                </div>
                            }
                         </div>
                         <div className={style.senderDetails}>
                            <p>{name}</p>
                            <p>{lastMsg}</p>
                            <div className={style.senderBoxArrow}></div>
                         </div>
                         <BiDotsVerticalRounded />
                    </div>
                {
                    messages.map((msg, idx)=>(
                        <div key={idx} className={style.msg}>
                            {msg}
                        </div>
                    ))
                }
                </div>
            </div>
            <form className={style.newMsgBox} onSubmit={handleFormSubmit} >
                    <input type="text" placeholder='Enter Message...' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                    <button type='submit'>Send <IoMdSend /></button>
            </form>
        </div>
    </div>
  )
}

export default ChatDisplay