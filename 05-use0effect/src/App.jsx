import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const[a, setA] = useState(0)
  const[b, setB] = useState(0)

  function aChanging(){
    console.log('a change hogya')
  }
  function bChanging(){
    console.log('b change hogya')
  }
  function reset(){
    setA(0)
    setB(0)
  }
  useEffect(function(){
    aChanging()
  },[a])
  useEffect(function(){
    bChanging()
  },[b])


  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() =>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={() =>{
        setB(b-1)
      }}>Change B</button>
      <button onClick={() =>{
        reset()
      }}>Reset</button>
    </div>
  )
}

export default App
