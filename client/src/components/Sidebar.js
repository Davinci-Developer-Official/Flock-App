import React from 'react'
import { FaComment, FaRebel, FaUsers } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
function Sidebar() {
  var redirect = useNavigate();
  return (
    <div className='sidebar'>
      <div
      className='side-content'
      onClick={
        ()=>redirect('/')
      }
      >
        <p>
          <FaComment/>
        chats
        </p></div>
      <div
      className='side-content'
      onClick={
        ()=>redirect('/group')
      }
      >
        
        <p>
          <FaUsers/>
        Groups
        </p></div>
      <div
      className='side-content'
      onClick={()=>redirect('/thread')}
      >
        <p>
          <FaRebel/>
        Threads
        </p></div>
      
    </div>
  )
}

export default Sidebar