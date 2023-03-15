import React, { useEffect, useRef, useState } from 'react'
import style from './ChatOptions.module.css'
import logo from '../../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import {chatData, groups, names} from './ChatDataBase'

const ChatOptions = () => {
    const [search, setSearch] = useState(false)
    const [options, setOptions] = useState(false)
    const [activeButton, setActiveButton] = useState("a");
    const [selectedButton, setSelectedButton] = useState("a");
    const inputRef = useRef(null)

    const handleButtonClick = (button) =>{
        setActiveButton(button)
        setSelectedButton(button)
    }

    useEffect(()=>{
        if(search){
            inputRef.current.focus()
        }
    }, [search])

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (options && !event.target.closest(`.${style.chatOptins}`)) {
            setOptions(false);
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [options]);

      //Contact names rendering
      const sortedNames = names.sort()
      const uniqueFirstLetters = [...new Set(sortedNames.map(name => name.charAt(0)))]

  return (
    <>
         <div className={style.header}>
             <div className={style.searchBox}>
                <img src={logo} />
                <div className={style.sarchIcons}>
                    {search && <input type="text" ref={inputRef} />}
                    <AiOutlineSearch style={{cursor: 'pointer'}} onClick={()=> setSearch(!search)}/>
                    <div className={style.chatOptins}>
                        <BsThreeDots style={{cursor: 'pointer'}} onClick={()=> setOptions(!options)} />
                        {
                            options && (
                                <ul>
                                    <li>Profile</li>
                                    <li>Edit</li>
                                    <li>Add Contact</li>
                                    <li>Setting</li>
                                </ul>
                            )
                        }
                    </div>
                </div>
             </div>
             <div className={style.chatTypes}>
                <div className={selectedButton === 'a' ? style.active : ''} onClick={() => handleButtonClick("a")}>Chat</div>
                <div className={selectedButton === 'b' ? style.active : ''} onClick={() => handleButtonClick("b")}>Groups</div>
                <div className={selectedButton === 'c' ? style.active : ''} onClick={() => handleButtonClick("c")}>Contacts</div>
             </div>
         </div>

         <div className={style.box}>
            {activeButton === 'a' && 
            <div className={style.groupBox}>
                <p>Recent</p>
                <div className={style.chatBox}>
                    {
                        chatData.map((chat) =>{
                            const {name, active, lastMsg, time, img} = chat
                            return(
                                <div className={style.personBox} key={name}>
                                    <div className={style.person}>
                                        <div className={style.imgBox}>
                                            {img !== null ?
                                            <div className={style.profileImgBox}>
                                                <img src={img} className={style.profileImg} />
                                            </div> :
                                            <div className={style.profileText}>{name[0]} </div> 
                                            }
                                            <div className={style.activeDot} style={active === true ? {backgroundColor: 'green'} : active === false ? {backgroundColor: 'orange'} : {backgroundColor: 'gray'}}></div>
                                        </div>
                                        <div>
                                            <p style={{marginBottom: '5px'}}>{name}</p>
                                            <span style={{color: '#74788d', fontSize: '13px'}}>{lastMsg.length > 20 ? lastMsg.slice(0, 20) + "..." : lastMsg}</span>
                                        </div>
                                    </div>
                                    <div className={style.msgSendTime}>{time}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            }
            {activeButton === 'b' && 
            <div className={style.groupBox}>
                <div className={style.groupHead}>
                    <p>Groups</p>
                    <p className={style.addNew}>+ Add New</p>
                </div>
                <div className={style.chatBox}>
                    {
                        groups.map((group)=>{
                            const {name, member, img} = group

                            return(
                                <div className={style.personBox}>
                                    <div className={style.person}>
                                        <div className={style.imgBox}>
                                            {img !== null ?
                                            <div className={style.profileImgBox}>
                                                <img src={img} className={style.profileImg} />
                                            </div> :
                                            <div className={style.profileText}>{name[0]} </div> 
                                            }
                                        </div>
                                        <div>
                                            <p style={{marginBottom: '5px'}}>{name}</p>
                                            <span style={{color: '#74788d', fontSize: '13px'}}>{member}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            }
            {activeButton === 'c' && 
            <div className={style.groupBox}>
                <div className={style.groupHead}>
                    <p>Contacts</p>
                    <p className={style.addNew}>+ Add New</p>
                </div>
                <div className={style.chatBox}>
                    {
                        uniqueFirstLetters.map((letter)=>(
                            <div key={letter} className={style.contactBox}>
                               <p>{letter}</p>
                               <div style={{marginTop: '5px'}}>
                                   {sortedNames
                                      .filter((name)=> name.charAt(0) === letter)
                                      .map((name) =>(
                                        <p className={style.contactName} key={name}>{name}</p>
                                      ))
                                   }
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            }
         </div>
    </>
  )
}

export default ChatOptions