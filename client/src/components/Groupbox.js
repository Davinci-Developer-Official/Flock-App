import React from 'react'
import Header from './Header'
import Messagebox from './Messagebox'
import Response from './Response'
import Send from './Send'

// eslint-disable-next-line react/prop-types
function Groupbox({exit}) {
  return (
    <div className='group-box' >
      <Header exit={exit}/>
      <div className='data'>
      <Send/>
      <Response/>
      </div>
      <Messagebox/>
      
    </div>
  )
}

export default Groupbox