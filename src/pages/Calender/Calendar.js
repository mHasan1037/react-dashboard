import React, { useContext } from 'react'
import NavBar from '../../component/navBar/NavBar'
import Sidebar from '../../component/sidebar/Sidebar'
import NavExpandHook from '../../hooks/NavExpandHook'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import './calendar.css'

const Calendar = () => {
    const {sidebarSize} = useContext(NavExpandHook)
    const navbarSize = `calc(100vw - ${sidebarSize}px)`

  return (
    <div style={{ display: 'flex', width: '100vw'}}>
        <Sidebar />
        <div style={{width: navbarSize}}>
            <NavBar />
            <div className='calendar-container'>
                <div>
                    <FullCalendar 
                       plugins = {[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                       headerToolbar={{
                         left: 'prev, next, today',
                         center: 'title',
                         right: 'dayGridMonth, timeGridWeek, timeGridDay'
                       }}
                       allDaySlot={false}
                       initialView="timeGridWeek"
                       slotDuration={"01:00:00"}
                       editable={true}
                       selectable={true}
                       selectMirror={true}
                       weekends={true}
                       nowIndicator={true}
                       initialEvents={[]}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calendar