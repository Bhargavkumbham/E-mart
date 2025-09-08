import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import BooksPage from './stores/pages/BooksPage'
import FridgePage from './stores/pages/FridgePage'
import AcPage from './stores/pages/AcPage'
import MobileSingle from './singles/MobileSingle' 
import UserCart from './stores/UserCart'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/> }></Route>
        <Route path='/mobiles' element={ <MobilePage/> }></Route>
        <Route path='/computers' element={<ComputerPage/>}></Route>
        <Route path='/books' element={<BooksPage/>}></Route>
        <Route path='/fridges' element={<FridgePage/>}></Route>
        <Route path='/ac' element={<AcPage/>}></Route>
        <Route path='/mobiles/:id' element={<MobileSingle/>}></Route>
        <Route path='/cart' element={<UserCart/>}></Route>
      </Routes>
    </div>
    
  )
}

export default App