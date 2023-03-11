import React, { useContext, useState } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import NavExpandHook from '../../hooks/NavExpandHook'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import ReactDatePicker from 'react-datepicker'
import './calendar.css'
import CalenderModal from './CalenderModal'


const events = [
  {
    title: 'The Title of the day is the day',
    start: new Date(new Date().setDate(new Date().getDate() - 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
  },
  {
    title: 'Important Meeting',
    start: new Date(new Date().setDate(new Date().getDate() - 7)),
    end: new Date(new Date().setDate(new Date().getDate() - 7)),
  },
  {
    title: 'Vacation',
    start: new Date(new Date().setDate(new Date().getDate() - 6)),
    end: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    title: 'Conference',
    start: new Date(new Date().setDate(new Date().getDate() - 0)),
    end: new Date(new Date().setDate(new Date().getDate() - 0)),
  }
  
]

const Calendar = () => {
    const {sidebarSize} = useContext(NavExpandHook)
    const navbarSize = `calc(100vw - ${sidebarSize}px)`

    //calendar event data pass tutorial
    //https://www.youtube.com/watch?v=lyRP_D0qCfk

    const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})
    const [allEvents, setAllEvents] = useState(events)
    const [eventBox, setEventBox] = useState(false)

    function handleAddEvent(){
      setAllEvents([...allEvents, newEvent])
    }


  return (
    <div style={{ display: 'flex', width: '100vw'}}>
        {eventBox && <CalenderModal setEventBox={setEventBox} eventBox={eventBox} />}
        <Sidebar />
        <div style={{width: navbarSize}}>
            <NavBar />
            <div className='calendar-container'>
                <div>
                    <FullCalendar 
                       plugins = {[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                       customButtons={{
                        testButton : {
                          text: 'Add new event',
                          click: function () {
                            setEventBox(!eventBox);
                          },
                          }
                      }}
                       headerToolbar={{
                         left: 'prev, next, testButton',
                         center: 'title',
                         right: 'dayGridMonth, timeGridWeek, timeGridDay'
                       }}
                       allDaySlot={false}
                       initialView="dayGridMonth"
                       slotDuration={"01:00:00"}
                       editable={true}
                       selectable={true}
                       selectMirror={true}
                       weekends={true}
                       nowIndicator={true}
                       events={allEvents}  
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calendar