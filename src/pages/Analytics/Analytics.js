import React, { useContext } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import NavExpandHook from '../../hooks/NavExpandHook'
import AnalyticsContainer from './AnalyticsContainer'

const Analytics = () => {
    const {sidebarSize} = useContext(NavExpandHook)
    const navbarSize = `calc(100vw - ${sidebarSize}px)`
  return (
    <div style={{ display: 'flex', width: '100vw'}}>
        <Sidebar />
        <div style={{width: navbarSize}}>
            <NavBar />
            <AnalyticsContainer />
        </div>
    </div>
  )
}

export default Analytics