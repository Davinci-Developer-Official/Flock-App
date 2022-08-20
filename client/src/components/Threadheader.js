import React, { useState } from 'react'
import { FaCommentMedical, FaObjectUngroup, FaPlus, FaRetweet } from 'react-icons/fa'
import Createtopic from './Createtopic';
//import Latestthread from './Latestthread';
import User from './User';
function Threadheader() {
    const [thread,showThread]=useState(false);
    let exit = ()=>showThread(false)
    let [create ,showCreate]=useState(false);
    let exiting = ()=> showCreate(false)
  return (
    <div className='thread-header'>
        <span className='trh'
         onClick={()=>showThread(true)}
        >
            
            <p
             onClick={()=>showThread(true)}
            >
                <FaCommentMedical 
                onClick={()=>showThread(true)}
                />
                Account 
                {thread &&<User exit={exit} /> }
            </p> 
        </span>
        <span className='trh'
         onClick={()=>showCreate(true)}
        >
            
            <p>
                <FaPlus/>
                Create Topic
                {create &&<Createtopic exiting={exiting} />}
            </p> 
        </span>
        <span className='trh'>
            <p>
                <FaObjectUngroup/>
                Join Topic
            </p>
         </span>
        <span className='trh'>
            
            <p
             onClick={()=>window.location.reload()}
            >
                <FaRetweet
                onClick={()=>window.location.reload()}
                />
                refresh 
            </p>
         </span>    
    </div>
  )
}

export default Threadheader