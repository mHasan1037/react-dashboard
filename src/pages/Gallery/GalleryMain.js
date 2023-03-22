import React, { useState } from 'react'
import Headline from '../../component/Headline/Headline'
import style from './galleryMain.module.css'
import GalleryData from './GalleryData'
import { ImCross } from 'react-icons/im'
//https://dashonic-v-light.react.pichforest.com/sales

const GalleryMain = () => {
  const [galleryData, setGalleryData] = useState(GalleryData)
  const [showImg, setShowImg] = useState('')
  const [imgVisiblt, setImgVisible] = useState(false)

  const handleFilter = (filtered) =>{
    const filteredData = GalleryData.filter((gallery) => gallery.category === filtered)
    setGalleryData(filteredData)
  }

  const handleClick = (id) =>{
    const filterImg = GalleryData.filter(gallery => gallery.id === id)
    setShowImg(filterImg[0].img)
    setImgVisible(true)
  }

  return (
    <div className={style.galleryContainer}>
        <Headline title="Gallery" />
        <div className={style.galleryMain}>
             <div className={style.galleryHeading}>
                 Gallery Photos
             </div>
             <div className={style.btnBox}>
                 <button onClick={()=> setGalleryData(GalleryData.slice(0,6))}>All</button>
                 <button onClick={()=> handleFilter('project')}>Project</button>
                 <button onClick={()=> handleFilter('design')}>Designing</button>
                 <button onClick={()=> handleFilter('photography')}>Photography</button>
                 <button onClick={()=> handleFilter('tech')}>Development</button>
             </div>

             <div className={style.galleryBoard}>
                 {
                  galleryData.slice(0, 6).map((galary, idx)=>{
                    const {id, category, name, provider, img} = galary

                    return (
                      <div key={id} className={style.galleryBox} onClick={()=> handleClick(id)}>
                          <div className={style.galleryImg}>
                              <img src={img} />
                          </div>
                          <div className={style.galleryDes}>
                             <h3>{name}</h3>
                             <p><span style={{fontWeight: 'bold'}}>By:</span> {provider}</p>
                          </div>
                      </div>
                    )
                  })
                 }
             </div>
        </div>

        {
          imgVisiblt && (
        <div className={style.fullScreen}>
          <div className={style.fullSecScreen}>
               <ImCross className={style.fullScreenCross} onClick={()=> setImgVisible(false)}/>
               <div className={style.imgBox}>
                  <img src={showImg} />
               </div>
          </div>
        </div>
          )
        }
    </div>
  )
}

export default GalleryMain