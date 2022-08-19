import React from 'react'
import { useState } from 'react'
//import Chatbox from '../components/Chatbox'
import Chatdisplay from '../components/Chatdisplay'
import Sidebar from '../components/Sidebar'
import{FaBars}from 'react-icons/fa'
function Chat() {
  let [side,setSide]= useState(true)
  return (
    <>
    <div className='chats'>
      <div>
      <FaBars 
      onClick={
        ()=>setSide(true)
      }
      onDoubleClick={
        ()=>setSide(false)
      }
      style={{cursor:'pointer'}}
      />
       { side && <Sidebar/> }
      </div>

    <Chatdisplay/>
    
    </div>
       
      </>
  )
}

export default Chat