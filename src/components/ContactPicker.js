import React from "react"

export const ContactPicker = ({contacts,onChange}) => {
  return (
    <select onChange={onChange}>
        <option defaultValue="no contact is selected" key={-1} >
        no contact is selected
        </option>
        {contacts.map((e,i)=><option value={e.name} key={i}>{e.name}</option>)}
    </select>
  )
}