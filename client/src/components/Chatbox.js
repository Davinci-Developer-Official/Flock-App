import React from 'react'
//import { FaLeaf } from 'react-icons/fa'
import Header from './Header'
import Messagebox from './Messagebox'
import Response from './Response'
import Send from './Send'
// eslint-disable-next-line react/prop-types
function Chatbox({exit}) {
  return (
    <div className='chat-box'>
      <Header exit={exit}/>
      <div className='data'>
      <Response/>
      <Send/>
      </div>
      <Messagebox/>
    </div>
  )
}

export default Chatbox