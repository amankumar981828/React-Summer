import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, increaseByOne] = useState(15)
  
// let counter = 15;

const addVlaue = ()=>{
  if(counter < 20){
    increaseByOne(counter + 1);
  }
  
}

const removeValue = () => {
  if(counter > 0){
    increaseByOne(counter - 1);
  }
}
  return (
    <>
      <h1>Aman and react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVlaue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
