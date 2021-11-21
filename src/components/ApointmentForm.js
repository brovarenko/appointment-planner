import React from "react"
import { ContactPicker } from "./ContactPicker";
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  }

  return (
    <form onSubmit={handleSubmit}>
          <div>
            <label for="title">Title</label><br/>
            <input onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" type="text" required placeholder="title.."></input>
          </div> 
          <div>
            <label for="time">Time</label><br/> 
          <input onChange={(e)=>{setTime(e.target.value)}} value={time} name="time" type="time" ></input>
          </div> 
          <div>
            <label for="date">Date</label><br/>
           <input onChange={(e)=>{setDate(e.target.value)}} value={date} name="date" type="date" min={getTodayString()}></input>
           </div>
           <div>
            <label>Contact</label><br/>
            <ContactPicker contacts={contacts} onChange={(e)=>{setContact(e.target.value)}}/>
           </div>

            <input type="submit" value="Add Appointment"></input>
        </form>
  )
}