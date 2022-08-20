/* eslint-disable react/prop-types */
import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Createtopic() {
  return (
    <>
    <div className='create-topic'>
        <FaTimes className='close'
        onClick={()=>{
          window.location.reload()
        }}
        onDoubleClick={()=>{
          window.location.reload()
        }}
        />

    </div>
    <div>

    </div>
    </>
  )
}

export default Createtopic