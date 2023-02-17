import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import SearchBox from '../SearchBox.js/SearchBox'

function Approutes() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<SearchBox/>}></Route>
     </Routes>
    </div>
  )
}

export default Approutes
