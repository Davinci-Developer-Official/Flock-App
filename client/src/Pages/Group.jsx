import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Groupdisplay from '../components/Groupdisplay'
import Sidebar from '../components/Sidebar'

function Group() {
  let [side,setSide]=useState(false)
  return (
    <div className='groups'>
      <div>
        <FaBars
        className='bars'
        onClick={
            ()=>setSide(true)
        }
        onDoubleClick={
            ()=>setSide(false)
        }
        style={{
          cursor:'pointer'
        }}
        />
        

        {side && <Sidebar/>}
        </div>
      <Groupdisplay/>
    </div>
  )
}

export default Group