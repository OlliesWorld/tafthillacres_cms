import React, { useState } from "react"
import { navigate } from 'gatsby'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const NewContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/Thanks/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div className="container grid grid-cols-2 h-half lg:w-3/5 bg-bg-light m-auto mb-4 py-4 px-12">
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit} className="w-full">
     {/* <label htmlFor="nameInput" className="text-4xl text-dark-tan mb-2 w-full font-bold">Send us a Message</label> */}
      <input type="hidden" name="form-name" value="contact-form" />
     
        <input className='p-2 mb-2 w-64 text-black' name="Name" type="text" onChange={handleChange} required placeholder="Name"  />
        <input className='p-2 mb-2 w-64 text-black' type='email' placeholder='Email' name='email' onChange={handleChange} required />
        <textarea className='w-64 lg:w-80 text-black' placeholder='Message' name='message' rows='8' minLength="8" onChange={handleChange} required />
         
            
              <button className='bg-dark-tan p-2 mt-4' type='submit' >Contact Us</button>
            
         
        </form>
  
        </div>
    )
}
export default NewContactForm