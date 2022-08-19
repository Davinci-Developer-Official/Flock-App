import React from 'react'

// eslint-disable-next-line react/prop-types
function Singlegroupentry({click}) {
  return (
    <div className='group-entry'>
    <div className='single-group'
    onClick={click}
       
    >
    <p>
        JavaScript Forum
    </p>
    <p>
        2:30 pm
    </p>
    
    </div>
    <div className='single-group'
    onClick={click}
       
    >
    <p>
        JavaScript Forum
    </p>
    <p>
        2:30 pm
    </p>
    
    </div>
    </div>
  )
}

export default Singlegroupentry