import React, {useState} from "react"
import { AppointmentForm } from "../components/ApointmentForm"
import { TitleList } from "../components/TitleList"

export const AppointmentsPage = ({addAppointment,appointment,contacts}) => {

  const [title, setTitle] = useState("")
  const [contact, setContact]= useState("")
  const [date, setDate]= useState("")
  const [time, setTime]= useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment(title,contact,date,time)
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TitleList data={appointment}/>
      </section>
    </div>
  )
}