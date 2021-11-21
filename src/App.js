import React from "react"
import { Routes, Route,  NavLink ,Navigate} from "react-router-dom"
import { AppointmentsPage } from "./conteiners/ApointmentsPage"
import { ContactsPage } from "./conteiners/ContactsPage"
import { useState } from "react"

function App() {
  const [appointment,setAppointment] = useState([])
  const [contacts,setContacts] = useState([])

  const addContact = (name,number,email) => {
    const obj = {name:name,number:number,email:email}
    setContacts(prev=>[...prev,obj])
  }
  const addAppointment= (title,contact,date,time) => {
    const obj = {title:title,contact:contact,date:date,time:time}
    setAppointment(prev=>[...prev,obj])
  }
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  }

  return (
    <div>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>
          Appointment
        </NavLink> 
      </nav>
      <main>
        <Routes>
        <Route exact path="/" element={ <Navigate to={ROUTES.CONTACTS} />}>
           
          </Route>
          <Route path={ROUTES.CONTACTS} element={<ContactsPage addContact={addContact} contacts={contacts} />}>
            
          </Route>
  
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage addAppointment={addAppointment} appointment={appointment} contacts={contacts}/>}>
       
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
