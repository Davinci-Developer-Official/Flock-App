import React from 'react'

// eslint-disable-next-line react/prop-types
function Singlechatentry({click}) {
  return (
    <div className='chat-entry'>
       <div className='single-chat'
    onClick={click}
    
    >
        <p>Thomas Mithamo</p>
        <p>12:30 pm</p>
    </div>

     <div className='single-chat'
    onClick={click}
    
    >
        <p>John Maina</p>
        <p>12:45 pm</p>
    </div>


    </div>
  )
}

export default Singlechatentry