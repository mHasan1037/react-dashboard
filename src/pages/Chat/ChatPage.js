import React, { useContext } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import NavExpandHook from '../../hooks/NavExpandHook'
import Headline from '../../component/Headline/Headline'


const ChatPage = () => {
    const {sidebarSize} = useContext(NavExpandHook)
    const navbarSize = `calc(100vw - ${sidebarSize}px)`

    return (
        <div style={{ display: 'flex', width: '100vw'}}>
            <Sidebar />
            <div style={{width: navbarSize}}>
                <NavBar />
                <div>
                    <Headline title='Chat' />
                </div>
            </div>
        </div>
    )
}

export default ChatPage