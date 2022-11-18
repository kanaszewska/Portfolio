import React, { useState } from 'react';
import { send } from 'emailjs-com';

import '../styles/Contact.css';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_55jrpfm',
      'template_godv4w7',
      toSend,
      'GJ9P6oOGLVejrXCje'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  
  return (
    <div className='contact'>
            <div className='contain'>
                <p className='navigation'>Contact</p>
                <p className='description'>Submit the form below or shoot me an email - kanaszewskadominika@gmail.com</p>
            </div>
            <form className='main' onSubmit={onSubmit}>
                <input
                  className='from_name'
                  type='text'
                  name='from_name'
                  placeholder='Your name'
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <textarea
                  className='message'
                  type='text'
                  name='message'
                  placeholder='Your message'
                  value={toSend.message}
                  onChange={handleChange}
                />
                <input
                  className='reply_to'
                  type='email'
                  name='reply_to'
                  placeholder='Your email'
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
            <button className='contact' type='submit'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;