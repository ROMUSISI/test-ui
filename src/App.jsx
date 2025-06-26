import { useState } from 'react'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComboBox from './ComboBox'
import Home from './Home'
import SearchBar from './SearchBar'
import About from './About'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
