import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10)
  const addValue = () =>{
     counter +=1
     setCounter(counter)
  }
  const removeValue =()=>{
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Anupam is best</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
