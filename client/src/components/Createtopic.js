/* eslint-disable react/prop-types */
import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Createtopic({exiting}) {
  return (
    <>
    <div className='create-topic'>
        <FaTimes className='close'
        onClick={exiting}
        />

    </div>
    <div>

    </div>
    </>
  )
}

export default Createtopic