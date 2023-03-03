import React, { useContext, useState, useEffect } from 'react'
import style from './navbar.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch, AiOutlineAppstore, AiOutlineBell, AiOutlineSetting } from 'react-icons/ai'
import dropImg from '../../images/bf.png'
import NavExpandHook from '../../hooks/NavExpandHook'

const NavBar = () => {
    const [show, setShow] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const {sidebarSize} = useContext(NavExpandHook)

    
  return (
    <div className={style.navBarContainer}>
        <div className={style.navLeft}>
            <div className={style.leftOptions} onClick={()=> {setShow(!show); setShowTwo(false)}}>
                Components
                <MdKeyboardArrowDown />
                {
                    show && (
                <div className={style.buttonBox}>
                    <button className={style.dropbtn}>Alerts</button>
                    <button className={style.dropbtn}>Progress Bars</button>
                    <button className={style.dropbtn}>Buttons</button>
                    <button className={style.dropbtn}>Sweet Alert</button>
                    <button className={style.dropbtn}>Cards</button>
                    <button className={style.dropbtn}>Tabs & Accordions</button>
                    <button className={style.dropbtn}>Dropdowns</button>
                    <button className={style.dropbtn}>Typography</button>
                    <button className={style.dropbtn}>Lightbox</button>
                    <button className={style.dropbtn}>General</button>
                    <button className={style.dropbtn}>Modals</button>
                    <button className={style.dropbtn}>Rating</button>
                    <button className={style.dropbtn}>Range Slider</button>
                    <button className={style.dropbtn}>Notifications</button>
                </div>
                    )
                }
            </div>

            <div className={style.leftOptions} onClick={()=> {setShowTwo(!showTwo); setShow(false)}}>
                Categories
                <MdKeyboardArrowDown />

                {
                    showTwo && (
                    <div className={style.buttonContainer} style={{left: sidebarSize === 60 ? '60px' : sidebarSize === 250 ? '250px' : ''}}>
                       <div className={style.CatButtonBox}>
                            <button className={style.dropbtn}>Computers Accessories</button>
                            <button className={style.dropbtn}>Laptops Tablets</button>
                            <button className={style.dropbtn}>Desktop Computers</button>
                            <button className={style.dropbtn}>Networking Products</button>
                            <button className={style.dropbtn}>Monitors</button>
                            <button className={style.dropbtn}>Bags, Cases & Sleeves</button>
                            <button className={style.dropbtn}>Batteries</button>
                            <button className={style.dropbtn}>Charges Adapters</button>
                        </div>
                        <div className={style.CatButtonBox}>
                            <button className={style.dropbtn}>Smartphones & Tablets</button>
                            <button className={style.dropbtn}>Apple iPhone</button>
                            <button className={style.dropbtn}>Android Smartphones</button>
                            <button className={style.dropbtn}>Phablets</button>
                            <button className={style.dropbtn}>Apple iPad</button>
                            <button className={style.dropbtn}>Android Tablets</button>
                            <button className={style.dropbtn}>Tablets with Keyboard</button>
                            <button className={style.dropbtn}>Charges Adapters</button>
                        </div>
                        <div className={style.CatButtonBox}>
                            <button className={style.dropbtn}>Television & Video</button>
                            <button className={style.dropbtn}>TV Sets</button>
                            <button className={style.dropbtn}>Home Theater Systems</button>
                            <button className={style.dropbtn}>DVD Players & Recorders</button>
                            <button className={style.dropbtn}>DVD-VCR Comboxs</button>
                            <button className={style.dropbtn}>Projectors</button>
                            <button className={style.dropbtn}>Projection Screens</button>
                            <button className={style.dropbtn}>Satelite Television</button>
                        </div>
                        <div className={style.CatButtonBox}>
                            <button className={style.dropbtn}>Cameras, Photos & Video</button>
                            <button className={style.dropbtn}>Point & Shoot Digital Cameras</button>
                            <button className={style.dropbtn}>DSLR Cameras</button>
                            <button className={style.dropbtn}>Mirrorless Cameras</button>
                            <button className={style.dropbtn}>Body Mounted Cameras</button>
                            <button className={style.dropbtn}>Camera Lenses</button>
                            <button className={style.dropbtn}>Video Studio</button>
                        </div>
                        <div className={style.dropImgBox}>
                            <img src={dropImg} style={{width: '200px', height: 'auto'}} />
                        </div>
                    </div>
                    )
                }
            </div>
    
        </div>
        <div className={style.navRight}>
            <AiOutlineSearch className={style.navRightIcon} />
            <AiOutlineAppstore className={style.navRightIcon} />
            <AiOutlineBell className={style.navRightIcon} />
            <AiOutlineSetting className={style.navRightIcon} />
            <div className={style.proBox}>
                <div className={style.navProfile}>
                    <img className={style.navProfileImg} src='https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                </div>
                <div className={style.navProName}>
                    <p>Sam</p>
                    <span>Administrator</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar