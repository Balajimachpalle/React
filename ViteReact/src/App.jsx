import { useState } from "react";


function App() {
   
  
  let [counter, setCounter] = useState(15)
  // let counter= 5;
  const addvalue =()=>{
   
    setCounter(counter +1)
}  
  const removeValue = ()=>{
    setCounter(counter -1)
  }

  return (
    <>
    <h1>Bilder Forntend vite</h1>
    <h2>Countter value:{counter}</h2>
    <button 
    onClick={addvalue}>Add value: {counter}</button>
    <br/>
    <button
    onClick={removeValue}>Remove Value : {counter}</button>

    </>
  )
}

export default App
