import React from 'react'
import { Link } from 'react-router-dom'
import AddSession from './Content/AddSession'
import Live from '../../../../../assets/images/instagram-live 1.png'
import Add from '../../../../../assets/images/UpcomingEvent/add 1.png'
import Nav from "./Nav";
import LiveChatSchedule from './LiveChatSchedule'

const AddSessionContent = () => {
    
return (
<>
<div className="AS">
        <Nav></Nav>
<LiveChatSchedule />

         {/* <AddSession/>  */}
    </div>
</>
)
}

export default AddSessionContent