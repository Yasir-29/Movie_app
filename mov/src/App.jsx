import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card =()=>{
  return(
    <div>
      <h2>Movie Card</h2>
    </div>
  )
}
const App =()=>
{
  return(
    <div>
      <h1>Movie App</h1>
      <Card />
      <Card />
    </div>
  )
}

export default App
