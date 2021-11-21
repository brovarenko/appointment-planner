import React from "react"

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label for="name">{isDuplicate ? "Name already exists" : "Name"}</label><br/>
            <input onChange={(e)=>{setName(e.target.value)}} value={name} name="name" type="text" placeholder="name.." required></input><br/>
            
        </div>
        <div>
            <label for="number" >Phone number</label><br/>
            <input onChange={(e)=>{setNumber(e.target.value)}} value={number} type="tel" required  name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000"></input>
            </div>
            <div>
              <label>Email</label><br/>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} name="email" type="email" placeholder="email.." required></input>
            </div>
            
            
            <input type="submit" value="Add Contact"></input>
            
        </form>
        </div>
    )
}