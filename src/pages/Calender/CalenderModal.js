import React, { useState } from 'react'
import style from './calenderModel.module.css'
import { RxCross2 } from 'react-icons/rx'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const styleComponent = {  
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100
}

const styleMainDiv = {
    backgroundColor: 'white',
    height: '300px',
    minWidth: '400px',
    marginTop: '20px',
    borderRadius: '5px',
    padding: '30px'
}


const CalenderModal = ({setEventBox, eventBox, onEvent}) => {
      const [eventName, setEventName] = useState('')
      const [eventStart, setEventStart] = useState('');
      const [eventEnd, setEventEnd] = useState('');
    
        const handleSave = (e) =>{
            e.preventDefault()
            const eventData = {
                title: eventName,
                start: eventStart,
                end: eventEnd
            }
            onEvent(eventData)
            setEventBox(!eventBox)
        }
  return (
    <div style={styleComponent}>
        <div style={styleMainDiv}>
            <div className={style.header}>
                <h3>Add Event</h3>
                <RxCross2 className={style.close} onClick={()=> setEventBox(!eventBox)} />
            </div>
            <form className={style.body}>
                <div className={style.formControl}>
                    <p>Event Name</p>
                    <input 
                       type="text" 
                       placeholder='Insert Event Name' 
                       value={eventName} 
                       onChange={(e)=> setEventName(e.target.value)} 
                    />
                </div>
                <div className={`${style.formControl} ${style.eventForm}`}>
                    <div>
                        <p>Event Start</p>
                        <div className={style.datePicker}>
                                <ReactDatePicker 
                                    placeholderText='Insert Event Start' 
                                    selected={eventStart}
                                    onChange={(date)=> setEventStart(date)}  
                                    className={style.reactDatePicker}                                
                                />
                        </div>
                    </div>
                    <div>
                        <p>Event End</p>
                        <ReactDatePicker 
                            placeholderText='Insert Event End' 
                            selected={eventEnd}
                            style={{width: '100%', backgroundColor: 'white'}}
                            onChange={(date)=> setEventEnd(date)}
                        />
                    </div>
                </div>
                <div className={`${style.formButton}`}>
                    <button className={style.closeBtn} onClick={()=> setEventBox(!eventBox)}>Close</button>
                    <button className={style.saveBtn} onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CalenderModal