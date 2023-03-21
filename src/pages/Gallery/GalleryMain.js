import React from 'react'
import Headline from '../../component/Headline/Headline'
import style from './galleryMain.module.css'

const GalleryMain = () => {
  return (
    <div className={style.galleryContainer}>
        <Headline title="Gallery" />
        GalleryMain
    </div>
  )
}

export default GalleryMain