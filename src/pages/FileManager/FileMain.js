import React, { useEffect, useState } from 'react'
import Headline from '../../component/Headline/Headline'
import style from './fileMain.module.css'
import { FcOpenedFolder } from 'react-icons/fc'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { AiOutlineSearch, AiOutlinePlus,AiFillPushpin, AiOutlineFolderOpen, AiFillSetting, AiOutlineDropbox, AiOutlineShareAlt, AiOutlineStar } from 'react-icons/ai'
import { SiGoogledrive } from 'react-icons/si'
import { BsFillTrashFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { BiRightArrowAlt, BiDotsVerticalRounded } from 'react-icons/bi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { drives, folders, recentFile, storage } from './FileDataBase'
//https://dashonic-v-light.react.pichforest.com/sales


const FileMain = () => {
    const [showFiles, setShowFiles] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    useEffect(()=>{
         const handleOutsideClick = (event) =>{
            if(showOptions && !event.target.closest(`.${style.centerShareOptions}`)){
                setShowOptions(false)
            }
         }

         document.addEventListener('click', handleOutsideClick)
         return ()=> {
            document.removeEventListener('click', handleOutsideClick)
         }
    }, [showOptions])
    
  return (
    <section className={style.fileContainer}>
        <Headline title='File Manager' />
        <div className={style.fileWrapper}>
            <div className={style.leftContainer}>
                 <div className={style.leftTop}>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading} onClick={()=> setShowFiles(!showFiles)}>
                            <div className={style.fileName}>
                                <FcOpenedFolder />
                                Files
                            </div>
                               {showFiles ? <IoIosArrowDown style={{fontSize: '12px'}} /> : <IoIosArrowUp style={{fontSize: '12px'}} />}
                            </div>
                        {
                            showFiles && (
                        <div className={style.fileContents}>
                            <div>
                                <p>Design</p>
                            </div>
                            <div>
                                <p>Development</p>
                                <AiFillPushpin />
                            </div>
                            <div>
                                <p>Project A</p>
                            </div>
                            <div>
                                <p>Admin</p>
                                <AiFillPushpin />
                            </div>
                        </div>
                            )
                        }
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <SiGoogledrive style={{color: '#04830C'}}/>
                                Google Drive
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <AiOutlineDropbox style={{color: '#1368B8'}} />
                                Dropbox
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <AiOutlineShareAlt />
                                Shared
                            </div>
                            <div style={{width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'red'}}></div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <AiOutlineStar style={{color: '#8D8C8C'}}/>
                                Starred
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <BsFillTrashFill style={{color: '#E51616'}} />
                                Trash
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div className={style.fileName}>
                                <AiFillSetting />
                                Setting
                            </div>
                            <div style={{
                                backgroundColor: '#48B625', 
                                borderRadius: '5px',
                                color: 'white', 
                                padding: '2px 5px',
                                fontSize: '12px'
                            }}>
                                01
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className={style.leftBottom}>
                    <div className={style.leftBottomTop}>
                        <AiOutlineFolderOpen style={{color: '#397d92', fontSize: '36px'}} />
                        <RxCross2 style={{colo: '#7a8186', cursor: 'pointer'}}/>
                    </div>
                    <h3 style={{color: '#038edc', fontWeight: 'normal', marginBottom: '10px'}}>Upgrade Features</h3>
                    <p style={{color: '#397D92', lineHeight: '22px'}}>Upgrade your plane from a <span style={{fontWeight: 'bold'}}>Free trial,</span> to 'Premium Plan'</p>

                    <p style={{marginTop: '25px', display: 'flex', alignItems: 'center', color: '#038edc'}}>Upgrade <BiRightArrowAlt /> </p>
                 </div>
            </div>



            <div className={style.centerContainer}>
               <div className={style.centerHeading}>
                    <div className={style.centerSearchBox}>
                        <AiOutlineSearch style={{color: '#7a8186'}}/>
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className={style.centerButtonBox}>
                         <button className={style.centerCreateBtn}><AiOutlinePlus /> Create New</button>
                         <div className={style.centerShareOptions}>
                            <BiDotsVerticalRounded style={{cursor: 'pointer'}} onClick={()=> setShowOptions(!showOptions)}/>
                            {
                                showOptions && (
                            <div className={style.centerShareBtns}>
                                <button>Share Files</button>
                                <button>Share with me</button>
                                <button>Other Actions</button>
                            </div>
                                )
                            }
                         </div>
                    </div>
               </div>

               <div className={style.centerStoreContainer}>
                   {
                    drives.map((drive, index)=>{
                        const {logo, name, available, total} = drive
                        const LogoComponent = 
                           logo === 'SiGoogledrive' 
                             ? SiGoogledrive 
                             : logo === 'AiOutlineDropbox' 
                             ? AiOutlineDropbox 
                             : logo === 'FcOpenedFolder' 
                             ? FcOpenedFolder 
                             : null
                        
                        return (
                            <div className={style.centerDriveBox}>
                                 <div className={style.centerDriveTop}>
                                    <LogoComponent className={style.centerDriveIcon}/>
                                    <HiOutlineDotsHorizontal />
                                 </div>
                                 <p style={{color: '#2A2B2D', marginBottom: '15px'}}>{name}</p>
                                 <p style={{color: '#74788d', fontSize: '14px'}}>{available}GB of {total}GB used</p>
                                 <div className={style.CenterBarContainer}>
                                     <div className={style.centerBarBg} style={{width: `${(available / total) * 100}%`}}>
                                        <div className={style.centerBarDot}></div>
                                     </div>
                                 </div>
                            </div>
                        )
                    })
                   }
               </div>
            </div>


            <div className={style.rightContainer}>
                three
            </div>
        </div>
    </section>
  )
}

export default FileMain