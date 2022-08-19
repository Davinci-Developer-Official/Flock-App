import React from 'react'
import Sendtag from './Sendtag'


function Send() {
  return (
    <>
    <div className='send'>
      <Sendtag/>
    I am the Sender of this text
    </div>
       <div className='response'>
      <Sendtag/>
      This is my Response to everyone 
      </div>
        <div className='response'>
      <Sendtag/>
      This is my Response to everyone 
      </div>
        <div className='response'>
      <Sendtag/>
      This is my Response to everyone 
      </div>
    </>
  )
}

export default Send