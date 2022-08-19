/* eslint-disable react/prop-types */
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Singletopic from './Singletopic'

function Latestthread({exit}) {
  return (
    <div className='latest-thread'>
        <FaTimes onClick={exit}
        className='close'
        />
        <div className='thread-box'>
            <Singletopic/>
        </div>
    </div>
  )
}

export default Latestthread
