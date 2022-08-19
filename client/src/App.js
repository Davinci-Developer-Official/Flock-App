import React from 'react'

import { BrowserRouter,Routes,Route}from 'react-router-dom'
import Chat from './Pages/Chat'
import Group from './Pages/Group'
import Error from './Pages/Error'
import Thread from './Pages/Thread'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat/>}  />
      <Route  path='/group' element={<Group/>} />
      <Route path='/thread' element={<Thread/>}  />

      < Route path='*' element={<Error/>}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
