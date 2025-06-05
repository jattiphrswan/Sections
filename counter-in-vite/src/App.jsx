import { useState } from 'react'    

import './App.css'

function App() {
  let  [counter , setCounter ] = useState(0)
  // let counter = 0
  const addValue = () => {
  setCounter( counter + 1 )
  }
  const removeValue = () => {
  setCounter( counter - 1 )
  
  }


  return (
    <>
     <h1>hello react {counter}</h1>
     <h1>counter{counter}</h1>
   
      <button
      onClick={addValue}
      >add value</button>
      <button onClick= {removeValue}> remove value</button>
   
    </>
  )
}

export default App
