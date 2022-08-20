import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Latestthread from '../components/Latestthread';
import Sidebar from '../components/Sidebar'
//import Threadcontainer from '../components/Threadcontainer';
import Threadheader from '../components/Threadheader';
//import User from '../components/User';

function Thread() {
    let [show ,setShow]=useState(false);
   
  return (
    <div className='thread' >
        <FaBars
        style={{cursor:'pointer'}}
        onClick={()=>setShow(true)}
        onDoubleClick={()=>setShow(false)}
        />
        {show &&<Sidebar/>}
          <div className='thread-container'>
        
        <Threadheader/>
        <Latestthread/> 
        </div>
    </div>
  )
}

export default Thread;