import { useState } from 'react'
import './App.css'


const scale = {
  "meter": 1,
  "Decimeter": 10,
  "kilometer": 0.001,
  "mile": 0.0006213712,
  "inch": 39.37007874,
  "centimeter": 100,
  "milimeter": 1000,
  "feet": 3.28084,
  "yard": 1.0936132983
}
function App() {

  const [inputValue, setInputValue] = useState("")
  const [fromInput, setFromInput] = useState("meter")
  const [toInput, setToInput] = useState("centimeter")
  const [result, setResult] = useState("0")


  function Input() {
    let input = event.target.input;
    setInputValue(input)
  }

  function From() {
    let from = event.target.from;
    setFromInput(from)
  }

  function To() {
    let to = event.target.to;
    setToInput(to)
  }


function handleClick(){
let showAnswer=(inputValue / scale[fromInput] * scale[toInput])
setResult(showAnswer)
}




  return (
    <div className='container'>
      <div className='firstInput'>
        <label className='amount'>Amount</label>
        <input type="number" className='amountInput' placeholder='please enter number'
          value={inputValue}
          onChange={Input} />
      </div>

      <section className='secondContainer'>
        <div className='conversion'>

          <div>
            <label className='from'>From</label>
            <select name="from" className='fromLabel'
              value={fromInput}
              onChange={From}>
              <option value="meter">Meter</option>
              <option value="Decimeter">Decimeter</option>
              <option value="kilometer">Kilometer</option>
              <option value="mile">Mile</option>
              <option value="inch">Inch</option>
              <option value="centimeter">Centimeter</option>
              <option value="milimeter">Milimeter</option>
              <option value="feet">Feet</option>
              <option value="yard">Yard</option>
            </select>
          </div>


          <div>
            <label className='to'>To</label>
            <select name="To" className='Tolabel'
              value={toInput}
              onChange={To}>
              <option value="meter">Meter</option>
              <option value="Decimeter">Decimeter</option>
              <option value="kilometer">Kilometer</option>
              <option value="mile">Mile</option>
              <option value="inch">Inch</option>
              <option value="centimeter">Centimeter</option>
              <option value="milimeter">Milimeter</option>
              <option value="feet">Feet</option>
              <option value="yard">Yard</option>
            </select>
          </div>
          <button className='convertBtn' onClick={handleClick}>Convert</button>
        </div>
      </section>
       <p className='result'>Result is:{result}</p>
    </div>
  )
}

export default App
