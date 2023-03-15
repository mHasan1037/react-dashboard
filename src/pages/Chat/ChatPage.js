import React, { useContext } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import NavExpandHook from '../../hooks/NavExpandHook'
import Headline from '../../component/Headline/Headline'
import style from './chat.module.css'
import logo from '../../images/logo.png'
import ChatOptions from './ChatOptions'
import ChatBox from './ChatBox'

const ChatPage = () => {
    const {sidebarSize} = useContext(NavExpandHook)
    const navbarSize = `calc(100vw - ${sidebarSize}px)`

    return (
        <div style={{ display: 'flex', width: '100vw'}}>
            <Sidebar />
            <div style={{width: navbarSize}}>
                <NavBar />
                <div className={style.chatContainer}>
                    <Headline title='Chat' />
                    <div className={style.chatMain}>
                        <div className={style.chatShow}>
                            <img src={logo} />
                        </div>
                        <div className={style.chatOptions}>
                            <ChatOptions />
                        </div>
                        <div className={style.chatBox}>
                            <ChatBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage