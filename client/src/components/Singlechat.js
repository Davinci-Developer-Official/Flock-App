import React, { useState } from 'react'
import Chatbox from './Chatbox'
import Singlechatentry from './Singlechatentry';
function Singlechat() {
    let [chat , setChat]= useState(false);
    let exit = ()=>setChat(false)
    let click = ()=>setChat(true)
  return (
    <>
    <Singlechatentry click={click} />
    {chat && <Chatbox exit={exit} /> }
    </>
  )
}

export default Singlechat