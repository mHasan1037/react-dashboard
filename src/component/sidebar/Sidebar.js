import React, { useState, useContext, useEffect } from 'react'
import style from './sidebar.module.css'
import { IoLogoJavascript } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiMonitor } from 'react-icons/fi'
import { AiOutlinePieChart, AiOutlineFolder, AiOutlineMail } from 'react-icons/ai'
import { SlCalender } from 'react-icons/sl'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { TfiGallery } from 'react-icons/tfi'
import NavExpandHook from '../../hooks/NavExpandHook'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [expand, setExpand] = useState(true)
    const [showEmail, setShowEmail] = useState(false)
    const [showContact, setShowContact] = useState(false)

    const { sidebarSize, setSidebarSize } = useContext(NavExpandHook)

    const toggleExpand = ()=>{
        setExpand(!expand)
        setSidebarSize(prev => prev === 250 ? 60 : 250)
    }

    useEffect(()=>{
        function handleResize(){
            window.innerWidth < 768 ? setExpand(false) : setExpand(true)
            expand ? setSidebarSize(60) : setSidebarSize(250)
        }

        window.addEventListener('resize', handleResize)

        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (
    <section className={`${style.sidebarContainer} ${expand ? '' : style.expand}`}>
        <div className={style.logoSection}>
            <div className={style.LogoBox}>
                <div className={style.iconBox}>
                    <IoLogoJavascript className={style.icon} onClick={toggleExpand}/>
                </div>
                <h2 style={{display: expand ? 'block' : 'none'}}>mHasan</h2>
            </div>
            <RxHamburgerMenu 
                onClick={toggleExpand} 
                    style={{
                        display: expand ? 'block' : 'none', 
                        cursor: 'pointer'
                    }} 
            />
        </div>
        <ul className={style.mainBoard}>
           <div className={style.boards}>
                <p style={{display: expand ? 'block' : 'none'}}>DASHBOARDS</p>
                <li>
                    <NavLink to="/react-dashboard" className={style.board}>
                        <div className={style.boardName}>
                            <FiMonitor className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Sales</span>
                        </div>
                        <span className={style.boardRight} style={{display: expand ? 'block' : 'none'}}>5+</span>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Sales</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics" className={style.board}>
                        <div className={style.boardName}>
                            <AiOutlinePieChart className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Analytics</span>      
                        </div>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Analytics</span>
                    </NavLink>
                </li>
           </div>
           <div className={style.boards}>
                <p style={{display: expand ? 'block' : 'none'}}>APPLICATIONS</p>
                <li>
                    <NavLink to="/calendar" className={style.board}>
                        <div className={style.boardName}>
                            <SlCalender className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Calender</span>
                        </div>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Calender</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chat" className={style.board}>
                        <div className={style.boardName}>
                            <BsFillChatLeftDotsFill className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Chat</span>      
                        </div>
                        <span className={style.boardRight} style={{display: expand ? 'block' : 'none'}}>New</span>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Chat</span>
                    </NavLink>
                </li>
                <li>
                    <div className={style.board}>
                        <div className={style.boardName}>
                            <AiOutlineFolder className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>File Manager</span>
                        </div>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>File Manager</span>
                    </div>
                </li>
                <li className={style.boardBox} onClick={()=> setShowEmail(!showEmail)}>
                    <div className={style.board}>
                        <div className={style.boardName}>
                            <AiOutlineMail className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Email</span>
                        </div>
                        <span className={style.boardRight} style={{display: expand ? 'block' : 'none'}}><IoIosArrowDown /></span>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Email</span>
                    </div>
                    <ul className={`${style.boardDrop} ${showEmail ? style.boardShow : style.boardHide}`}>
                        <li>Inbox</li>
                        <li>Read Email</li>
                    </ul>
                </li>
                <li className={style.boardBox} onClick={()=> setShowContact(!showContact)}>
                    <div className={style.board}>
                        <div className={style.boardName}>
                            <AiOutlineMail className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Contacts</span>
                        </div>
                        <span className={style.boardRight} style={{display: expand ? 'block' : 'none'}}><IoIosArrowDown /></span>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Contacts</span>
                    </div>
                    <ul className={`${style.boardDrop} ${showContact ? style.boardShow : style.boardHide}`}>
                        <li>User Grid</li>
                        <li>User List</li>
                        <li>User Settings</li>
                    </ul>
                </li>
                <li>
                    <div className={style.board}>
                        <div className={style.boardName}>
                            <TfiGallery className={style.icon}/>
                            <span className={`${expand ? style.visible : style.hide}`}>Gallery</span>
                        </div>
                        <span className={`${style.shrink} ${expand ? '' : style.show}`}>Gallery</span>
                    </div>
                </li>
           </div>
        </ul>
    </section>
  )
}

export default Sidebar