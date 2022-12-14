import { useState } from 'react'

import contact from '../../assets/contact.jpg'
import Header from '../parts/Header'
import Footer from '../parts/Fotter'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thank you for contacting us!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <Header />
      <div className='contact-body'>
        <div className='left-side'>
          <img src={contact} alt='phone' />
        </div>
        <div className='contact-form'>
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className='name'>
              <label for='name'>Full Name: </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='email'>
              <label for='email'>Email: </label>
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className='message'>
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div>
              <input className='btn' type='submit' />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
