import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

function Messagebox() {
  return (
    <div className='message-box'>
        <span className='util'></span>
        <div className='sending'>
        <input type='text' placeholder='Type your message here.' 
        className='textbox'
        />
      
        <FaPaperPlane 
        className='post'
        /> 
        
        </div>
    </div>
  )
}

export default Messagebox;