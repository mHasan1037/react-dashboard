import React, { useContext } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import style from './home.module.css'
import NavExpandHook from '../../hooks/NavExpandHook'
import Sales from '../../component/Sales/Sales'

const Home = () => {
  const {sidebarSize} = useContext(NavExpandHook)
  const navbarSize = `calc(100vw - ${sidebarSize}px)`


  return (
    <div className={style.container}>
        <Sidebar />
        <div style={{width: navbarSize}}>
           <NavBar />
           <Sales />
        </div>
    </div>
  )
}

export default Home