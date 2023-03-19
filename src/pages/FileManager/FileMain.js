import React from 'react'
import Headline from '../../component/Headline/Headline'
import style from './fileMain.module.css'
import { FcOpenedFolder } from 'react-icons/fc'
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillPushpin, AiOutlineFolderOpen, AiFillSetting, AiOutlineDropbox, AiOutlineShareAlt, AiOutlineStar } from 'react-icons/ai'
import { SiGoogledrive } from 'react-icons/si'
import { BsFillTrashFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { BiRightArrowAlt } from 'react-icons/bi'


const FileMain = () => {
  return (
    <section className={style.fileContainer}>
        <Headline title='File Manager' />
        <div className={style.fileWrapper}>
            <div className={style.leftContainer}>
                 <div className={style.leftTop}>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <FcOpenedFolder />
                                Files
                            </div>
                            <IoIosArrowUp />
                        </div>
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
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <SiGoogledrive />
                                Google Drive
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <AiOutlineDropbox />
                                Dropbox
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <AiOutlineShareAlt />
                                Shared
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <AiOutlineStar />
                                Starred
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <BsFillTrashFill />
                                Trash
                            </div>
                        </div>
                    </div>
                    <div className={style.mainFile}>
                        <div className={style.fileHeading}>
                            <div>
                                <AiFillSetting />
                                Setting
                            </div>
                        </div>
                        <div>01</div>
                    </div>
                 </div>

                 <div className={style.leftBottom}>
                    <div>
                        <AiOutlineFolderOpen />
                        <RxCross2 />
                    </div>
                    <h2>Upgrade Features</h2>
                    <p>Upgrade your plane from a <span>Free trial,</span> to 'Premium Plan'</p>

                    <p>Upgrade <BiRightArrowAlt /> </p>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default FileMain