import React from 'react'
import "./App.css"
import Sidebar from"./Components/Sidebar"
import Twit from './Components/Twit'
import Trends from"./Components/Trends"


const App = () => {
  return (
    <>
       <div className="twiter">
       <Sidebar/>
       <Twit/>
       <Trends/>
       </div>
   
    </>
  )
}

export default App;
