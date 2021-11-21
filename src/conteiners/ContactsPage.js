import React,{ useState, useEffect } from "react"
import {ContactForm} from "../components/ContactForm"
import { TitleList } from "../components/TitleList"

export const ContactsPage = ({contacts,addContact}) => {

  const [name, setName] = useState("")
  const [number, setNumber]= useState("")
  const [email, setEmail]= useState("")
  const [isDuplicate, setIsDuplicate] = useState(false)

  useEffect(()=>{
     contacts.forEach(element => {
        if (element.name === name) {
          setIsDuplicate(true)
        }else{
          setIsDuplicate(!true)
        }
    })

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isDuplicate) {
      addContact(name,number,email)
    }
    setName('')
    setNumber('')
    setEmail('')
  }



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
       
        <ContactForm name={name} setName={setName} number={number} isDuplicate={isDuplicate}
         setNumber={setNumber} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TitleList data={contacts} />
      </section>
    </div>
  )
}