import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
function Header({exit}) {
  return (
      <div className='title-bar'>
        <FaArrowLeft
        onClick={exit}
        style={{cursor:'pointer'}}
        className="leave"
        />
        <p> Thomas Mithamo</p>
      </div>
  )
}

export default Header