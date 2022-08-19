import React, { useState } from 'react'
import Groupbox from './Groupbox'
import Singlegroupentry from './Singlegroupentry';

function Singlegroup() {
    var [group,showGroup]=useState(false);
    let click = ()=>{
      showGroup(true)
    }
    const exit = ()=>showGroup(false);
  return (
    <>
    <Singlegroupentry click={click} />
    {group && <Groupbox exit={exit}/>}
    </>
  )
}

export default Singlegroup